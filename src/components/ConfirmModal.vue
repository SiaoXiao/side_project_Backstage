<template>
  <!-- <Modal v-model="isOpen" title="確認視窗title"> -->
  <Modal v-model="isOpen" title="確認視窗title" @cancel="handleCancel">
    <template #icon>
      <heroicons-outline-exclamation
        class="w-12 h-12 mx-auto text-red-600 mt-8"
      />
    </template>
    <template #title>
      <DialogTitle
        as="h3"
        class="
          text-2xl text-center
          font-medium
          text-red-600
          tracking-wider
          mt-2
          mb-4
        "
      >
        {{ title }}
      </DialogTitle>
    </template>

    <template #footer>
      <div class="grid grid-cols-2 gap-4">
        <SecondaryButton class="w-full py-1.5" @click.prevent="handleCancel">取消</SecondaryButton>

        <DangerButton class="w-full py-1.5" @click.prevent="handleSuccess">確定</DangerButton>
      </div>
    </template>
  </Modal>
</template>

<script>
import { useVModel } from "@vueuse/core";

export default {
  emits: ["update:modelValue", 'success', 'cancel'],
  props: {
    modelValue: Boolean,
    title: { type: String, default: '預設文字' },
  },

  setup(props, { emit }) {
    const isOpen = useVModel(props);

    const openModal = () => {
      isOpen.value = true;
    };
    const closeModal = () => {
      isOpen.value = false;
    };

    const handleSuccess = () => {
        emit('success')
        closeModal()
    }

    const handleCancel = () => {
        emit('cancel')
        closeModal()
    }

    return {
      isOpen,
      openModal,
      closeModal,
      handleSuccess,
      handleCancel
    };
  },
};
</script>