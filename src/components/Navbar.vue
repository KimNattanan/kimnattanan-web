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

const menuToggle=(event: MouseEvent)=>{
  
}

</script>
<template>

  <div class="fixed flex w-screen bg-white font-medium navbar z-20
              sm:h-24
              h-16">
    <div class="h-full content-center font-serif
                lg:text-xl
                sm:ml-12 sm:text-base
                ml-4 text-sm">
      <a href="/" class="flex items-center">
        <img class="object-contain h-10 mr-2" src="/icon.ico"/>
        KIM Nattanan
      </a>
    </div>
    <div class="fixed w-screen h-16 justify-end items-center mr-4
                xs:hidden
                flex">
      <button class="h-1/2 aspect-square text-[]" @click="menuToggle">
        ＜
      </button>
    </div>
    <ul class="h-full ml-auto
                lg:text-lg
                sm:p-6 sm:text-sm
                xs:flex
                p-2 text-xs hidden">
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
  <div class="sm:h-24 h-16"></div>
  
</template>
<style scoped>

.navbar > ul > li {
  margin-right: 1rem;
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