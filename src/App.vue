<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
</script>
<template>

  <Navbar/>
  <RouterView/>
  <!-- <RouterView name="WebChat"/> -->
  <Contact id="contact"/>
  <Footer/>
  
</template>
<style scoped>

</style>
