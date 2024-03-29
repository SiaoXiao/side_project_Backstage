<template>
  <div :class="wrapperClass">
    <label :for="id" class="form-label">{{ label }}</label>
    <div
      v-if="editor"
      class="p-0 form-input focus-within:border-violet-600 focus-within:ring-1 focus-within:ring-violet-600"
    >
      <EditorMenuBar />
      <EditorContent :editor="editor" class="px-3 py-2 mt-2" />
    </div>
    <div v-if="error" class="form-error">{{ error }}</div>
  </div>
</template>

<script>
import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import { provide, watch } from "vue";
import mitt from "mitt";
import Link from '@/components/Editor/Link'
import Image from '@tiptap/extension-image'

export default {
  components: {
    EditorContent,
  },
  inheritAttrs: false,
  emits: ["update:modelValue"],
  props: {
    id: String,
    modelValue: String,
    label: String,
    error: String,
    wrapperClass: [String, Array, Object],
  },

  setup(props, { emit }) {
    const editorEvent = mitt();
    const editor = useEditor({
      content: props.modelValue,
      extensions: [
        StarterKit,
        Link(editorEvent),
        Image
      ],
      editorProps: {
        attributes: {
          class:
            "prose prose-sm prose-violet sm:prose sm:prose-violet focus:outline-none !max-w-full min-h-[300px]",
        },
      },
      onUpdate: () => {
        emit("update:modelValue", editor.value.getHTML());
      },
    });

    watch(
      () => props.modelValue,
      (value) => {
        if (editor.value.getHTML() === value) {
          return;
        }

        editor.value.commands.setContent(value, false);
      }
    );

    provide("editor", editor);
    provide("editorEvent", editorEvent);

    return { editor };
  },
};
</script>