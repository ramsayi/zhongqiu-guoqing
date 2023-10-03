<template>
  <div id="aplayer"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import 'APlayer/dist/APlayer.min.css'
import APlayer from 'aplayer'

onMounted(() => {
  APlayer.value = new APlayer({
    container: document.getElementById('aplayer'),  // 容器元素
    // mini: false, // 迷你模式
    fixed: true, // 吸底模式
    autoplay: true,  // 自动播放
    loop: 'all', // 音频循环播放, 可选值: 'all', 'one', 'none'
    order: 'list', // 音频循环顺序, 可选值: 'list', 'random'
    listMaxHeight: 90, // 列表最大高度
    lrcType: 3, // 歌词传递方式, 可选值: 0, 1, 2, 3
    audio: [
      {
        name: '我和我的祖国',
        artist: '王菲',
        url: 'http://music.163.com/song/media/outer/url?id=1392990601.mp3',
        cover: 'http://p2.music.126.net/HeGrAKPiZhKkONiFDxZvmw==/109951164384346866.jpg'
      },
      {
        name: '离人的月亮',
        artist: '周笔畅',
        url: 'http://music.163.com/song/media/outer/url?id=1390417840.mp3',
        cover: 'http://p2.music.126.net/7-o9_CUcF0owkDlrCouB-w==/109951164358108498.jpg'
      },
      {
        name: '但愿人长久',
        artist: '王菲',
        url: 'http://music.163.com/song/media/outer/url?id=299714.mp3',
        cover: 'http://p1.music.126.net/Knt99ek0AJSv9_zQeiBw1A==/109951166225633180.jpg'
      },
      {
        name: '我的祖国',
        artist: '佟丽娅,王丽达,张若昀,钟楚曦,李沁,王鸥,吴谨言,李一桐,尹颂,魏允熙,蔡诚俊,李治廷,谷嘉诚,夏之光,胡夏,赖冠霖,于朦胧,曾舜晞,郭俊辰,费启鸣,孙怡,李汶翰,林一,苏青,梦然,陈燕妮,赵志伟,王博文,沈以诚,李兰迪,梁靖康,汪卓成,米热,万思维,李宸希,官鸿,陈蓓蓓,窦昆,周峻宇',
        url: 'http://music.163.com/song/media/outer/url?id=1483514670.mp3',
        cover: 'http://p1.music.126.net/9uFWVbZgjjRNFa4hypOQ2A==/109951165354295618.jpg'
      },
      {
        name: '人民至上',
        artist: '阿云嘎',
        url: 'http://music.163.com/song/media/outer/url?id=1479255197.mp3',
        cover: 'http://p2.music.126.net/hC-ptaDIr2NmQWlDkfjzeA==/109951165348218175.jpg'
      },
      {
        name: '纪念用生命托起世界的人',
        artist: '阿云嘎',
        url: 'http://music.163.com/song/media/outer/url?id=1426412115.mp3',
        cover: 'http://p1.music.126.net/2jlQ3Qep1b3_WDXcohQBaA==/109951164746059685.jpg',
        lrc: 'http://music.163.com/api/song/media?id=1426412115'
      }
    ]
  })
})
</script>
