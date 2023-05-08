<template>
  <div>
    <Layout>
      <div class="p-4 space-y-4">
        <h1>按鈕元件</h1>
        <div class="space-x-4">
          <PrimaryButton> 主要按鈕</PrimaryButton>

          <PrimaryButton to="/"> 主要按鈕</PrimaryButton>

          <PrimaryButton> 主要按鈕</PrimaryButton>
        </div>
        <div>
          <SecondaryButton> 次要按鈕</SecondaryButton>
        </div>
        <div>
          <DangerButton> 刪除帳號</DangerButton>
        </div>

        <h1>表單元件</h1>
        <div>
          <input type="text" class="form-input" />
        </div>
        <div>
          <textarea class="form-textarea"></textarea>
        </div>
        <div><input type="radio" class="form-checkbox" />單選框</div>
        <div><input type="checkbox" class="form-radio" />多選框</div>
      </div>
      <h1>彈出視窗</h1>
      <div class="p-4">
        <PrimaryButton @click.prevent="showModal = true">
          開啟視窗</PrimaryButton
        >
        <Modal v-model="showModal">
          <!-- <template v-slot:footer> v-slot:footer = #footer
            <h1>覆蓋預設的footer</h1>
          </template> -->
          <template #title> 標題 </template>
          <template #content>
            <div class="mt-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
              laudantium inventore iste neque voluptate eum? Est nihil natus
              voluptatibus illo, harum vitae quam officia maiores vero delectus
              obcaecati totam iste.
            </div>
          </template>
        </Modal>
        <!-- v-bind:model-value="showModal" @update:model-value="" -->
      </div>
      <h1>確認視窗</h1>
      <div class="p-4">
        <PrimaryButton @click.prevent="showModal2 = true">
          開啟視窗</PrimaryButton
        >
        <!-- <ConfirmModal v-model="showModal" /> -->
        <ConfirmModal
          v-model="showModal2"
          title="Props 替換title"
          @success="success"
          @cancel="cancel"
        />
      </div>
      <h1>全局呼叫彈窗</h1>
      <div class="p-4">
        <DangerButton @click.prevent="deletePost">刪除</DangerButton>
      </div>
      <h1>訊息組件</h1>
      <div class="p-4">
        <PrimaryButton @click.prevent="open">顯示通知</PrimaryButton>
      </div>
    </Layout>
  </div>
</template>
<script>
import { ref } from "vue";
import { useConfirmModal, useConfirm } from '@/composables/useConfirmModal'
// import { notify } from "@kyvg/vue3-notification";
import { notify, successNotify } from '@/composables/useNotification'

export default {
  setup() {
    const showModal = ref(false);
    const showModal2 = ref(false);

    const success = () => {
      console.log("success");
    };

    const cancel = () => {
      console.log("cancel");
    };

    const deletePost = () => {
      useConfirm('全局呼叫useConfirmFunc').then((result) => {
        console.log(result);
        if(result) {
          console.log('確認成功');
        }
      })
    }

    const open = () => {
      // notify({
      //   // type: 'warn',
      //   // type: 'error',
      //   type: 'success',
      //   // type: 'etc',
      //   title: "更新成功",
      //   // text: "已經更新成功了",
      //   duration: 1000000,
      // });

      successNotify('標題', '內文')
    }


    return { showModal, showModal2, success, cancel, deletePost, open };
  },
};
</script>