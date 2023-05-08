<template>
  <RouterLink
    :to="to"
    class="
      w-8
      h-8
      inline-flex
      justify-center
      items-center
      text-gray-400
      hover:text-violet-600
      transition-colors
    "
  >
    <heroicons-outline-pencil-alt />
  </RouterLink>
</template>

<script>
export default {
  props: {
    to: String,
  },
};
</script>