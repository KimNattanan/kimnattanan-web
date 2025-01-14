<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import CoolButton from './CoolButton.vue';

const route = useRoute();
const router = useRouter();

const scrollTo = (id: string)=>{
  const el = document.getElementById(id);
  if(!el){
    console.log(`scrollTo(${id}) element not found.`);
    return;
  }
  el.scrollIntoView({behavior:'smooth'});
}
const goHomeWithHash = (id: string)=>{
  if(route.path == '/' || id == 'contact') scrollTo(id);
  else router.push({name:'home',hash:`#${id}`});
}

</script>
<template>

  <div class="fixed flex sm:h-24 h-24 w-screen bg-white font-medium navbar z-10">
    <div class="sm:ml-12 ml-2 h-full content-center font-serif lg:text-xl sm:text-base text-sm">
      <a href="/" class="flex items-center">
        <img class="object-contain h-10 mr-2" src="/icon.ico"/>
        KIM Nattanan
      </a>
    </div>
    <ul class="flex h-full ml-auto sm:p-6 p-2 lg:text-lg sm:text-sm text-xs">
      <li>
        <CoolButton @click="goHomeWithHash('about')" class="text-btn">About</CoolButton>
      </li>
      <li>
        <CoolButton @click="goHomeWithHash('education')" class="text-btn">Education</CoolButton>
      </li>
      <li>
        <CoolButton @click="goHomeWithHash('projects')" class="text-btn">Projects</CoolButton>
      </li>
      <li>
        <CoolButton @click="goHomeWithHash('contact')" class="text-btn">Contact</CoolButton>
      </li>
    </ul>
  </div>
  <div class="h-24"></div>
  
</template>
<style scoped>

.navbar > ul > li {
  margin-right: 0.4rem;
  align-items: center;
  display: flex;
}
@media (min-width: 640px) {
  .navbar > ul > li {
    margin-right: 2rem;
  }
}
@media (min-width: 1024px) {
  .navbar > ul > li {
    margin-right: 5rem;
  }
}

</style>