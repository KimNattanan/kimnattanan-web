<script setup lang="ts">
import Title from '@/components/Title.vue';
import About from '@/components/About.vue';
import Education from '@/components/Education.vue';
import Projects from '@/components/Projects.vue';
import { onMounted, onUnmounted } from 'vue';
import { useTitleImgStyleStore } from '@/stores/titleImgStyle';
import { useRoute } from 'vue-router';

const route = useRoute();

const titleImgStyle = useTitleImgStyleStore();

onMounted(()=>{
  setTimeout(()=>{
    titleImgStyle.opac = 1;
  },0);
  if(route.hash){
    const el = document.querySelector(route.hash);
    if(el) el.scrollIntoView();
    else scrollTo(0,0);
  }
  else{
    scrollTo(0,0);
  }
})
onUnmounted(()=>{
  titleImgStyle.opac = 0;
})
</script>

<template>
  <!-- <main>
    <Title/>
  </main> -->
  <main>
    <Title/>
    <About id="about"/>
    <Education id="education"/>
    <Projects id="projects"/>
  </main>
</template>

<style scoped>

</style>