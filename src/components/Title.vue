<script setup lang="ts">
import { useTitleImgStyleStore } from '@/stores/titleImgStyle';


const imgStyle = useTitleImgStyleStore();

</script>
<template>

  <div class="h-[calc(100vh-6rem)] flex items-start pb-36">
    <div class="font-serif h-full content-center
                xl:text-7xl
                lg:ml-32 lg:mr-16 lg:text-6xl
                md:ml-20 md:mr-8 md:text-5xl
                sm:text-4xl
                ml-10 mr-4 text-3xl">
      <div class="text-[100%] py-4">Kim,</div>
      <div class="text-[25%] py-2 leading-5">Hello! I'm Kim, currently studying in grade 12.</div>
      <div class="text-[25%] py-2 leading-5">Nice to meet you!</div>
    </div>
    <div class="flex-1 flex justify-end h-full">
      <img
        id="titleImg"
        class="transition-opacity duration-500 select-none max-w-[60vw]
                lg:object-contain
                object-cover"
        :style="{opacity: imgStyle.opac}"
        src="/purikone.jpg"
        draggable="false"
      />
    </div>
  </div>
  
</template>
<style scoped>

</style>