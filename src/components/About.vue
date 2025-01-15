<script setup lang="ts">

</script>
<template>

  <div>
    <div class="md:pl-32 pl-8 md:pr-64 pr-8 py-24 bg-col1-1 w-2/3 overflow-hidden relative
                transition-all duration-700 hover:translate-x-[calc(6.6666667vh)] hover:scale-110 hover:bg-col1-2">
      <div class="md:w-[28rem] w-96 aspect-square bottom-[-16rem] right-[-8rem] absolute cat-wheel">
        <img src="/cat_color.png" class="object-contain w-20 ml-[9.5rem] select-none" draggable="false" />
      </div>
      <div class="md:text-7xl text-5xl font-marcellus my-10 tracking-[0.2em] select-none">ABOUT</div>
      <div class="md:text-lg break-words">about．．．．．．．．．．．．．．．．．．．．．．．．．．</div>
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