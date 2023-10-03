<script lang="ts" setup>
import anime from 'animejs'
import { onMounted, ref } from 'vue'

// 标题动画
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

// 定义控制显示的变量
const show = ref(false)
// 定义控制显示的方法
const showMenu = () => {
  show.value = true
}

onMounted(() => {
  title()
  setTimeout(() => {
    showMenu()
  }, 2000)
})
</script>

<template>
  <div v-if="show" class="title animate__animated animate__bounceInDown"></div>
  <div
    v-if="show"
    class="subtitle flex justify-center items-center text-slate-400 font-douYu text-3xl animate__animated animate__fadeInUpBig"
  >
    <p>编码颂国庆，情思寄中秋</p>
  </div>
  <div v-if="show" class="cumt animate__animated animate__fadeInDownBig"></div>
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
.subtitle {
  // 文字居中
  position: fixed;
  top: 100px;
  // 文字水平居中
  width: 100%;
  // 文字垂直居中
  height: 100%;
}
.cumt {
  position: fixed;
  top: 5vw;
  left: 18vw;
  width: 10vw;
  height: 10vw;
  background-image: url('../../assets/首页海报/校徽.png');
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
