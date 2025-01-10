<script setup lang="ts">
import { useTitleImgStyleStore } from '@/stores/titleImgStyle';


const imgStyle = useTitleImgStyleStore();

</script>
<template>

  <div class="h-[calc(100vh-6rem)] flex items-start pb-36">
    <div class="font-serif h-full content-center ml-32">
      <div class="text-7xl py-2">Kim,</div>
      <div class="text-2xl py-2 ">．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．。．</div>
    </div>
    <div class="flex-1 flex justify-end">
      <img
        id="titleImg"
        class="object-contain max-w-[60vw] max-h-full transition-opacity duration-500 select-none"
        :style="{opacity: imgStyle.opac}"
        src="/purikone.jpg"
        draggable="false"
      />
    </div>
  </div>
  
</template>
<style scoped>

</style>