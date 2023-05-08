<template>
  <div>
    <Layout>
      <PageHeader>
        <template #title>首頁</template>
      </PageHeader>
      <div class="mt-6 grid md:grid-cols-12 gap-4">
        <TrendingCard
          class="md:col-span-12 lg:col-span-4"
          icon="eye"
          label="瀏覽人次"
          value="145"
          :isUp="true"
          Trending="12"
          stretch
        />
        <TrendingCard
          class="md:col-span-12 lg:col-span-4"
          icon="star"
          label="點讚數"
          value="591"
          :isUp="false"
          Trending="12"
          stretch
        />
        <TrendingCard
          class="md:col-span-12 lg:col-span-4"
          icon="annotation"
          label="留言數"
          value="7"
          :isUp="true"
          Trending="53"
          stretch
        />
        <!-- 瀏覽人次 -->
        <Card class="md:col-span-8 min-w-0" stretch>
          <div class="h-[300px] p-5 flex flex-col">
            <h2 class="text-xl font-semibold tracking-wide text-gray-700">
              瀏覽人次
            </h2>
            <div class="pt-4 flex-grow min-h-0">
              <canvas ref="lineChartEl"></canvas>
            </div>
          </div>
        </Card>
        <!-- 瀏覽裝置 -->
        <Card class="md:col-span-4 min-w-0" stretch>
          <div class="h-[300px] p-5 flex flex-col">
            <h2 class="text-xl font-semibold tracking-wide text-gray-700">
              瀏覽裝置
            </h2>
            <div class="pt-4 flex-grow min-h-0">
              <canvas ref="barChartEl"></canvas>
            </div>
          </div>
        </Card>
        <!-- 熱門文章 -->
        <Card class="md:col-span-8 min-w-0 h-full" stretch>
          <!-- 標題 -->
          <div class="flex justify-between p-5 pb-0">
            <h2 class="text-xl font-semibold tracking-wide text-gray-700">
              熱門文章
            </h2>
            <RouterLink to="/posts" class="link flex items-center font-normal"
              >全部文章
              <heroicons-outline-chevron-double-right class="ml-1" />
            </RouterLink>
          </div>
          <!-- 表格 -->
          <Table
          class="mt-4"
            :columns="postsColumns"
            :data="postsData"
            :show-selection="false"
            :show-actions="false"
            :show-paginator="false"
          >
            <template #column-title="{ record, value }">
              <RouterLink
                :to="`/posts/${record.id}`"
                class="link font-normal"
                >{{ value }}</RouterLink
              >
            </template>
            <template #column-visits="{ record, value }">
              <div class="inline-flex items-center font-normal">
                <heroicons-outline-eye class="w-4 h-4 inline-block mr-1" />
                {{ value }}次
                <Trending
                  class="ml-2"
                  :is-up="record.visits_trending_is_up"
                  :value="record.visits_trending_value"
                  percentage
                />
              </div>
            </template>
          </Table>
        </Card>
        <!-- 最新留言 -->
        <Card class="md:col-span-4 min-w-0 h-full" stretch>
          <div class="p-5">
            <h2 class="text-xl font-semibold tracking-wide text-gray-700">
              最新留言
            </h2>
            <ul class="mt-4 space-y-4">
              <li v-for="comment in comments" :key="comment.post_id" class="flex">
                <img
                  class="w-8 h-8 rounded-full"
                  :src="getImageUrl(comment.author_avatar)"
                  alt=""
                />
                <div class="mt-1 ml-4 flex-grow">
                  <div class="mt-1.5 text-gray-800 font-medium tracking-wide">
                    {{comment.author_name}}
                  </div>
                  <div class="mt-2 text-gray-500 text-sm">{{comment.content}}</div>
                  <div class="bg-gray-100 px-3 py-1.5 rounded text-gray-500 text-sm mt-2">
                    留言文章：<RouterLink class="link" :to="`/posts/${comment.post_id}`">{{comment.post_title}}</RouterLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </Layout>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
import { useLineChart, useBarChart } from "@/composables/useChart";

export default {
  setup() {
    const lineChartEl = ref(null);
    const barChartEl = ref(null);
    onMounted(() => {
      useLineChart(
        lineChartEl,
        ["一", "二", "三", "四", "五", "六", "日"],
        [
          {
            label: "6/21 - 6/27",
            data: [0, 10, 5, 2, 20, 30, 45],
            color: "#7C3AED",
          },
          {
            label: "6/14 - 6/20",
            data: [6, 25, 22, 37, 14, 8, 4],
            color: "#c4b5fd",
          },
        ]
      );
      useBarChart(
        barChartEl,
        ["一", "二", "三", "四", "五", "六", "日"],
        [
          {
            label: "電腦",
            data: [0, 10, 5, 2, 20, 30, 45],
            color: "#7C3AED",
          },
          {
            label: "手機",
            data: [6, 25, 22, 37, 14, 8, 4],
            color: "#c4b5fd",
          },
        ]
      );
    });

    const postsColumns = ref([
      { key: "title", label: "標題" },
      { key: "visits", label: "瀏覽次數" },
      { key: "created_at", label: "建立日期" },
    ]);

    const postsData = ref([
      {
        id: 1,
        title: "文章",
        visits: 39,
        visits_trending_is_up: true,
        visits_trending_value: 4,
        created_at: "2022/02/09",
      },
      {
        id: 2,
        title: "文章2",
        visits: 29,
        visits_trending_is_up: false,
        visits_trending_value: 9,
        created_at: "2022/02/09",
      },
      {
        id: 3,
        title: "文章3",
        visits: 13,
        visits_trending_is_up: true,
        visits_trending_value: 12,
        created_at: "2022/02/09",
      },
      {
        id: 4,
        title: "文章3",
        visits: 13,
        visits_trending_is_up: true,
        visits_trending_value: 12,
        created_at: "2022/02/09",
      },
      {
        id: 5,
        title: "文章3",
        visits: 13,
        visits_trending_is_up: true,
        visits_trending_value: 12,
        created_at: "2022/02/09",
      },
      {
        id: 6,
        title: "文章3",
        visits: 13,
        visits_trending_is_up: true,
        visits_trending_value: 12,
        created_at: "2022/02/09",
      },
      {
        id: 7,
        title: "文章3",
        visits: 13,
        visits_trending_is_up: true,
        visits_trending_value: 12,
        created_at: "2022/02/09",
      },
    ]);

    const comments = ref([
      {
        author_name: 'SiaoSiao',
        author_avatar: '01',
        content: '內容內容',
        post_id: 1,
        post_title: '我的文章1',
      },
      {
        author_name: 'SiaoSiao',
        author_avatar: '01',
        content: '內容內容2',
        post_id: 2,
        post_title: '我的文章2',
      },
      {
        author_name: 'SiaoSiao',
        author_avatar: '01',
        content: '內容內容3',
        post_id: 3,
        post_title: '我的文章3',
      },
    ])

    const getImageUrl = (imgUrl) => {
      return new URL(`../assets/headrequest_done_${imgUrl}.jpg`, import.meta.url).href
    }

    return { lineChartEl, barChartEl, postsColumns, postsData, comments, getImageUrl  };
  },
};
</script>