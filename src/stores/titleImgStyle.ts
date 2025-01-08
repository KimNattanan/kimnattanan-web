import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTitleImgStyleStore = defineStore('titleImgStyle', () => {
  const opac = ref(0);
  return { opac }
})
