<script lang="ts" setup>
import anime from 'animejs'
import { onMounted } from 'vue';

const flower1 = () => {
  anime({
    targets: '.flower1',
    translateX: 10,
    translateY: -20,
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'alternate',
    loop: true
  })
}

const flower2 = () => {
  anime({
    targets: '.flower2',
    translateX: -10,
    translateY: -20,
    easing: 'easeInOutSine',
    duration: 2500,
    direction: 'alternate',
    loop: true
  })
}

const flower3 = () => {
  anime({
    targets: '.flower3',
    translateX: 10,
    translateY: -20,
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'alternate',
    loop: true
  })
}

const flower4 = () => {
  anime({
    targets: '.flower4',
    translateX: -10,
    translateY: -20,
    easing: 'easeInOutSine',
    duration: 2500,
    direction: 'alternate',
    loop: true
  })
}

const flower5 = () => {
  anime({
    targets: '.flower5',
    translateX: 10,
    translateY: -20,
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'alternate',
    loop: true
  })
}

const flower6 = () => {
  anime({
    targets: '.flower6',
    translateX: -10,
    translateY: -20,
    easing: 'easeInOutSine',
    duration: 2500,
    direction: 'alternate',
    loop: true
  })
}

const flower7 = () => {
  anime({
    targets: '.flower7',
    translateX: 10,
    translateY: -20,
    easing: 'easeInOutSine',
    duration: 3000,
    direction: 'alternate',
    loop: true
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
  position: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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