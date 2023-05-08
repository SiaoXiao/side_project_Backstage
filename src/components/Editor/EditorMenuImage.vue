<template>
  <div class="relative">
    <button
      class="p-1 mr-1 rounded w-7 h-7"
      :class="
        showPopover
          ? 'bg-violet-600 text-white'
          : 'hover:bg-violet-600 hover:text-white'
      "
      @click="handleAction"
      :title="title"
    >
      <RemixIcon :icon="icon" />
    </button>

    <div
      ref="popoverEl"
      v-if="showPopover"
      class="
        absolute
        top-full
        left-[-103px]
        md:left-auto
        w-[300px]
        bg-white
        border border-gray-200
        rounded
        shadow-md
        mt1.5
      "
    >
      <TabGroup>
        <TabList
          class="
            flex
            items-center
            px-3
            space-x-2
            pt-2.5
            border-b border-gray-200
          "
        >
          <Tab
            as="template"
            v-slot="{ selected }"
            v-for="(label, i) in ['連結', '上傳圖片']"
            :key="i"
            ><button
              type="button"
              class="pb-1 text-sm tracking-wide border-b-2"
              :class="
                selected
                  ? 'border-violet-600 text-violet-600'
                  : 'text-gray-500 border-transparent'
              "
            >
              {{ label }}
            </button></Tab
          >
        </TabList>
        <TabPanels class="px-3 py-3.5">
          <TabPanel class="flex items-center">
            <input
              type="text"
              ref="urlEl"
              placeholder="圖片連結..."
              class="px-2 py-1 text-sm form-input"
              v-model="url"
              @keyup.enter="handleSubmit" />

            <button
              type="button"
              title="插入連結"
              class="flex-shrink-0 p-1 ml-1 rounded w-7 h-7 hover:bg-violet-600 hover:text-white"
              @click="handleSubmit"
            >
              <RemixIcon icon="check-line" /></button
          ></TabPanel>
          <TabPanel>
            <PrimaryButton
              class="flex items-center w-full btn-sm"
              @click="selectFile"
            >
              <heroicons-outline-cloud-upload class="mr-1" />
              選擇圖片</PrimaryButton
            >
          </TabPanel>
        </TabPanels>
      </TabGroup>
      <input
        ref="fileEl"
        type="file"
        class="hidden"
        accept="image/*"
        @change="onChangeFile"
      />
    </div>
  </div>
</template>

<script>
import { ref, nextTick } from "vue";
import { onClickOutside } from "@vueuse/core";
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
  },
  setup(props) {
    const url = ref("");
    const urlEl = ref(null);
    const showPopover = ref(false);
    const popoverEl = ref(null);
    const fileEl = ref(null);
    const handleAction = () => {
      showPopover.value = !showPopover.value;
      if (!showPopover.value) return;
      url.value = "";
      onClickOutside(popoverEl, (event) => {
        showPopover.value = false;
      });
      nextTick(() => {
        urlEl.value.focus();
      });
    };
    const handleSubmit = () => {
      if (!showPopover.value) return;
      if (url.value) {
        props.action(url.value);
      }
      showPopover.value = false;
    };

    const selectFile = () => {
      fileEl.value.click()
    };

    const onChangeFile = () => {
            const [file] = fileEl.value.files;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const dataUrl = reader.result;

        props.action(dataUrl)
        showPopover.value = false
      };
    }

    return {
      url,
      urlEl,
      fileEl,
      popoverEl,
      showPopover,
      handleAction,
      handleSubmit,
      selectFile,
      onChangeFile,
    };
  },
};
</script>