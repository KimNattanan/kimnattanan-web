<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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
        <button
          class="text-btn"
          @click="goHomeWithHash('about')"
        >About</button>
      </li>
      <li>
        <button
          class="text-btn"
          @click="goHomeWithHash('education')"
        >Education</button>
      </li>
      <li>
        <button
          class="text-btn"
          @click="goHomeWithHash('projects')"
        >Projects</button>
      </li>
      <li>
        <button
          class="text-btn"
          @click="goHomeWithHash('contact')"
        >Contact</button>
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