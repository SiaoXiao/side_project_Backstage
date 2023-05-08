<template>
  <div class="flex flex-col min-h-screen sm:flex-row">
    <!-- 左側選單 -->
    <div
      class="relative z-20 flex flex-col justify-between flex-shrink-0 w-full text-white  sm:w-64 bg-violet-600 sm:fixed sm:inset-y-0"
    >
      <!-- Logo -->
      <div
        class="flex items-center justify-between h-16 px-4 sm:justify-center"
      >
        <div class="flex items-center justify-center">
          <heroicons-outline-book-open class="w-10 h-10 mr-2" />
          <span class="text-xl font-medium">TestPress</span>
        </div>
        <button
          class="flex items-center justify-center w-8 h-8 sm:hidden"
          @click.prevent="toggleMenu"
        >
          <heroicons-outline-menu class="w-5 h-5" />
        </button>
      </div>
      <div
        class="flex-grow sm:flex sm:flex-col sm:justify-between"
        :class="showMenu ? '' : 'hidden'"
      >
        <!-- 主要選單 -->
        <ul>
          <li v-for="item in menuItems" :key="item.to">
            <RouterLink
              :to="item.to"
              class="flex items-center px-4 py-3 sm:px-5"
              :class="
                isActive(item.to)
                  ? 'text-white'
                  : 'text-violet-400 hover:text-white'
              "
            >
              <component :is="item.icon" class="w-4 h-4 mr-2" />
              {{ item.text }}
            </RouterLink>
          </li>
        </ul>
        <!-- 用戶名稱 - Mobile -->
        <div class="py-1 mt-2 border-t sm:hidden border-violet-400">
          <div class="flex items-center px-4 py-3">
            <img
              class="w-8 h-8 mr-2 rounded-full"
              src="../assets/headrequest_done_01.jpg"
              alt=""
            />
            <div class="font-medium tracking-wide">SiaoSiao</div>
          </div>

          <ul>
            <template v-for="item in useMenuItems" :key="item.text">
              <li v-if="item.mobile">
                <component
                  :is="item.tag"
                  class="flex items-center w-full px-4 py-3  text-violet-400 hover:text-white"
                  @click.prevent="item.onClick"
                >
                  {{ item.text }}
                </component>
              </li>
            </template>
          </ul>
        </div>

        <!-- 用戶名稱 - Web -->
        <div
          class="hidden px-5 py-4 border-t  sm:flex sm:justify-between sm:items-center border-violet-400"
        >
          <div class="flex items-center">
            <img
              class="w-8 h-8 mr-2 rounded-full"
              src="../assets/headrequest_done_01.jpg"
              alt=""
            />
            <div class="font-medium tracking-wide">SiaoSiao</div>
          </div>

          <Menu as="div" class="relative">
            <MenuButton
              class="flex items-center justify-center transition-colors duration-100 rounded  w-7 h-7 hover:bg-violet-500"
              type="button"
            >
              <heroicons-outline-dots-vertical class="w-4 h-4" />
            </MenuButton>

            <TransitionZoom>
              <MenuItems
                class="absolute bottom-0 flex flex-col w-32 ml-2 overflow-hidden origin-bottom-left bg-white rounded-md shadow-lg  left-full"
              >
                <MenuItem
                  v-slot="{ active }"
                  v-for="item in useMenuItems"
                  :key="item.text"
                >
                  <component
                    :is="item.tag"
                    :to="item.to"
                    class="px-3 py-2 font-normal text-left text-gray-700  test-base"
                    :class="active ? 'bg-gray-100' : ''"
                    @click.prevent="item.onClick"
                    >{{ item.text }}</component
                  >
                </MenuItem>
              </MenuItems>
            </TransitionZoom>
          </Menu>
        </div>
      </div>
    </div>

    <!-- 右側內容 -->
    <div class="relative z-10 flex-grow min-w-0 bg-gray-50 sm:pl-64">
      <div class="p-6 py-8 sm:px-10">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import HeroiconsOutlineHome from "~icons/heroicons-outline/home";
import HeroiconsOutlineDocumentText from "~icons/heroicons-outline/document-text";
import HeroiconsOutlineUser from "~icons/heroicons-outline/user";
import { useRoute, useRouter } from "vue-router";
import TransitionZoom from "./TransitionZoom.vue";

export default {
  components: {
    HeroiconsOutlineHome,
    HeroiconsOutlineDocumentText,
    HeroiconsOutlineUser,
    TransitionZoom,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const showMenu = ref(false);
    const toggleMenu = () => (showMenu.value = !showMenu.value);
    const menuItems = [
      { to: "/", text: "首頁", icon: "heroicons-outline-home" },
      { to: "/posts", text: "文章", icon: "heroicons-outline-document-text" },
      { to: "/setting", text: "個人資料", icon: "heroicons-outline-user" },
      {
        to: "/mycomponent",
        text: "組件練習",
        icon: "heroicons-outline-document-text",
      },
    ];

    const useMenuItems = [
      {
        tag: "RouterLink",
        to: "/setting",
        text: "個人資料",
      },
      {
        tag: "button",
        text: "登出",
        mobile: true,
        onClick: () => {
          //登出處理
          router.push("/login");
        },
      },
    ];

    const activeItem = computed(() =>
      [...menuItems].reverse().find((item) => {
        return route.path.startsWith(item.to);
      })
    );

    const isActive = (to) => to === activeItem.value.to;

    return { showMenu, toggleMenu, menuItems, isActive, useMenuItems };
  },
};
</script>