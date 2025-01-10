<script setup lang="ts">
import Title from '@/components/Title.vue';
import About from '@/components/About.vue';
import Education from '@/components/Education.vue';
import Projects from '@/components/Projects.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue';
import { useTitleImgStyleStore } from '@/stores/titleImgStyle';

const titleImgStyle = useTitleImgStyleStore();

onMounted(()=>{
  setTimeout(()=>{
    titleImgStyle.opac = 1;
  },0);
})
</script>

<template>
  <main class="overflow-x-hidden">
    <Title/>
    <About id="about"/>
    <Education id="education"/>
    <Projects id="projects"/>
    <Contact id="contact"/>
    <Footer/>
  </main>
</template>

<style scoped>

#education, #about, #projects, #contact {
  scroll-margin-top: 6rem;
}

</style>