<template>
  <div class="flex justify-center items-center bg-violet-600 min-h-screen">
    <div class="w-[400px] px-4">
      <h1 class="flex justify-center items-center text-white text-4xl">
        <heroicons-outline-book-open class="w-10 h-10 mr-2" />
        <span class="text-xl font-medium">TestPress</span>
      </h1>

      <Card class="mt-8 p-6 sm:p-8">
        <form class="space-y-8" @submit.prevent="handleSubmit">
          <TextInput
            id="email"
            label="E-mail"
            type="email"
            error=""
            v-model="form.email"
          />
          <TextInput
            label="姓名"
            id="name"
            error=""
            v-model="form.name"
          />
          <TextInput
            id="password"
            label="密碼"
            type="password"
            error=""
            v-model="form.password"
          />
          <TextInput
            id="confirm_password"
            label="確認密碼"
            type="password"
            error=""
            v-model="form.confirm_password"
          />
          <PrimaryButton type="submit" :loading="loading" class="w-full"
            >註冊</PrimaryButton
          >
        </form>
        <hr class="border-gray-200 mt-6 mb-4" />
        <div class="text-center text-gray-600">
          已經註冊過?
          <RouterLink to="/login" class="link">登入帳號</RouterLink>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { successNotify } from "@/composables/useNotification";
import { promiseTimeout } from "@vueuse/shared";

export default {
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const form = reactive({
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    });

    const handleSubmit = async () => {
      loading.value = true;
      //異步操作
      await promiseTimeout(1000);
      loading.value = false;
      router.push("/login").then(() => {
        successNotify("註冊成功");
      });
    };

    return { form, loading, handleSubmit };
  },
};
</script>