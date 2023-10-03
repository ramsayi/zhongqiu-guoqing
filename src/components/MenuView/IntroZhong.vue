<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import anime from 'animejs'
const emit = defineEmits(['onNextIntro'])

// 显示中秋简介
const show = ref(false)
// 显示按钮
const buttonVisible = ref(false)

// 显示图片的变量
const imgVisible1 = ref(false)
// 图片的动画
const imgAnime1 = () => {
  anime({
    targets: '.img-zhongqiu',
    translateX: 600,
    duration: 1000,
    easing: 'easeInOutQuad'
  })
}
// 图片的动画
const imgAnime2 = () => {
  anime({
    targets: '.img-zhongqiu',
    opacity: 0,
    duration: 1000,
    easing: 'easeInOutQuad'
  })
  setTimeout(() => {
    imgVisible1.value = false
  }, 1000)
}

// 显示文字的变量
const textVisible1 = ref(false)
const textVisible2 = ref(false)
const textVisible3 = ref(false)

// 点击显示下一条的方法
const onNextText = () => {
  if (textVisible1.value) {
    textVisible1.value = false
    textVisible2.value = true
    imgAnime1()
  } else if (textVisible2.value) {
    textVisible2.value = false
    textVisible3.value = true
    imgAnime2()
  } else if (textVisible3.value) {
    textVisible3.value = false
    show.value = false
    buttonVisible.value = true
  }
}

// 点击显示月饼游戏的方法
const onYueBing = () => {
  buttonVisible.value = false
  emit('onNextIntro')
}

onMounted(() => {
  show.value = true
  setTimeout(() => {
    imgVisible1.value = true
    textVisible1.value = true
  }, 1000)
})
</script>

<template>
  <div v-if="show">
    <!-- 图片 -->
    <div v-if="imgVisible1" class="img-zhongqiu animate__animated animate__zoomInDown"></div>

    <!-- 文本 -->
    <div
      v-show="textVisible1"
      class="text-zhongqiu w-[40%] ml-[52%] indent-16 font-xingYue drop-shadow text-4xl text-slate-200 animate__animated animate__fadeInDown"
    >
      <p>
        每年农历八月十五日，是传统的中秋佳节。这时是一年秋季的中期，所以被称为中秋。在中国的农历里，一年分为四季，每季又分为孟、仲、季三个部分，因而中秋也称仲秋。八月十五的月亮比其他几个月的满月更圆，更明亮，所以又叫做“月夕”，“八月节”。此夜，人们仰望天空如玉如盘的朗朗明月，自然会期盼家人团聚。远在他乡的游子，也借此寄托自己对故乡和亲人的思念之情。所以，中秋又称“团圆节”。
      </p>
    </div>
    <div
      v-show="textVisible2"
      class="text-zhongqiu w-[40%] ml-[7%] indent-16 font-xingYue drop-shadow text-4xl text-slate-200 animate__animated animate__flipInY"
    >
      <p>
        我国人民在古代就有“秋暮夕月”的习俗。夕月，即祭拜月神。到了周代，每逢中秋夜都要举行迎寒和祭月。设大香案，摆上月饼、西瓜、苹果、红枣、李子、葡萄等祭品，其中月饼和西瓜是绝对不能少的。西瓜还要切成莲花状。在月下，将月亮神像放在月亮的那个方向，红烛高燃，全家人依次拜祭月亮，然后由当家主妇切开团圆月饼。切的人预先算好全家共有多少人，在家的，在外地的，都要算在一起，不能切多也不能切少，大小要一样。
      </p>
    </div>
    <div
      v-show="textVisible3"
      id="text-zhongqiu-3"
      class="text-zhongqiu w-[85%] mt-[1%] ml-20 indent-16 font-xingYue drop-shadow text-4xl text-slate-200 animate__animated animate__flipInX"
    >
      <p>
        相传古代齐国丑女无盐，幼年时曾虔诚拜月，长大后，以超群品德入宫，但未被宠幸。某年八月十五赏月，天子在月光下见到她，觉得她美丽出众，后立她为皇后，中秋拜月由此而来。月中嫦娥，以美貌著称，故少女拜月，愿“貌似嫦娥，面如皓月”。
      </p>
      <p>
        在唐代，中秋赏月、玩月颇为盛行。在北宋京师。八月十五夜，满城人家，不论贫富老小，都要穿上成人的衣服，焚香拜月说出心愿，祈求月亮神的保佑。南宋，民间以月饼相赠，取团圆之义。有些地方还有舞草龙，砌宝塔等活动。明清以来，中秋节的风俗更加盛行；许多地方形成了烧斗香、树中秋、点塔灯、放天灯、走月亮、舞火龙等特殊风俗。
      </p>
      <p>
        今天，月下游玩的习俗，已远没有旧时盛行。但设宴赏月仍很盛行，人们把酒问月，庆贺美好的生活，或祝远方的亲人健康快乐，和家人“千里共婵娟”。
      </p>
      <p>中秋节的习俗很多，形式也各不相同，但都寄托着人们对生活无限的热爱和对美好生活的向往。</p>
    </div>

    <!-- 按钮 -->
    <div class="fixed right-36 bottom-5">
      <button @click="onNextText" class="button1 type1 bg-white font-douYu"></button>
    </div>
  </div>
  <!-- <button v-if="buttonVisible" @click="onYueBing" class="btn">接月饼游戏</button> -->
  <div v-if="buttonVisible" class="card">
    <a class="card1" href="#">
      <p>谢谢欣赏</p>
      <p class="small">技术栈：Electron Vite Vue3</p>
      <p class="small">其他框架：animejs animate.css tailwindcss daisyui aplayer</p>
      <div class="go-corner" href="#">
        <div class="go-arrow">→</div>
      </div>
    </a>
  </div>
