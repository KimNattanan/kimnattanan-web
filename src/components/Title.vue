<script setup lang="ts">
import { useTitleImgStyleStore } from '@/stores/titleImgStyle';


const imgStyle = useTitleImgStyleStore();

</script>
<template>

  <div class="h-[calc(100vh-6rem)] flex justify-end items-start pb-36">
    <div class="font-serif h-full content-center mr-20">
      <div class="text-7xl py-2">Kim,</div>
      <div class="text-2xl py-2 ">．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．</div>
    </div>
    <img
      id="titleImg"
      class="object-contain max-w-[60vw] max-h-full transition-opacity duration-500 select-none"
      :style="{opacity: imgStyle.opac}"
      src="/purikone.jpg"
      draggable="false"
    />
  </div>
  
</template>
<style scoped>

</style>