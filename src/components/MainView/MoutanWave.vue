<script lang="ts" setup>
import anime from 'animejs'
import { onMounted } from 'vue'

// 定义牡丹花左侧的动画
const moutanWaveLeft = () => {
  anime({
    targets: '.moutan-left',
    translateX: 20,
    translateY: 20,
    easing: 'linear',
    duration: 3000,
    direction: 'alternate',
    loop: true
  })
}

// 定义牡丹花右侧的动画
const moutanWaveRight = () => {
  anime({
    targets: '.moutan-right',
    translateX: -20,
    translateY: 20,
    easing: 'linear',
    duration: 3000,
    direction: 'alternate',
    loop: true
  })
}

onMounted(() => {
  moutanWaveLeft()
  moutanWaveRight()
})
</script>

<template>
  <div class="moutan-left" />
  <div class="moutan-right" />
</template>

<style lang="scss" scoped>
.moutan-left {
  float: left;
  width: 252.5px;
  height: 218px;
  position: fixed;
  top: -25px;
  left: -25px;
  background-image: url('../../assets/首页海报/左上花.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.moutan-right {
  float: right;
  width: 252.5px;
  height: 218px;
  position: fixed;
  top: -25px;
  right: -25px;
  background-image: url('../../assets/首页海报/右上花.png');
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
