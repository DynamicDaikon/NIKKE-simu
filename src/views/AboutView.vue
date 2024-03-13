<template>
  <div>About</div>
  <button @click="goBack">戻る</button>
</template>

<script setup>
import router from '@/router/index.js';
const goBack = () => {
  router.go(-1);
};
</script>

<style scoped></style>
