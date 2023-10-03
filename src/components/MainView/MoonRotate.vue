<script lang="ts" setup>
import anime from 'animejs'
import { onMounted } from 'vue'

// 定义月球旋转的动画
const moonRotate = () => {
  anime({
    targets: '.moon', // 选择器
    rotate: '1turn', // 旋转角度
    easing: 'linear', // 缓动函数
    duration: 60000, // 动画时间
    loop: true // 是否循环
  })
}

onMounted(() => {
  moonRotate()
})
</script>

<template>
  <div class="moon" />
</template>

<style lang="scss" scoped>
.moon {
  position: fixed; // 固定定位
  width: 70vh; // 宽度
  height: 70vh; // 高度
  margin-left: 29vw; // 左侧偏移量
  margin-top: -350px; // 顶部偏移量
  background-image: url('../../assets/首页海报/月亮.png'); // 背景图片
  background-position: center center; // 背景图片居中
  background-repeat: no-repeat; // 背景图片不重复
  background-size: cover; // 背景图片自适应
}
</style>
