<template>
    <div>
        <AebAccordion header="hello world"> Yo! </AebAccordion>
        <AebButton label="this is button"></AebButton>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import AebAccordion from '@/components/Accordion/Accordion.vue';
import AebButton from '@/components/Button/Button.vue';
export default defineComponent({
    name: 'App',
    components: {AebButton, AebAccordion},
    setup() {
        return {};
    }
});
</script>
