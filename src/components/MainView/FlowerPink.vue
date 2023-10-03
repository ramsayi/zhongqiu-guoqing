<script lang="ts" setup>
import anime from 'animejs'
import { onMounted } from 'vue';

const flowerPink1 = () => {
  anime({
    targets: '.flower', // 选择器
    translateX: 20, // x轴偏移量
    translateY: 20, // y轴偏移量
    easing: 'easeInOutSine', // 缓动函数
    duration: 4000, // 动画时间
    direction: 'alternate', // 循环方式
    loop: true // 是否循环
  })
}

const flowerPink2 = () => {
  anime({
    targets: '.flower',
    translateX: -20,
    translateY: 20,
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: true
  })
}

onMounted(() => {
  flowerPink1()
  flowerPink2()
})
</script>

<template>
  <div class="flower1" />
  <div class="flower2" />
</template>

<style lang="scss" scoped>
.flower1 {
  float: left; // 浮动
  position: fixed; // 固定定位
  bottom: -20px; // 底部偏移量
  left: 0; // 左侧偏移量
  width: calc(2440px / 4); // 宽度
  height: calc(834px / 4); // 高度
  background-image: url('../../assets/首页海报/粉花左.png'); // 背景图片
  background-position: center center; // 背景图片居中
  background-repeat: no-repeat; // 背景图片不重复
  background-size: cover; // 背景图片自适应
  img {
    width: 100%; // 图片宽度100%
    height: 100%; // 图片高度100%
    object-fit: cover; // 图片自适应
  }
}
.flower2 {
  float: right;
  position: fixed;
  bottom: -20px;
  right: 0;
  width: calc(2756px / 4);
  height: calc(742px / 4);
  background-image: url('../../assets/首页海报/粉花右.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>