<template>
  <div>
    <p>
      {{ pageTitle }}
    </p>
    <img :src="img" alt="">
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import img from '@/assets/img/acc.jpg';

const pageTitle = ref<string>('Index Page')
</script>
<style scoped lang="scss">
  div{
    p{
      margin: 30px 0;
      text-align: center;
    }
    img{
      margin: 30px auto 0;
      display: block;
    }
  }
</style>
