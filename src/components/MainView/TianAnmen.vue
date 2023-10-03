<script lang="ts" setup>
import anime from 'animejs'
import { onMounted } from 'vue';

// 定义建筑的动画
const building = () => {
  anime({
    targets: '.building',
    scale: 1.05,
    translateY: 5,
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: true
  })
}

onMounted(() => {
  building()
})
</script>

<template>
  <div class="building" />
</template>

<style lang="scss" scoped>
.building {
  float: left;
  position: fixed;
  bottom: 30px;
  left: calc(50% - 3600px / 8);
  width: calc(3516px / 4);
  height: calc(1072px / 4);
  background-image: url('../../assets/首页海报/建筑.png');
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