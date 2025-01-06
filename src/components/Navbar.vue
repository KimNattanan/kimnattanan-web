<script setup lang="ts">

</script>
<template>

  <div class="fixed flex h-24 w-full bg-white font-medium navbar">
    <div class="ml-12 h-full content-center font-serif text-xl">
      <router-link :to="{ name: 'home' }" class="flex items-center">
        <img
        class="object-contain h-10 mr-2"
        src="/icon.ico"
        />
        hello
      </router-link>
    </div>
    <ul class="flex h-full right-0 absolute p-6 text-lg">
      <li>
        <router-link
        :to="{ name: 'home', hash: '#1' }"
        class="text-btn"
        >1</router-link>
      </li>
      <li>
        <router-link
        :to="{ name: 'home', hash: '#2' }"
          class="text-btn"
        >2</router-link>
      </li>
      <li>
        <router-link
        :to="{ name: 'home', hash: '#3' }"
        class="text-btn"
        >3</router-link>
      </li>
      <li>
        <router-link
        :to="{ name: 'home', hash: '#4' }"
        class="text-btn"
        >4</router-link>
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