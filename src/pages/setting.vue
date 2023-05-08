<template>
  <Layout>
    <PageHeader>
      <template #title>個人資料</template>
    </PageHeader>
    <Card class="mt-6" stretch>
      <CardContent>
        <form @submit.prevent="submit">
          <div class="grid gap-6 md:grid-cols-12">
            <div class="space-y-6 md:col-span-9">
              <TextInput label="姓名" id="name" v-model="form.name" />
              <TextareaInput
                label="介紹"
                id="description"
                v-model="form.description"
                class="h-28"
              />
            </div>
            <div class="order-first text-center md:col-span-3 md:order-none">
              <ImageUpload
                id="avatar"
                :default-image="defaultAvatar"
                v-model="form.avatar"
                image-class="rounded-full aspect-w-1 aspect-h-1"
                image-wrapper-class="w-32 mx-auto"
              />
            </div>

            <div class="md:col-span-6">
              <TextInput
                id="email"
                label="E-mail"
                type="email"
                error=""
                v-model="form.email"
              />
            </div>
            <div class="md:col-span-6">
              <TextInput
                id="password"
                label="密碼"
                type="password"
                error=""
                v-model="form.password"
              />
            </div>
          </div>
          <div class="flex justify-end mt-6">
            <PrimaryButton type="submit" class="w-full md:w-auto"
              >儲存設定</PrimaryButton
            >
          </div>
        </form>
      </CardContent>
      <Loading :show="loading" text="保存中..." />
    </Card>
  </Layout>
</template>

<script>
import { reactive, ref } from "vue";
import { successNotify } from "@/composables/useNotification";
import { promiseTimeout } from "@vueuse/core";

export default {
  setup() {
    const loading = ref(false);
    const defaultAvatar = ref(
      "https://pic.pimg.tw/takeshi0312/d0bb69ca36c258ba2c5a294bb7491d68.jpg"
    );
    const form = reactive({
      name: "",
      description: "",
      avatar: null,
      email: "",
      password: "",
    });
    const submit = async () => {
      loading.value = true;
      //異步操作
      await promiseTimeout(1000);
      loading.value = false;
      successNotify("個人資料保存成功");
    };
    return {
      form,
      defaultAvatar,
      loading,
      submit,
    };
  },
};
</script>

<style>
</style>