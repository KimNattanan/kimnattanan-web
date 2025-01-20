<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView, useRoute } from 'vue-router';


const route = useRoute();

onMounted(()=>{
  scrollTo(0,0);
})

</script>
<template>

  <div class="bg-col1-4 py-5
              xl:px-40
              lg:px-32 lg:text-base
              md:px-20 md:text-sm
              sm:px-14
              px-6 text-xs">
    <RouterView/>
  </div>

</template>
<style scoped>

</style>