<script lang="ts" setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import LanternRiddle from '../components/MenuView/LanternRiddle.vue'

const show = ref(false)
const showButton = ref(false)

const showMenu = () => {
  show.value = true
  setTimeout(() => {
    showButton.value = true
  }, 500)
}

const closeMenu = () => {
  // 获取menu、closeMenu、openModal
  const menuEl = document.getElementById('menu')
  const closeMenuEl = document.getElementById('closeMenu')
  const openLanternRiddleEl = document.getElementById('openLanternRiddle')
  // 隐藏menu、closeMenu、openModal
  closeMenuEl!.classList.add('animate__zoomOutDown')
  openLanternRiddleEl!.classList.add('animate__zoomOutDown')
  setTimeout(() => {
    menuEl!.classList.add('animate__backOutDown')
  }, 500)
  setTimeout(() => {
    show.value = false
  }, 1000)
}

// 猜灯谜
const lanternButtonVisible = ref(true)
const LanternRiddleRef = ref<any>()
const showLanternRiddle = () => {
  // 隐藏灯谜按钮
  lanternButtonVisible.value = false
  // 隐藏关闭菜单按钮
  const closeMenuEl = document.getElementById('closeMenu')
  closeMenuEl!.classList.add('animate__zoomOutDown')
  const openLanternRiddleEl = document.getElementById('openLanternRiddle')
  openLanternRiddleEl!.classList.add('animate__zoomOutUp')
  LanternRiddleRef.value.showLanternRiddle()
}

defineExpose({
  showMenu
})
</script>

<template>
  <div
    v-if="show"
    @click="showMenu"
    id="menu"
    class="menu animate__animated animate__backInUp backdrop-blur-xl bg-white/10 flex justify-center items-center"
  >
    <!-- 关闭按钮 -->
    <button
      v-if="showButton"
      @click="closeMenu"
      id="closeMenu"
      class="btn btn-circle glass animate__animated animate__zoomInUp fixed top-5 right-5"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <!-- 猜灯谜 -->
    <button
      v-if="lanternButtonVisible"
      id="openLanternRiddle"
      @click="showLanternRiddle"
      class="btn animate__animated animate__zoomInUp"
    >
      猜灯谜
    </button>
    <LanternRiddle ref="LanternRiddleRef" />
  </div>
</template>

<style lang="scss" scoped>
.menu {
  float: left;
  // 让菜单居中
  position: fixed;
  top: calc(50% - 270px);
  left: calc(50% - 480px);
  // 设置大小
  width: 960px;
  height: 540px;
  // 圆角
  border-radius: 30px;
}
</style>
