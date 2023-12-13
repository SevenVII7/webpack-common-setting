<template>
  <div>
    <p>
      {{ pageTitle }}
    </p>
    <p>
      {{ obj1.someString }}
    </p>
    <img :src="img" alt="">
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { obj1 } from '@/utils/someExport'
import img from '@/assets/img/acc.jpg';

const pageTitle = ref<string>('Index Page')

</script>
<style scoped lang="scss">
  div{
    p{
      margin: 10px 0;
      text-align: center;
    }
    img{
      margin: 10px auto 0;
      display: block;
    }
  }
</style>
