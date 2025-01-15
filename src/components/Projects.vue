<script setup lang="ts">

</script>
<template>

  <div class="md:p-10 w-full flex flex-col">
    <div class="w-full h-full flex flex-col bg-col1-3">
      <div class="md:text-7xl text-5xl mt-20 text-center font-marcellus tracking-[0.2em] select-none text-white">PROJECTS</div>
      <div class="p-8 flex flex-wrap justify-center">
        <div class="project-container">
          <div class="proj">
            <router-link :to="{name:'webchat'}" class="flex-1 hover:opacity-75 duration-200">
              <img src="/purikone.jpg" class="w-full h-full select-none" draggable="false" />
            </router-link>
            <div class="font-jost text-3xl text-center h-10 mt-2 overflow-hidden">
              Web Chat
            </div>
          </div>
          <div class="tags"> <!-- for tags -->
            <ul>
              <li class="next-js">Next.js</li>
              <li class="tailwind">Tailwind</li>
              <li class="supabase">Supabase</li>
            </ul>
          </div>
        </div>
        <div class="project-container">
          <div class="proj">
            <router-link :to="{name:'office-survival'}" class="flex-1 hover:opacity-75 duration-200">
              <img src="/purikone.jpg" class="w-full h-full select-none" draggable="false" />
            </router-link>
            <div class="font-jost text-3xl text-center h-10 mt-2 overflow-hidden">
              Office Survival
            </div>
          </div>
          <div class="tags"> <!-- for tags -->
            <ul>
              <li class="java">Java</li>
            </ul>
          </div>
        </div>
        <div class="project-container">
          <div class="proj">
            <router-link :to="{name:'webchat'}" class="flex-1 hover:opacity-75 duration-200">
              <img src="/purikone.jpg" class="w-full h-full select-none" draggable="false" />
            </router-link>
            <div class="font-jost text-3xl text-center h-10 mt-2 overflow-hidden">
              Web Chat
            </div>
          </div>
          <div class="tags"> <!-- for tags -->
            <ul>
              <li class="next-js">Next.js</li>
              <li class="tailwind">Tailwind</li>
              <li class="supabase">Supabase</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
<style scoped>

.project-container {
  background-color: white;

  display: flex;
  margin: 2rem;
  /* width: 25rem;
  aspect-ratio: 5/6; */
  padding: 0.4rem;
}
.project-container > .proj {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 300px;
  aspect-ratio: 1.5;
  padding: 0.4rem;
}
.project-container > .tags {
  margin: 0.4rem;
  padding: 0.4rem;
  /* background: rgba(150,160,175); */
  box-shadow: inset 0 0 5px rgb(0,0,0);
  background-color: rgb(245,245,245);
}
.tags > ul > li {
  font-family: 'Jost';
  letter-spacing: 0.1em;
  font-weight: 500;
  box-shadow: 0 0 5px 0px #000;
  cursor: default;


  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  transition: 500ms;
}
.tags > ul > li:hover {
  scale: 1.2;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.tags > ul > .next-js {
  background-color: rgba(255,255,255,0.5);
}
.tags > ul > .tailwind {
  background-color: rgba(100,200,240,0.5);
}
.tags > ul > .supabase {
  background-color: rgba(100,200,170,0.5);
}
.tags > ul > .java {
  background-color: rgba(241,142,67,0.5);
}

@media (min-width: 768px) {
  .project-container > .proj {
    width: 24rem;
  }
}

</style>