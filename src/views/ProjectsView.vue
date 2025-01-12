<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView, useRoute } from 'vue-router';


const route = useRoute();

onMounted(()=>{
  scrollTo(0,0);
})

</script>
<template>

  <div class="bg-col1-4 px-40 py-5">
    <RouterView/>
  </div>

</template>
<style scoped>

</style>