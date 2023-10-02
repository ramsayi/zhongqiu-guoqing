<script lang="ts" setup>
import anime from 'animejs'
import { onMounted } from 'vue';

const flowerPink1 = () => {
  anime({
    targets: '.flower',
    translateX: 20,
    translateY: 20,
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: true
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
  float: left;
  position: fixed;
  bottom: -20px;
  left: 0;
  width: calc(2440px / 4);
  height: calc(834px / 4);
  background-image: url('../../assets/首页海报/粉花左.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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