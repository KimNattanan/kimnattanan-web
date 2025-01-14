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
    <div class="font-marcellus text-6xl tracking-[0.2em] text-col1-5 text-center my-4">WEB CHAT</div>
    <div class="bg-white rounded-xl w-full my-4 px-40 py-16">
      <CoolButton @click="goNewTab('https://kimchi-nyabe-chat.vercel.app/')">
        ｃｌiｃｋ ➞ (∗'ര ᎑ ര`∗)
      </CoolButton>
    </div>
  </div>
</template>

<style scoped>

</style>