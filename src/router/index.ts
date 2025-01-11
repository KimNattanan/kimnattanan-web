import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import WebChatView from '@/views/WebChatView.vue'
import Proj2View from '@/views/Proj2View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects/webchat',
      name: 'webchat',
      component: WebChatView,
    },
    {
      path: '/projects/proj2',
      name: 'proj2',
      component: Proj2View,
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
})

export default router
