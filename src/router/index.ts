import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import WebChatView from '@/views/WebChatView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import OfficeSurvivalView from '@/views/OfficeSurvivalView.vue'
import PongView from '@/views/PongView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      children: [
        {
          path: '/projects/webchat',
          name: 'webchat',
          component: WebChatView,
        },
        {
          path: '/projects/office-survival',
          name: 'office-survival',
          component: OfficeSurvivalView,
        },
        {
          path: '/projects/pong',
          name: 'pong',
          component: PongView,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
})

export default router
