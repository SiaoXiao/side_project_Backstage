<template>
  <transition
    enter-active-class="transition-transform duration-200"
    enter-from-class="translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition-transform duration-150"
    leave-from-class="translate-y-0"
    leave-to-class="translate-y-full"
  >
    <div
      v-if="show"
      class="
        fixed
        left-0
        right-0
        bottom-0
        bg-white
        h-16
        shadow-lg-top
        sm:left-[16rem]
      "
    >
      <div
        class="w-full h-full px-4 flex justify-between items-center sm:px-10"
      >
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<style>
</style>