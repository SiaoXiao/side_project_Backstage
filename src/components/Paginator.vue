<template>
  <div class="paginator px-5 py-3">
    <Pagination v-model="currentPage" :pages="totalPage" hideFirstButton hideLastButton></Pagination>
  </div>
</template>

<script>
import Pagination from "@hennge/vue3-pagination";
import { useVModel } from "@vueuse/core";
export default {
  components: {
    Pagination,
  },
  emits: ["update:currentPage"],
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    totalPage: {
      type: Number,
      default: 10,
    },
  },
  setup(props, { emit }) {
    const currentPage = useVModel(props, "currentPage", emit);
    return { currentPage };
  },
};
</script>

<style>
</style>