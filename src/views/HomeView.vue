<template>
  <div class="home">Home</div>
  <ul style="display: flex; list-style-type: none">
    <li>
      <button>DMGシミュレーター</button>
    </li>
    <li>
      <button>編成ランキング</button>
    </li>
    <li>
      <button>スキル早見表</button>
    </li>
    <li>
      <button>オバロおすすめ</button>
    </li>
  </ul>
  <button @click="toAbout">Aboutページへ遷移</button>
</template>

<script setup>
import router from '@/router/index.js';
const toAbout = () => {
  router.push('About');
};
</script>

<style scoped>
.home {
  text-align: center;
}
ul > li {
  margin: auto;
}
</style>
