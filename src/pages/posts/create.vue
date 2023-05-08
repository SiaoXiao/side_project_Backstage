<template>
  <Layout>
    <PageHeader>
      <template #title>
        <RouterLink class="link" to="/posts">文章</RouterLink> /
        新增文章</template
      >
    </PageHeader>
    <Card class="mt-6" stretch>
      <CardContent>
        <PostForm
          v-model="form"
          :default-image="defaultImage"
          :tags-autocomplete-iems="tagsAutocompleteIems"
          @submit="submit"
          @submitDraft="submitDraft"
        />
      </CardContent>
      <Loading :show="loading" text="保存中..." />
    </Card>
  </Layout>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { successNotify } from "@/composables/useNotification";
import { promiseTimeout } from "@vueuse/shared";
import CardContent from "@/components/CardContent.vue";

export default {
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const defaultImage = ref("");
    const tagsAutocompleteIems = ref(["vue2", "vue3", "tailwindcss"]);
    const form = reactive({
      title: "",
      content: ``,
      image: null,
      description: "",
      tags: [],
    });
    const submit = async () => {
      loading.value = true;
      //異步操作
      await promiseTimeout(1000);
      loading.value = false;
      console.log("submit");
      router.push("/posts").then(() => {
        successNotify("文章發布成功");
      });
    };
    const submitDraft = async () => {
      loading.value = true;
      //異步操作
      await promiseTimeout(1000);
      loading.value = false;
      console.log("smitdraft");
      router.push("/posts").then(() => {
        successNotify("草稿保存成功");
      });
    };
    return {
      form,
      defaultImage,
      loading,
      submit,
      submitDraft,
      tagsAutocompleteIems,
    };
  },
  components: { CardContent },
};
</script>

<style>
</style>