</template>

<style lang="scss" scoped>
.img-zhongqiu {
  background-image: url('../../assets/中秋介绍/psd40233.png');
  background-size: cover;
  background-position: center;
  width: calc(1772px / 4);
  height: calc(2657px / 4);
  position: fixed;
  top: calc(50% - (2657px / 4 / 2));
  left: calc(10%);
}
.button1 {
  height: 50px;
  width: 150px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

.button1:hover {
  box-shadow: 0.5px 0.5px 150px #252525;
}

.type1::after {
  content: '继续';
  height: 50px;
  width: 150px;
  background-color: #022f82;
  color: #fff;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(50px);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.type1::before {
  content: '下一条';
  height: 50px;
  width: 150px;
  background-color: #fff;
  color: #ff7dd1;
  position: absolute;
  top: 0%;
  left: 0%;
  transform: translateY(0px) scale(1.2);
  font-size: 1.2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;
}

.type1:hover::after {
  transform: translateY(0) scale(1.2);
}

.type1:hover::before {
  transform: translateY(-50px) scale(0) rotate(120deg);
}

.card p {
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  color: #666;
}

.card p.small {
  font-size: 14px;
}

.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #00838d;
  border-radius: 0 4px 0 32px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card1 {
  display: block;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}

.card1:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #00838d;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card1:hover:before {
  transform: scale(21);
}

.card1:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}

.card1:hover h3 {
  transition: all 0.3s ease-out;
  color: #fff;
}

.card2 {
  display: block;
  top: 0px;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  border: 1px solid #f2f8f9;
}

.card2:hover {
  transition: all 0.2s ease-out;
  box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
  top: -4px;
  border: 1px solid #ccc;
  background-color: white;
}

.card2:before {
  content: '';
  position: absolute;
  z-index: -1;
  top: -16px;
  right: -16px;
  background: #00838d;
  height: 32px;
  width: 32px;
  border-radius: 32px;
  transform: scale(2);
  transform-origin: 50% 50%;
  transition: transform 0.15s ease-out;
}

.card2:hover:before {
  transform: scale(2.15);
}

.card3 {
  display: block;
  top: 0px;
  position: relative;
  max-width: 262px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  overflow: hidden;
  border: 1px solid #f2f8f9;
}

.card3 .go-corner {
  opacity: 0.7;
}

.card3:hover {
  border: 1px solid #00838d;
  box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
  z-index: 500;
}

.card3:hover p {
  color: #00838d;
}

.card3:hover .go-corner {
  transition: opactiy 0.3s linear;
  opacity: 1;
}

.card4 {
  display: block;
  top: 0px;
  position: relative;
  max-width: 262px;
  background-color: #fff;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 12px;
  text-decoration: none;
  overflow: hidden;
  border: 1px solid #ccc;
}

.card4 .go-corner {
  background-color: #00838d;
  height: 100%;
  width: 16px;
  padding-right: 9px;
  border-radius: 0;
  transform: skew(6deg);
  margin-right: -36px;
  align-items: start;
  background-image: linear-gradient(-45deg, #8f479a 1%, #dc2a74 100%);
}

.card4 .go-arrow {
  transform: skew(-6deg);
  margin-left: -2px;
  margin-top: 9px;
  opacity: 0;
}

.card4:hover {
  border: 1px solid #cd3d73;
}

.card4 h3 {
  margin-top: 8px;
}

.card4:hover .go-corner {
  margin-right: -12px;
}

.card4:hover .go-arrow {
  opacity: 1;
}
</style>
