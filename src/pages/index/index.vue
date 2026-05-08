<template>
  <view style="padding: 20px;">
    <!-- 底部导航栏 -->
     首页
    <my-tabbar></my-tabbar>
  </view>
</template>

<script setup>
// 隐藏原生底部导航栏
import useTabbar from '@/hooks/useTabbar'
useTabbar()
</script>