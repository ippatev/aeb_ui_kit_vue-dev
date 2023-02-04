<script lang="ts">
import {defineComponent, ref} from 'vue';
import aebDragAndDrop from './DragAndDrop.directive';
import AebButton from '../Button/Button.vue';
import iconSource from '@/assets/images/clip.svg';
import hoveredIconSource from '@/assets/images/clip_blue.svg';

export default defineComponent({
    name: 'aeb-file-attach',
    components: {AebButton},
    props: {
        title: {
            type: String,
            default: ''
        },
        layoutMod: {
            type: String,
            default: 'salaryPortal'
        },
        documentList: {
            type: String,
            default: ''
        },
        maxFilesLength: {
            type: Number,
            default: 10
        },
        showPassportInput: {
            type: Boolean,
            default: true
        },
        showDocumentList: {
            type: Boolean,
            default: true
        },
        fileTypeMessage: {
            type: String,
            default: ''
        }
    },
    emits: ['changeListEvent', 'maxFilesLengthError'],
    directives: {
        aebDragAndDrop
    },
    setup(props, {emit}) {
        const fileInputRef = ref<HTMLInputElement>();
        const files = ref<File[]>([]);
        const isFileInFocus = ref(false);
        const clearFileList = () => {
            files.value = [];
            emit('changeListEvent');
        };
        const getCaseByNumber = (word: string[]) => {
            const num = files.value.length;
            const cases = [2, 0, 1, 1, 1, 2];
            return word[num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]];
        };
        const chooseFile = (file: File | undefined) => {
            if (file) {
                if (files.value.length > props.maxFilesLength) {
                    emit('maxFilesLengthError');
                } else {
                    files.value = [...files.value, file];
                    emit('changeListEvent', files);
                }
            }
        };

        const checkFileInFocus = (isInFocus: boolean) => {
            isFileInFocus.value = isInFocus;
        };
        const openAttach = () => {
            fileInputRef?.value?.click();
        };
        return {
            emit,
            fileInputRef,
            files,
            isFileInFocus,
            iconSource,
            hoveredIconSource,
            openAttach,
            clearFileList,
            getCaseByNumber,
            chooseFile,
            checkFileInFocus
        };
    }
});
</script>

