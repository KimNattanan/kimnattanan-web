<script setup lang="ts">

</script>
<template>

  <div class="p-10 w-full flex flex-col">
    <div class="w-full h-full flex flex-col bg-col1-3">
      <div class="text-7xl mt-20 text-center font-marcellus tracking-[0.2em] select-none text-white">PROJECTS</div>
      <div class="p-8 flex flex-wrap justify-center">
        <div class="project-container">
          <router-link :to="{name:'webchat'}" class="flex-1 m-2 hover:opacity-75 duration-200">
            <img src="/purikone.jpg" class="w-full h-full select-none" draggable="false" />
          </router-link>
          <div class="font-jost text-3xl text-center h-10 mx-2 mt-[0.3rem] mb-[0.7rem] overflow-hidden">
            Web Chat
          </div>
        </div>
        <div class="project-container">
          <router-link :to="{name:'proj2'}" class="flex-1 m-2 hover:opacity-75 duration-200">
            <img src="/purikone.jpg" class="w-full h-full select-none" draggable="false" />
          </router-link>
          <div class="font-jost text-3xl text-center h-10 mx-2 mt-[0.3rem] mb-[0.7rem] overflow-hidden">
            Project 2
          </div>
        </div>
        <div class="project-container">
          <router-link :to="{name:'webchat'}" class="flex-1 m-2 hover:opacity-75 duration-200">
            <img src="/purikone.jpg" class="w-full h-full select-none" draggable="false" />
          </router-link>
          <div class="font-jost text-3xl text-center h-10 mx-2 mt-[0.3rem] mb-[0.7rem] overflow-hidden">
            Web Chat
          </div>
        </div>
        <div class="project-container">
          <router-link :to="{name:'webchat'}" class="flex-1 m-2 hover:opacity-75 duration-200">
            <img src="/purikone.jpg" class="w-full h-full select-none" draggable="false" />
          </router-link>
          <div class="font-jost text-3xl text-center h-10 mx-2 mt-[0.3rem] mb-[0.7rem] overflow-hidden">
            Web Chat
          </div>
        </div>
        <div class="project-container">
          <router-link :to="{name:'webchat'}" class="flex-1 m-2 hover:opacity-75 duration-200">
            <img src="/purikone.jpg" class="w-full h-full select-none" draggable="false" />
          </router-link>
          <div class="font-jost text-3xl text-center h-10 mx-2 mt-[0.3rem] mb-[0.7rem] overflow-hidden">
            Web Chat
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<style scoped>

.project-container{
  background-color: white;

  position: relative;
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 20rem;
  aspect-ratio: 3/4;
  padding: 0.5rem;

  transition: 222ms;
}
.project-container:hover >  {
  scale: 1.1;
}

</style>