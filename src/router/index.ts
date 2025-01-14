import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import WebChatView from '@/views/WebChatView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import OfficeSurvivalView from '@/views/OfficeSurvivalView.vue'

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
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
})

export default router