<template>
    <div
        v-aeb-drag-and-drop="{chooseFile, checkFileInFocus}"
        :class="{
            'attach--file-in-focus': isFileInFocus,
            'attach--salary-portal': layoutMod === 'salaryPortal',
            'attach--simple': layoutMod === 'simple'
        }"
        class="attach">
        <div v-if="layoutMod !== 'simple'" class="attach__title">{{ title }}</div>
        <div
            v-if="showPassportInput && layoutMod !== 'salaryPortal' && layoutMod !== 'simple'"
            class="attach__passport-wrapper">
            <div class="attach__passport-item">
                <div class="attach__passport-icon attach__passport-icon--primary"></div>
                <div class="attach__passport-title">Паспорт (разворот с подписью и фотографией)</div>
            </div>
            <div class="attach__passport-item">
                <div class="attach__passport-icon attach__passport-icon--secondary"></div>
                <div class="attach__passport-title">Паспорт (страница с последней регистрацией)</div>
            </div>
        </div>
        <div v-if="showDocumentList && layoutMod !== 'salaryPortal' && layoutMod !== 'simple'" class="attach__doclist">
            {{ documentList }}
        </div>
        <div v-if="layoutMod === 'salaryPortal'" class="attach__upload-icon">
            <svg fill="none" height="60" viewBox="0 0 70 60" width="70" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M56.9299 17.0405C56.1814 12.5554 53.979 8.46218 50.6107 5.356C46.8682 1.90145 42.0029 0 36.9361 0C33.0208 0 29.2063 1.13216 25.9387 3.26585C23.2182 5.03667 20.9583 7.43163 19.3605 10.2475C18.6695 10.1169 17.9498 10.0443 17.2301 10.0443C11.1125 10.0443 6.13202 15.0665 6.13202 21.2353C6.13202 22.0336 6.21838 22.8029 6.36233 23.5577C2.40387 26.4607 0 31.1345 0 36.1131C0 40.1337 1.48262 44.0382 4.18877 47.1299C6.96689 50.2941 10.6375 52.1665 14.5527 52.3843C14.5959 52.3843 14.6247 52.3843 14.6679 52.3843H27.0471C28.1267 52.3843 28.9903 51.5134 28.9903 50.4247C28.9903 49.3361 28.1267 48.4652 27.0471 48.4652H14.7255C8.83817 48.1024 3.88649 42.4561 3.88649 36.0985C3.88649 31.9908 6.07444 28.1589 9.60107 26.0833C10.4215 25.6043 10.767 24.6027 10.4503 23.7028C10.1625 22.919 10.0185 22.0917 10.0185 21.2063C10.0185 17.2001 13.2572 13.9343 17.2301 13.9343C18.0794 13.9343 18.9143 14.0794 19.6915 14.3697C20.6416 14.7181 21.6924 14.2827 22.1242 13.3682C24.816 7.6058 30.6313 3.88999 36.9504 3.88999C45.4431 3.88999 52.4532 10.3056 53.2593 18.8113C53.3457 19.6967 54.0078 20.4079 54.8715 20.5531C61.277 21.6562 66.1135 27.6218 66.1135 34.4293C66.1135 41.6432 60.4853 47.9137 53.5472 48.4507H42.9385C41.8589 48.4507 40.9953 49.3216 40.9953 50.4102C40.9953 51.4988 41.8589 52.3697 42.9385 52.3697H53.6192C53.6623 52.3697 53.7055 52.3697 53.7631 52.3697C58.1534 52.0504 62.2558 50.0183 65.3074 46.6218C68.3447 43.2544 70 38.9289 70 34.4293C69.9856 26.2865 64.4725 19.0435 56.9299 17.0405Z"
                    fill="#F0F0F0" />
                <path
                    d="M46.6828 36.5255C47.4469 35.8634 47.4469 34.8014 46.6828 34.1393L36.3754 25.2068C36.015 24.8944 35.5104 24.707 35.0059 24.707C34.5013 24.707 33.9967 24.8819 33.6363 25.2068L23.3289 34.1393C22.5648 34.8014 22.5648 35.8634 23.3289 36.5255C23.7037 36.8503 24.2083 37.0252 24.6984 37.0252C25.1886 37.0252 25.6931 36.8628 26.0679 36.5255L33.0597 30.4663V58.3134C33.0597 59.2504 33.9247 60 35.0059 60C36.0871 60 36.952 59.2504 36.952 58.3134V30.4663L43.9438 36.5255C44.6934 37.1876 45.9188 37.1876 46.6828 36.5255Z"
                    fill="#F0F0F0" />
            </svg>
        </div>
        <div v-if="layoutMod === 'salaryPortal'" class="attach__info-txt">Перетащите файл сюда</div>
        <div
            :class="{
                'attach__button-wrapper--simple': layoutMod === 'simple',
                'attach__button-wrapper': layoutMod !== 'simple'
            }">
            <div v-if="layoutMod === 'salaryPortal'" class="attach__btn-left">или</div>
            <aeb-button
                :hoveredIconSource="hoveredIconSource"
                :iconSource="iconSource"
                :showIcon="true"
                :solid="false"
                label="Выберите файлы"
                @click="openAttach">
            </aeb-button>
            <input ref="fileInputRef" style="display: none" type="file" @change="chooseFile($event.target.files[0])" />
            <div class="attach__file-message">
                <span v-if="files?.length === 0">{{ fileTypeMessage }}</span>
                <span v-if="files?.length > 0">
                    {{ files?.length === 1 ? 'Выбран' : 'Выбрано' }} {{ files.length }}
                    {{ getCaseByNumber(['файл', 'файла', 'файлов']) }}
                </span>
                <div v-if="files?.length > 0" class="attach__remove-icon" @click="clearFileList()">
                    <svg fill="none" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10.7609L11.0268 4.73413" stroke="#27303E" stroke-linecap="round" />
                        <path d="M11.0268 10.7609L5 4.73413" stroke="#27303E" stroke-linecap="round" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import './FileAttach.scss';
</style>
