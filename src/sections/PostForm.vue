<template>
  <div class="grid gap-6 lg:grid-cols-12">
    <!-- 左側文章標題/內容 -->
    <div class="space-y-6 lg:col-span-8 xl:col-span-9">
      <!-- 標題 -->
      <TextInput
        id="title"
        label="文章標題"
        error=""
        wrapperClass=""
        v-model="form.title"
        required
      />

      <!-- 內容 -->
      <Editor id="content" label="文章內容" v-model="form.content" />

      <!-- 電腦板 - 送出按鈕 -->
      <div class="hidden space-x-4 lg:flex lg:items-center lg:justify-end">
        <SecondaryButton @click="submitDraft">保存草稿</SecondaryButton>
        <PrimaryButton @click="submit">發布文章</PrimaryButton>
      </div>
    </div>

    <!-- 右側側邊攔 -->
    <div class="space-y-6 lg:col-span-4 xl:col-span-3">
      <!-- 縮圖 -->
      <ImageUpload
        id="image"
        label="縮圖"
        error=""
        wrapperClass=""
        :default-image="defaultImage"
        v-model="form.image"
        required
        image-class="rounded-md aspect-w-16 aspect-h-9"
      />
      <!-- default-image="" -->
      <!-- 簡介 -->
      <TextareaInput
        id="description"
        label="文章簡介"
        error=""
        wrapperClass=""
        v-model="form.description"
        required
      />
      <!-- 標籤 -->
      <TagsInput
        id="tags"
        label="標籤"
        v-model="form.tags"
        :autocomplete-items="tagsAutocompleteIems"
      />
      <!-- 手機板 - 送出按鈕 -->
      <div class="grid grid-cols-2 gap-4 lg:hidden">
        <SecondaryButton @click="submitDraft">保存草稿</SecondaryButton>
        <PrimaryButton @click="submit">發布文章</PrimaryButton>
      </div>
    </div>
  </div>
</template>

<script>
import { useVModel } from "@vueuse/core";
import Editor from "@/components/Editor/Editor.vue";

export default {
  emits: ["update:modelValue", "submit", "submitDraft"],
  props: {
    modelValue: Object,
    defaultImage: String,
    tagsAutocompleteIems: Array,
  },
  setup(props, { emit }) {
    const form = useVModel(props);
    const submit = () => {
      emit("submit");
    };
    const submitDraft = () => {
      emit("submitDraft");
    };
    return { form, submit, submitDraft };
  },
  components: { Editor },
};
</script>