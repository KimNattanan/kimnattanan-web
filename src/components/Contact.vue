<script setup lang="ts">
import { ref } from 'vue';

const email = ref<HTMLDivElement | null>(null);
const emailUnderline = ref<HTMLDivElement | null>(null);
const emailUnderlineLatest = [] as HTMLDivElement[];
const isMailCopy = ref(false);
const mailCopyClicked = ()=>{
  if(!email.value) return;
  navigator.clipboard.writeText(email.value.innerText);
  isMailCopy.value=true;
  setTimeout(()=>{
    isMailCopy.value=false;
  },1000);
}
const copyBtnEnter = ()=>{
  if(!emailUnderline.value || !emailUnderline.value.parentNode) return;
  const clone = emailUnderline.value.cloneNode(true) as HTMLDivElement;
  emailUnderlineLatest.push(clone);
  clone.style.left='0%';
  emailUnderline.value.parentNode.appendChild(clone);
  clone.animate(
    [
      {left: '-100%'},
      {left: '0%'}
    ],
    {
      duration: 500,
      iterations: 1,
      easing: 'cubic-bezier(1,0,0,1)',
    }
  );
}
const copyBtnLeave = ()=>{
  while(emailUnderlineLatest.length){
    const cur=emailUnderlineLatest.pop();
    if(!cur) return;
    cur.animate(
      [
        {left: '100%'}
      ],
      {
        duration: 500,
        iterations: 1,
        easing: 'cubic-bezier(1,0,0,1)',
      }
    ).onfinish=()=>{
      cur.remove();
    }
  }
}

</script>
<template>

  <div class="mt-40 mb-20 flex flex-col justify-center">
    <div class="font-marcellus tracking-[0.2em] text-center py-4
                md:text-7xl
                text-5xl">
      CONTACT
    </div>
    <div class="flex justify-center py-4 text-lg">
      Please contact:
      <div class="relative overflow-hidden pb-[0.1rem]">
        <div class="text-col3-4 px-4" ref="email">
          jeu&#110;&#103;&#46;n&#97;ttanan&#64;gmai&#108;&#46;&#99;om
        </div>
        <div class="bg-black h-[0.1rem] w-full absolute left-[-100%]" ref="emailUnderline"></div>
      </div>
      <button class="relative w-7 h-7" @click="mailCopyClicked" @mouseenter="copyBtnEnter" @mouseleave="copyBtnLeave">
        <img src="/copy_icon.png" class="w-full h-full top-0 left-0 absolute"/>
        <div v-show="isMailCopy" class="w-full h-full top-0 left-0 absolute border-green-600 border-2 rounded-full"></div>
      </button>
    </div>
    <ul>
      <li>
        <a href="https://github.com/KimNattanan" target="_blank">
          <img src="/github_icon_2.png" class="h-full w-full"/>
        </a>
      </li>
      <li class="opacity-30">
        <!-- <a href="https://linkedin.com" target="_blank"> -->
          <img src="/linkedin_icon_2.png" class="h-full w-full"/>
        <!-- </a> -->
      </li>
      <li>
        <a href="https://www.facebook.com/nattanan.jeungtanasirikul.1" target="_blank">
          <img src="/facebook_icon_2.png" class="h-full w-full"/>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/kimnattanan/" target="_blank">
          <img src="/ig_icon_2.png" class="h-full w-full"/>
        </a>
      </li>
    </ul>
  </div>
  
</template>
<style scoped>

#contact > ul {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 2rem;
}
#contact > ul > li {
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  
  transition: 222ms;
}

#contact > ul > li:hover {
  scale: 1.2;
}

</style>