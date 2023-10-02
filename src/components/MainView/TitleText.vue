<script lang="ts" setup>
import anime from 'animejs'
import { onMounted } from 'vue';

const title = () => {
  anime({
    targets: '.title',
    scale: 1.05,
    translateY: 5,
    easing: 'easeInOutSine',
    duration: 4000,
    direction: 'alternate',
    loop: true
  })
}

onMounted(() => {
  title()
})
</script>

<template>
  <div class="title"></div>
</template>

<style lang="scss" scoped>
.title {
  float: left;
  position: fixed;
  bottom: 380px;
  left: calc(50% - 4091px / 8);
  width: calc(4091px / 4);
  height: calc(905px / 4);
  background-image: url('../../assets/首页海报/迎中秋庆国庆.png');
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