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
  if(route.path == '/') scrollTo(id);
  else router.push({name:'home',hash:`#${id}`});
}

</script>
<template>

  <div class="fixed flex h-24 w-full bg-white font-medium navbar z-10">
    <div class="ml-12 h-full content-center font-serif text-xl">
      <router-link :to="{name: 'home'}" class="flex items-center">
        <img class="object-contain h-10 mr-2" src="/icon.ico"/>
        KIM Nattanan
      </router-link>
    </div>
    <ul class="flex h-full ml-auto p-6 text-lg">
      <li>
        <CoolButton @click="goHomeWithHash('about')">About</CoolButton>
      </li>
      <li>
        <CoolButton @click="goHomeWithHash('education')">Education</CoolButton>
      </li>
      <li>
        <CoolButton @click="goHomeWithHash('projects')">Projects</CoolButton>
      </li>
      <li>
        <CoolButton @click="goHomeWithHash('contact')">Contact</CoolButton>
      </li>
    </ul>
  </div>
  <div class="h-24"></div>
  
</template>
<style scoped>

.navbar > ul > li {
  margin-right: 5rem;
  align-items: center;
  display: flex;
}

</style>