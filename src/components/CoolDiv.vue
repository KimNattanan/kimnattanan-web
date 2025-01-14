<script setup lang="ts">
import { ref } from 'vue';


const underline = ref<HTMLDivElement | null>(null);
const underlineLatest = ref<HTMLDivElement | null>(null);
const mouseEnter = ()=>{
  if(!underline.value || !underline.value.parentNode) return;
  const clone = underline.value.cloneNode(true) as HTMLDivElement;
  underlineLatest.value = clone;
  clone.style.left='0%';
  underline.value.parentNode.appendChild(underlineLatest.value);
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
const mouseLeave = ()=>{
  const cur=underlineLatest.value
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

defineProps<{
  click?: ((payload: MouseEvent)=>void) | undefined,
}>();

</script>
<template>

  
  <div
    class="pb-[0.1rem] relative overflow-hidden"
    @mouseenter="mouseEnter"
    @touchstart="mouseEnter"
    @mouseleave="mouseLeave"
    @touchend="mouseLeave"
  >
    <slot/>
    <div class="bg-black h-[0.1rem] w-full absolute left-[-100%]" ref="underline"></div>
  </div>
  
</template>
<style scoped>

</style>