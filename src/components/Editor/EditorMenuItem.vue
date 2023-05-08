<template>
  <button
    class="p-1 mr-1 rounded w-7 h-7"
    :class="isActive() ? 'bg-violet-600 text-white' : 'hover:bg-violet-600 hover:text-white'"
    @click="action"
    :title="title"
  >
  <RemixIcon :icon="icon" />
  </button>
</template>

<script>
export default {
    props: {
        icon: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        action: {
            type: Function,
            required: true,
        },
        isActive: {
            type: Function,
            default: () => false,
        },
    },
};
</script>