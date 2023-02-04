const onDrop = (event: any, binding: any) => {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
        binding.value.chooseFile(files[0]);
    }
    binding.value.checkFileInFocus(false);
};
const onDragOver = (event: any, binding: any) => {
    event.preventDefault();
    event.stopPropagation();
    binding.value.checkFileInFocus(true);
};
const onDragLeave = (event: any, binding: any) => {
    event.preventDefault();
    event.stopPropagation();
    binding.value.checkFileInFocus(false);
};
export default {
    beforeMount: (el: any, binding: any) => {
        el.addEventListener('drop', (event: any) => onDrop(event, binding));
        el.addEventListener('dragover', (event: any) => onDragOver(event, binding));
        el.addEventListener('dragleave', (event: any) => onDragLeave(event, binding));
    },
    beforeUnmounted: (el: any, binding: any) => {
        el.removeEventListener('drop', (event: any) => onDrop(event, binding));
        el.removeEventListener('dragover', (event: any) => onDragOver(event, binding));
        el.removeEventListener('dragleave', (event: any) => onDragLeave(event, binding));
    }
};
