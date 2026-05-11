<template>
  <view class="bar">
    <view class="tab-item" v-for="(item, index) in tabList" :key="index" @click="toPath(item.path)">
      <!-- icon图标 -->
      <text :class="['tab-icon', { 'active': currentPath === item.path }]">{{ item.icon }}</text>
      <!-- 文字颜色动态切换 -->
      <text :class="['tab-text', { 'active': currentPath === item.path }]">
        {{ item.text }}
      </text>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted } from "vue";

const tabList = [
  { text: "练习", path: "/pages/index/index", icon: "🏠" },
  { text: "学习路线", path: "/pages/question/question", icon: "📚" },
  { text: "我的", path: "/pages/mine/mine", icon: "👤" },
];

const currentPath = ref("");

onMounted(() => {
  // 获取当前页面路径，自动匹配高亮
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  currentPath.value = "/" + currentPage.route;
});

//  跳转逻辑
const toPath = (path) => {
  uni.switchTab({
    url: path,
    fail: (err) => {
      console.error("跳转失败，请检查路径是否在 pages.json 的 tabBar 中", err);
    }
  });
};
</script>

<style scoped>
.bar {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 55px;
  background-color: #ffffff;
  border-top: 1px solid #eeeeee;
  z-index: 999;
  padding-bottom: constant(safe-area-inset-bottom);
  /* 适配苹果刘海屏底部 */
  padding-bottom: env(safe-area-inset-bottom);
}

.tab-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.tab-icon {
  font-size: 22px;
  color: #666666;
}

.tab-icon.active {
  color: #007aff;
}

.tab-text {
  font-size: 14px;
  color: #666666;
  transition: all 0.2s;
}

.active {
  color: #007aff;
  font-weight: bold;
  font-size: 15px;
}
</style>