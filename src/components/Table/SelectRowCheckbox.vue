<template>
  <input
    type="checkbox"
    :checked="state"
    class="form-checkbox"
    @change="updateState"
  />
</template>

<script>
export default {
  emits: ["update:state"],
  props: {
    state: Boolean,
    index: Number
  },
  setup(props, { emit }) {
    const updateState = (e) => {
      emit("update:state", e.target.checked, props.index);
    };

    return {
      updateState,
    };
  },
};
</script>