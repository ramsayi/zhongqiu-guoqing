<script lang="ts" setup>
import { ref } from 'vue';

// 显示界面
const show = ref(false)
const onNextIntro = () => {
  show.value = true
}

defineExpose({
  onNextIntro
})

</script>

<template>
  <div v-if="show" class="canvasBar">
  </div>
</template>

<style lang="scss" scoped>
</style>
