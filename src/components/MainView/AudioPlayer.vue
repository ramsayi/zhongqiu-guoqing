<template>
  <div id="aplayer"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import 'APlayer/dist/APlayer.min.css'
import APlayer from 'aplayer'

onMounted(() => {
  APlayer.value = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    audio: [
      {
        name: '但愿人长久',
        artist: '王菲',
        url: 'http://music.163.com/song/media/outer/url?id=299714.mp3',
        cover: 'http://p1.music.126.net/Knt99ek0AJSv9_zQeiBw1A==/109951166225633180.jpg',
        theme: '#A9983E'
      },
      {
        name: '我和我的祖国',
        artist: '王菲',
        url: 'http://music.163.com/song/media/outer/url?id=1392990601.mp3',
        cover: 'http://p2.music.126.net/HeGrAKPiZhKkONiFDxZvmw==/109951164384346866.jpg',
        theme: '#D8656C'
      }
    ],
    autoplay: true,
    loop: 'all',
    order: 'random'
  })
})
</script>
