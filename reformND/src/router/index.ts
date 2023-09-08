import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PastConferences from '../views/PastConferences.vue'
import Upcoming from '../views/Upcoming.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/upcoming',
      name: 'upcomingConferences',
      component: Upcoming
    },
    {
      path: '/pastConferences',
      name: 'pastConferences',

      component: PastConferences
    }
  ]
})

export default router
