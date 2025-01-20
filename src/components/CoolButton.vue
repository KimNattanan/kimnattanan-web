<script setup lang="ts">
import { ref } from 'vue';


const underline = ref<HTMLDivElement | null>(null);
const underlineLatest = [] as HTMLDivElement[];
const mouseEnter = ()=>{
  if(!underline.value || !underline.value.parentNode) return;
  const clone = underline.value.cloneNode(true) as HTMLDivElement;
  underlineLatest.push(clone);
  clone.style.left='0%';
  underline.value.parentNode.appendChild(clone);
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
  while(underlineLatest.length){
    const cur=underlineLatest.pop()
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

defineProps<{
  click?: ((payload: MouseEvent)=>void) | undefined,
}>();

</script>
<template>

  
  <button
    class="relative overflow-hidden
            sm:pb-[0.1rem]
            pb-[0.05rem]"
    @click="click"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <slot/>
    <div class="bg-black w-full absolute left-[-100%]
                sm:h-[0.1rem]
                h-[0.05rem]"
      ref="underline"></div>
  </button>
  
</template>
<style scoped>

</style>