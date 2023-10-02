<script lang="ts" setup>
import anime from 'animejs'
import { onMounted } from 'vue'

const moonRotate = () => {
  anime({
    targets: '.moon',
    rotate: '1turn',
    easing: 'linear',
    duration: 60000,
    loop: true
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
  position: fixed;
  width: 70vh;
  height: 70vh;
  margin-left: 29vw;
  margin-top: -350px;
  background-image: url('../../assets/首页海报/月亮.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
