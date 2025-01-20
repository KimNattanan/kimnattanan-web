<script setup lang="ts">
import CoolButton from '@/components/CoolButton.vue';
import { onMounted } from 'vue';
import { goNewTab } from '@/assets/actions';

onMounted(()=>{
  scrollTo(0,0);
})

</script>

<template>
  <div class="flex flex-col">
    <div class="font-marcellus tracking-[0.2em] text-col1-5 text-center my-4
                lg:text-6xl
                sm:text-5xl
                text-4xl">
      WEB CHAT
    </div>
    <div class="bg-white rounded-xl w-full my-4 py-16
                xl:px-40
                lg:px-28
                md:px-20
                sm:px-12
                xs:px-8
                px-6">
      ｃｌiｃｋ ➞ 
      <CoolButton @click="goNewTab('https://kimchi-nyabe-chat.vercel.app/')" class="text-btn font-semibold">
        (∗'ര ᎑ ര`∗)
      </CoolButton>
    </div>
  </div>
</template>

<style scoped>

</style>