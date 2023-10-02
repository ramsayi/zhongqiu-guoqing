<script lang="ts" setup>
import MenuView from './MenuView.vue'
import MoonRotate from '../components/MainView/MoonRotate.vue'
import MoutanWave from '../components/MainView/MoutanWave.vue'
import FlowerBottom from '../components/MainView/FlowerBottom.vue'
import FlowerPink from '../components/MainView/FlowerPink.vue'
import TianAnmen from '../components/MainView/TianAnmen.vue'
import TitleText from '../components/MainView/TitleText.vue'
import AudioPlayer from '../components/MainView/AudioPlayer.vue'
import { ref } from 'vue'

const childRefMenuBlur = ref<any>()
const onShowMenu = () => {
  childRefMenuBlur.value.showMenu()
}
</script>

<template>
  <div class="container no-scroll" @click="onShowMenu">
    <MoonRotate class="common" />
    <MoutanWave class="common" />
    <TianAnmen class="common" />
    <TitleText class="common" />
    <FlowerPink class="common" />
    <FlowerBottom class="common" />
    <AudioPlayer />
  </div>

  <MenuView ref="childRefMenuBlur" class="menu" />
</template>

<style lang="scss" scoped>
.no-scroll {
  overflow: hidden;
}
.container {
  width: 100vw;
  height: 100vh;
  background-image: url('../assets/首页海报/夜空.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 1920px;
}
.common {
  pointer-events: none;
}
.menu {
  z-index: 999;
}
</style>
