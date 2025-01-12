<script setup lang="ts">
import { useTitleImgStyleStore } from '@/stores/titleImgStyle';


const imgStyle = useTitleImgStyleStore();

</script>
<template>

  <div class="h-[calc(100vh-6rem)] flex items-start pb-36">
    <div class="font-serif h-full content-center lg:ml-32 md:ml-20 ml-10 lg:mr-16 md:mr-8 mr-4 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
      <div class="text-[100%] py-2">Kim,</div>
      <div class="text-[33.333333%] py-2 ">．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．</div>
    </div>
    <div class="flex-1 flex justify-end max-w-[60vw] h-full">
      <img
        id="titleImg"
        class="lg:object-contain object-cover transition-opacity duration-500 select-none"
        :style="{opacity: imgStyle.opac}"
        src="/purikone.jpg"
        draggable="false"
      />
    </div>
  </div>
  
</template>
<style scoped>

</style>