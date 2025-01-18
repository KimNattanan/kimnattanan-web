<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import CoolButton from './CoolButton.vue';
import { onMounted, ref } from 'vue';

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

const slideMenu = ref<HTMLDivElement | null>(null);
const slideMenuBtn = ref<HTMLDivElement | null>(null);
const slideMenuOpen = ref(false);

const updSlideMenu=(tog:number)=>{
  if(!slideMenu.value || !slideMenuBtn.value) return;
  slideMenuOpen.value = !!((+slideMenuOpen.value) ^ tog);
  if(slideMenuOpen.value){
    slideMenu.value.style.left = "0";
    const ul = slideMenu.value.querySelector('ul');
    if(ul){
      setTimeout(()=>{
        ul.animate([
          {
            marginLeft: "",
            marginRight: "30%",
            opacity: "0"
          },
          {
            marginLeft: "",
            marginRight: "0",
            opacity: "1"
          },
        ],{
          duration: 500,
          easing: "linear",
          iterations: 1,
        });
        ul.style.marginLeft = "";
        ul.style.marginRight = "0";
        ul.style.opacity = "1";
      },300);
    }
    setTimeout(()=>{
      if(slideMenuBtn.value) slideMenuBtn.value.innerHTML="＞";
    },400);
  }
  else{
    slideMenu.value.style.left = `calc(100% - ${slideMenuBtn.value.offsetWidth}px)`;
    const ul = slideMenu.value.querySelector('ul');
    if(ul){
      ul.animate([
        {
          marginLeft: "",
          marginRight: "0",
          opacity: "1"
        },
        {
          marginLeft: "",
          marginRight: "30%",
          opacity: "0"
        },
      ],{
        duration: 500,
        easing: "cubic-bezier(1,0.7,0,0.3)",
        iterations: 1,
      });
      ul.style.marginLeft = "";
      ul.style.marginRight = "30%";
      ul.style.opacity = "0";
    }
    setTimeout(()=>{
      if(slideMenuBtn.value) slideMenuBtn.value.innerHTML="＜";
    },400);
  }
}

onMounted(()=>{
  updSlideMenu(0);
});

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
    <div class="fixed w-screen h-16 items-center mr-4 bg-white duration-700 ease-[cubic-bezier(1,0,0,1)]
                xs:hidden
                flex"
      ref="slideMenu"
      id="slideMenu">
      <button ref="slideMenuBtn" class="h-1/2 aspect-square text-[]" @click="updSlideMenu(1)">＜</button>
      <ul class="h-full w-full flex p-2 text-xs">
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
.navbar > #slideMenu > ul > li {
  margin-left: auto;
  margin-right: auto;
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