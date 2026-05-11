<template>
  <view style="padding: 20px;">
    <view class="list">
      <view v-for="(item,index) in item" :key="index" class="item" @click="toPath">{{item}}</view>
    </view>
    <!-- 底部导航栏 -->
    <my-tabbar></my-tabbar>
    

  </view>
</template>

<script setup>
  import {ref} from 'vue'
  const item = ref(['行测','申论','面试'])
  const toPath = () =>{
    uni.navigateTo({
      url: '/pages/aptitude/aptitude',
    })
  }
</script>
<style>
  .item {
    background-color: pink;
    padding: 20px;
    margin-top: 10px;
    text-align: center;
  }
</style>