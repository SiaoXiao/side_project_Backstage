<template>
  <button
    type="button"
    class="
      w-8
      h-8
      inline-flex
      justify-center
      items-center
      text-gray-400
      hover:text-red-600
      transition-colors
    "
    @click.prevent="handleDelete"
  >
    <heroicons-outline-trash />
  </button>
</template>

<script>
import { useConfirm } from '@/composables/useConfirmModal'
export default {
    emits: ['delete'],
    props: {
        record: Object,
        confirmText: {
            type: String,
            default: '確定要執行刪除嗎?'
        }
    },
    setup(props, { emit }) {
        const handleDelete = async () => {
            console.log('刪除');
            if(await useConfirm(props.confirmText)) {
                emit('delete', props.record)
            }
        }

        return { handleDelete }
    }
};
</script>

<style>
</style>