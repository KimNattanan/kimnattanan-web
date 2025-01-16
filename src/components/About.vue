<script setup lang="ts">

</script>
<template>

  <div>
    <div class="bg-col1-1 relative overflow-hidden
                transition-all duration-700 hover:translate-x-[calc(6.6666667vh)] hover:scale-110 hover:bg-col1-2
                lg:pl-32 lg:pr-36 lg:py-28 lg:w-2/3
                md:pr-28 md:py-24
                sm:pl-16 sm:pr-24 sm:w-3/4
                pl-8 pr-8 w-4/5 pt-16 pb-[4.5rem]">
      <div class="aspect-square absolute cat-wheel
                  lg:w-[28rem] lg:bottom-[-18rem] lg:right-[-11rem]
                  md:w-[20rem] md:bottom-[-12rem] md:right-[-7.5rem]
                  sm:w-64 sm:bottom-[-10rem] sm:right-[-5.5rem]
                  w-40 bottom-[-6rem] right-[-4rem]">
        <img src="/cat_color.png" class="object-contain w-[17.86%] ml-[33.93%] select-none" draggable="false" />
      </div>
      <div class="font-marcellus mb-10 tracking-[0.2em] select-none
                  lg:text-7xl
                  md:text-6xl
                  sm:text-5xl
                  text-4xl">
        ABOUT
      </div>
      <div class="break-words
                  lg:text-base
                  md:text-sm
                  text-xs">
        about．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．．j
      </div>
    </div>
  </div>
  
</template>
<style scoped>

#about > div > .cat-wheel {
  rotate: 3rad;
  transition: 800ms;
  opacity: 0;
}
#about > div:hover > .cat-wheel {
  rotate: 0rad;
  opacity: 1;
}

</style>