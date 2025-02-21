<script setup lang="ts">

</script>
<template>

  <div class="w-full flex flex-col
              md:p-10">
    <div class="w-full h-full flex flex-col bg-col1-3">
      <div class="text-center font-marcellus tracking-[0.2em] select-none text-white
                  md:text-7xl md:mt-20 md:mb-10
                  xs:text-5xl
                  text-4xl mt-10">
        PROJECTS
      </div>
      <div class="flex flex-wrap justify-center">
        <div class="project-container">
          <div class="proj">
            <router-link :to="{name:'webchat'}" class="inline-block mb-2
                                                        md:w-[500px]">
              <img src="/webchat_thumbnail.jpeg" class="w-full aspect-[1529/1416] select-none hover:opacity-75 duration-200" draggable="false" />
            </router-link>
            <div class="font-jost text-center leading-5
                        md:text-2xl
                        xs:text-xl
                        text-sm">
              Web Chat
            </div>
          </div>
          <div class="tags
                      lg:text-base
                      xs:text-sm
                      text-xs"> <!-- for tags -->
            <ul>
              <li class="next-js">Next.js</li>
              <li class="tailwind">Tailwind</li>
              <li class="supabase">Supabase</li>
            </ul>
          </div>
        </div>
        <div class="project-container">
          <div class="proj">
            <router-link :to="{name:'office-survival'}" class="inline-block mb-2
                                                                md:w-[500px]">
              <img src="/purikone.jpg" class="w-full aspect-[1529/1416] select-none hover:opacity-75 duration-200" draggable="false" />
            </router-link>
            <div class="font-jost text-center leading-5
                        md:text-2xl
                        xs:text-xl
                        text-sm">
              Office Survival Game
            </div>
          </div>
          <div class="tags
                      lg:text-base
                      xs:text-sm
                      text-xs"> <!-- for tags -->
            <ul>
              <li class="java">Java</li>
            </ul>
          </div>
        </div>
        <div class="project-container">
          <div class="proj">
            <router-link :to="{name:'pong'}" class="inline-block mb-2
                                                    md:w-[500px]">
              <img src="/pong_thumbnail.png" class="w-full aspect-[1529/1416] select-none hover:opacity-75 duration-200" draggable="false" />
            </router-link>
            <div class="font-jost text-center leading-5
                        md:text-2xl
                        xs:text-xl
                        text-sm">
              Pong-playing AI
            </div>
          </div>
          <div class="tags
                      lg:text-base
                      xs:text-sm
                      text-xs"> <!-- for tags -->
            <ul>
              <li class="python">Python</li>
              <li class="default-tag-col">DQN</li>
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
  margin-top: 2rem;
  margin-bottom: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  padding: 0.4rem;
  height: fit-content;
  min-width: fit-content;
  transition: all 500ms;
}
/* .project-container:hover {
  scale: 1.2;
} */
.project-container > .proj {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
}
.project-container > .tags {
  margin: 0.4rem;
  padding: 0.4rem;
  background-color: rgb(245,245,245);
  box-shadow: inset 0 0 5px rgb(0,0,0);
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
.tags > ul > .python {
  background-color: #ffe873;
}
.tags > ul > .default-tag-col {
  background-color: #c4c4c4;
}


@media (min-width: 480px) { /* xs */
  .project-container {
    width: calc(480px - 2rem);
  }
}
@media (min-width: 1024px) { /* lg */
  .project-container {
    margin-left: 0.7rem;
    margin-right: 0.7rem;
  }
}
@media (min-width: 1280px) { /* xl */
  .project-container {
    margin-left: 3rem;
    margin-right: 3rem;
  }
}
@media (min-width: 1536px) { /* 2xl */
  .project-container {
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

</style>