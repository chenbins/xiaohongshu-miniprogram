<template>
  <view class="u-page">
    <view class="u-demo-block">
      <!-- 滑动器 只作为进度指示器，不可拖动 -->
      <up-slider v-model="sliderValue" :min="1" :max="question.length" activeColor="green" showValue="true"
        disabled></up-slider>
      <view v-for="(item, id) in currentPageData" :key="id">
        <!-- 题目 -->
        <view style="margin-left: 35px;">{{ item.title }}</view>
        <!-- 选项 -->
        <view v-for="(opt, idx) in item.options" :key="idx" class="option"  @click="next">
          <view>{{ opt }}</view>
        </view>
      </view>
      <button @click="currentPage > 1 ? currentPage-- : currentPage = 1">上一题</button>
      <button @click="submit" v-if="toNext">提交</button>
      <button @click="next" v-else>下一题</button>
    </view>
    <button @click="show = true">123</button>
    <up-popup :show="show" mode="bottom" closeable="true" @close="show = false">
        <view>
            <text>答题卡</text>
            <view class="circle" v-for="(item,index) in question" :key="index">{{ index + 1}}</view>
        </view>
	</up-popup>
  </view>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
const show = ref(false)
const currentPage = ref(1)
const pageSize = ref(1)
// 滑动器值，与currentPage同步
const sliderValue = ref(currentPage.value)
const question = ref([{
  "id": 1,
  "title": "HTML中哪个标签用于定义段落？",
  "options": ["A. div", "B. p", "C. span", "D. h1"],
  "answer": "B"
},
{
  "id": 2,
  "title": "CSS中设置文字颜色的属性是？",
  "options": ["A. font-size", "B. text-align", "C. color", "D. background"],
  "answer": "C"
},
{
  "id": 3,
  "title": "JavaScript中声明变量的关键字不包括？",
  "options": ["A. let", "B. const", "C. var", "D. define"],
  "answer": "D"
},
{
  "id": 4,
  "title": "HTTP协议默认使用的端口号是？",
  "options": ["A. 22", "B. 80", "C. 443", "D. 3306"],
  "answer": "B"
},
{
  "id": 5,
  "title": "MySQL属于什么类型数据库？",
  "options": ["A. 关系型数据库", "B. 非关系型数据库", "C. 内存数据库", "D. 图形数据库"],
  "answer": "A"
},
{
  "id": 6,
  "title": "Vue组件实例生命周期最先执行的是？",
  "options": ["A. mounted", "B. created", "C. updated", "D. destroyed"],
  "answer": "B"
},
{
  "id": 7,
  "title": "以下哪个不是JavaScript数据类型？",
  "options": ["A. String", "B. Number", "C. Float", "D. Boolean"],
  "answer": "C"
},
{
  "id": 8,
  "title": "设置元素隐藏但仍占空间的CSS属性是？",
  "options": ["A. display:none", "B. visibility:hidden", "C. opacity:0", "D. overflow:hidden"],
  "answer": "B"
},
{
  "id": 9,
  "title": "Git中提交本地代码到暂存区的命令是？",
  "options": ["A. git push", "B. git add", "C. git commit", "D. git clone"],
  "answer": "B"
},
{
  "id": 10,
  "title": "HTTPS协议默认端口是？",
  "options": ["A. 8080", "B. 80", "C. 443", "D. 21"],
  "answer": "C"
}])
// 控制按钮
const toNext = ref(false)
const currentPageData = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return question.value.slice(start, end)
})
const next = () => {
  if (currentPage.value < question.value.length) {
    currentPage.value++
  }
}

const submit = () => {
  console.log('提交答案')
  // TODO: 实现提交逻辑
}
// 页码变化时同步到滑动器
watch(currentPage, (newPage) => {
  sliderValue.value = newPage
  if (currentPage.value=== question.value.length) {
    toNext.value = true
  }else {
    toNext.value = false
  }
},{deep: true})
// 初始化时同步一次
sliderValue.value = currentPage.value
</script>

<style>
.circle {
  text-align: center;
  line-height: 100rpx;
  width: 100rpx;     
  height: 100rpx;    
  border-radius: 50%;
  background: #409eff;
}
.option {
  width: 350px;
  height: 40px;
  text-align: center;
  padding-top: 20rpx;
  margin-top: 10rpx;
  margin-left: 35rpx;
  background-color: red;
}

/* 增大滑动器 */
:deep(.u-slider-inner) {
  height: 40px !important;
  padding: 10px 0 !important;
}

/* 增大滑动器轨道 */
:deep(.u-slider__base) {
  height: 12px !important;
  border-radius: 6px !important;
}

/* 增大进度条 */
:deep(.u-slider__gap) {
  height: 12px !important;
  border-radius: 6px !important;
}

/* 隐藏滑动器轨道背景 */
:deep(.u-slider__base) {
  background-color: transparent !important;
}

/* 隐藏 slider 的白色滑块按钮 */
:deep(.u-slider__button) {
  display: none !important;
}
</style>