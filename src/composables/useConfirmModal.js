import { ref } from 'vue'
import mitt from 'mitt'

const confirmEvents = mitt()

const showModal = ref(false);
const confirmTitle = ref('')
const handleSuccess = () => {
    console.log('handleSuccess');
    confirmEvents.emit('success')
}
const handleCancel = () => {
    console.log('handleCancel');
    confirmEvents.emit('cancel')
}


export function useConfirmModal() {
    return { showModal, confirmTitle, handleSuccess, handleCancel };
}


export function useConfirm(title) {
    confirmTitle.value = title
    showModal.value = true

    return new Promise((resole) => {
        confirmEvents.on('success', () => {
            resole(true)
        })
        confirmEvents.on('cancel', () => {
            resole(false)
        })
    })
}