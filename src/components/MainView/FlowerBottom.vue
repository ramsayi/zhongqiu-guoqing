<script lang="ts" setup>
import anime from 'animejs'
import { onMounted } from 'vue'

// 定义鲜花1的动画
const flower1 = () => {
  anime({
    targets: '.flower1', // 选择器
    translateX: 10, // x轴偏移量
    translateY: -20, // y轴偏移量
    easing: 'easeInOutSine', // 缓动函数
    duration: 3000, // 动画时间
    direction: 'alternate', // 循环方式
    loop: true // 是否循环
  })
}

// 定义鲜花2的动画
const flower2 = () => {
  anime({
    targets: '.flower2', // 选择器
    translateX: -10, // x轴偏移量
    translateY: -20, // y轴偏移量
    easing: 'easeInOutSine', // 缓动函数
    duration: 2500, // 动画时间
    direction: 'alternate', // 循环方式
    loop: true // 是否循环
  })
}

// 定义鲜花3的动画
const flower3 = () => {
  anime({
    targets: '.flower3', // 选择器
    translateX: 10, // x轴偏移量
    translateY: -20, // y轴偏移量
    easing: 'easeInOutSine', // 缓动函数
    duration: 3000, // 动画时间
    direction: 'alternate', // 循环方式
    loop: true // 是否循环
  })
}

// 定义鲜花4的动画
const flower4 = () => {
  anime({
    targets: '.flower4', // 选择器
    translateX: -10, // x轴偏移量
    translateY: -20, // y轴偏移量
    easing: 'easeInOutSine', // 缓动函数
    duration: 2500, // 动画时间
    direction: 'alternate', // 循环方式
    loop: true // 是否循环
  })
}

// 定义鲜花5的动画
const flower5 = () => {
  anime({
    targets: '.flower5', // 选择器
    translateX: 10, //  x轴偏移量
    translateY: -20, // y轴偏移量
    easing: 'easeInOutSine', // 缓动函数
    duration: 3000, // 动画时间
    direction: 'alternate', // 循环方式
    loop: true // 是否循环
  })
}

// 定义鲜花6的动画
const flower6 = () => {
  anime({
    targets: '.flower6', // 选择器
    translateX: -10, // x轴偏移量
    translateY: -20, // y轴偏移量
    easing: 'easeInOutSine', // 缓动函数
    duration: 2500,   // 动画时间
    direction: 'alternate', // 循环方式
    loop: true // 是否循环
  })
}

// 定义鲜花7的动画
const flower7 = () => {
  anime({
    targets: '.flower7', // 选择器
    translateX: 10, // x轴偏移量
    translateY: -20, // y轴偏移量
    easing: 'easeInOutSine', // 缓动函数
    duration: 3000, // 动画时间
    direction: 'alternate', // 循环方式
    loop: true // 是否循环
  })
}

onMounted(() => {
  flower1()
  flower2()
  flower3()
  flower4()
  flower5()
  flower6()
  flower7()
})
</script>

<template>
  <div class="flower flower1" />
  <div class="flower flower2" />
  <div class="flower flower3" />
  <div class="flower flower4" />
  <div class="flower flower5" />
  <div class="flower flower6" />
  <div class="flower flower7" />
</template>

<style lang="scss" scoped>
.flower {
  position: fixed; // 固定定位
  background-position: center center; // 背景图片居中
  background-repeat: no-repeat; // 背景图片不重复
  background-size: cover; // 背景图片自适应
  img {
    width: 100%; // 图片宽度100%
    height: 100%; // 图片高度100%
    object-fit: cover; // 图片自适应
  }
}
.flower1 {
  float: left;
  width: calc(368px / 4);
  height: calc(987px / 4);
  bottom: -20px;
  left: -10px;
  background-image: url('../../assets/首页海报/底部花1.png');
}
.flower2 {
  float: left;
  width: calc(1513px / 4);
  height: calc(1056px / 4);
  bottom: -20px;
  left: 30px;
  background-image: url('../../assets/首页海报/底部花2.png');
}
.flower3 {
  float: left;
  width: calc(2127px / 4);
  height: calc(897px / 4);
  bottom: -20px;
  left: 150px;
  background-image: url('../../assets/首页海报/底部花3.png');
}
.flower4 {
  float: left;
  width: calc(1695px / 4);
  height: calc(666px / 4);
  bottom: -20px;
  left: 540px;
  background-image: url('../../assets/首页海报/底部花4.png');
}
.flower5 {
  float: left;
  width: calc(2127px / 4);
  height: calc(832px / 4);
  bottom: -20px;
  left: 850px;
  background-image: url('../../assets/首页海报/底部花5.png');
}
.flower6 {
  float: left;
  width: calc(1346px / 4);
  height: calc(387px / 4);
  bottom: -20px;
  left: 1380px;
  background-image: url('../../assets/首页海报/底部花6.png');
}
.flower7 {
  float: left;
  width: calc(1542px / 4);
  height: calc(742px / 4);
  bottom: -20px;
  left: 1320px;
  background-image: url('../../assets/首页海报/底部花7.png');
}
</style>
