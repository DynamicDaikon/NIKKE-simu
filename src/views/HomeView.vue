<template>
  <div>Home</div>
  <button @click="toAbout">Aboutページへ遷移</button>
</template>

<script setup>
import router from '@/router/index.js';
const toAbout = () => {
  router.push('About');
};
</script>

<style scoped></style>
