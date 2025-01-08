<script setup lang="ts">

const scrollTo = (id: string)=>{
  const el = document.getElementById(id);
  if(!el){
    console.log(`scrollTo(${id}) element not found.`);
    return;
  }
  el.scrollIntoView({behavior:'smooth'});
}

</script>
<template>

  <div class="fixed flex h-24 w-full bg-white font-medium navbar">
    <div class="ml-12 h-full content-center font-serif text-xl">
      <a href='/' class="flex items-center">
        <img class="object-contain h-10 mr-2" src="/icon.ico"/>
        KIM Nattanan
      </a>
    </div>
    <ul class="flex h-full ml-auto p-6 text-lg">
      <li>
        <button
          class="text-btn"
          @click="scrollTo('about')"
        >About</button>
      </li>
      <li>
        <button
          class="text-btn"
          @click="scrollTo('education')"
        >Education</button>
      </li>
      <li>
        <button
          class="text-btn"
          @click="scrollTo('projects')"
        >Projects</button>
      </li>
      <li>
        <button
          class="text-btn"
          @click="scrollTo('contact')"
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