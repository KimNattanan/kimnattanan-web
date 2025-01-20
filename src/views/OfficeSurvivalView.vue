<script setup lang="ts">
import CoolButton from '@/components/CoolButton.vue';
import { onMounted, ref } from 'vue';
import { goNewTab } from '@/assets/actions';
import CoolDiv from '@/components/CoolDiv.vue';

const codeBlock = ref<HTMLDivElement|null>(null);

onMounted(()=>{
  scrollTo(0,0);
  if(codeBlock.value){
    codeBlock.value.animate(
      [
      {backgroundColor: 'rgb(255,255,255)'},
      {backgroundColor: 'rgba(253, 193, 216,0.4)'},
      {backgroundColor: 'rgb(255,255,255)'},
      ],
      {
        duration: 1000,
        iterations: Infinity,
      }
    );
  }
})

</script>

<template>
  <div class="flex flex-col">
    <div class="font-marcellus tracking-[0.2em] text-col1-5 text-center my-4
                lg:text-6xl
                sm:text-5xl
                text-4xl">
      OFFICE SURVIVAL
    </div>
    <div class="bg-white rounded-xl w-full my-4 py-16
                xl:px-40
                lg:px-28
                md:px-20
                sm:px-12
                xs:px-8
                px-6">
      <div class="p-6 border-2 border-col3-2 w-fit" ref="codeBlock">
        <div class="flex my-2">
          Source code:
          <a href="https://github.com/KimNattanan/java-project" target="_blank">
            <CoolDiv class="text-col3-4 w-fit">
              【Github】
            </CoolDiv>
          </a>
        </div>
        <div class="my-2">
          Latest release:
          <div class="ml-4">
            <div class="flex">
              <a href="https://github.com/KimNattanan/java-project/releases/download/v.0.1-alpha/OfficeSurvival.zip" target="_blank">
                <CoolDiv class="text-col3-4 w-fit">
                  【Download】
                </CoolDiv>
              </a>
            </div>
            Please run 「bin\app.bat」 or the shortcut file in the root folder.
          </div>
        </div>
      </div>
      <div class="my-8">
        This project is implemented entirely in Java, including the use of JavaFX modules.
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>