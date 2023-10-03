<script lang="ts" setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import IntroZhong from '../components/MenuView/IntroZhong.vue'
import YueBing from '../components/MenuView/YueBing.vue';

// 显示菜单的变量
const menuVisible = ref(false)
// 显示按钮的变量
const buttonVisible = ref(false)

// 定义打开菜单的方法
const onMenuOpen = () => {
  menuVisible.value = true // 显示菜单
  setTimeout(() => {
    buttonVisible.value = true // 显示按钮
  }, 1000)
}

// 定义关闭菜单的方法
const onMenuClose = () => {
  // 获取menu、closeMenu
  const menuEl = document.getElementById('menu')
  const closeMenuEl = document.getElementById('close-menu')
  // 隐藏menu、closeMenu、openModal
  closeMenuEl!.classList.add('animate__zoomOutDown') // 关闭按钮向下退出
  setTimeout(() => {
    menuEl!.classList.add('animate__backOutDown') // 菜单向下退出
  }, 500)
  setTimeout(() => {
    menuVisible.value = false // 隐藏菜单
  }, 1000)
}

// 点击下一条的方法
const childRefYueBing = ref<any>()
const onNextIntro = () => {
  childRefYueBing.value.onNextIntro()
}

defineExpose({
  onMenuOpen
})
</script>

<template>
  <div
    v-if="menuVisible"
    @click="onMenuOpen"
    id="menu"
    class="menu animate__animated animate__backInUp backdrop-blur-xl bg-white/10 flex justify-center items-center"
  >
    <!-- 关闭按钮 -->
    <button
      v-if="buttonVisible"
      @click="onMenuClose"
      id="close-menu"
      class="btn btn-circle glass animate__animated animate__zoomInUp fixed top-5 right-5"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- 菜单内容 -->
    <IntroZhong @on-next-intro="onNextIntro" />
    <YueBing ref="childRefYueBing" />
  </div>
</template>

<style lang="scss" scoped>
.menu {
  float: left;
  // 让菜单居中
  position: fixed;
  left: calc(50% - (1920px / 1.5 / 2));
  top: calc(50% - (1080px / 1.5 / 2));
  // 设置大小
  width: calc(1920px / 1.5);
  height: calc(1080px / 1.5);
  border-radius: 30px; // 圆角
}
</style>
