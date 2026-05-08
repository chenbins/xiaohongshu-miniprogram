<template>
    <view>
        <up-tabbar :placeholder="true" :fixed="true" :safeAreaInsetBottom="true" @change="handleTabChange">
            <up-tabbar-item v-for="(item, index) in tabList" :key="index" :text="item.text"
                :icon="item.icon"></up-tabbar-item>
        </up-tabbar>
    </view>

</template>
<script setup>
import { ref } from 'vue'
const currentIndex = ref(-1)
// const value2 = ref(1)
const tabList = [
    { text: '首页', icon: 'home', path: '/pages/index/index' },
    { text: '题库', icon: 'order', path: '/pages/question/question' },
    { text: '我的', icon: 'account', path: '/pages/mine/mine' }
]
const handleTabChange = (e) => {
  console.log('当前点击的索引是:', e)
  
  if (tabList[e] && tabList[e].path) {
    currentIndex.value = e
    uni.switchTab({
      url: tabList[e].path
    })
  } else {
    console.error('未找到对应的路径，索引值为:', e)
  }
}
</script>