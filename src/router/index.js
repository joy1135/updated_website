import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AboutUsViews from '@/views/AboutUsViews.vue';
import ScheduleViews from '@/views/ScheduleViews.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home, 
    },
    {
      path: '/about', 
      name: 'about',
      component: AboutUsViews,
    },
    {
      path: '/schedule', 
      name: 'schedule',
      component: ScheduleViews,
    },
  ],
});

export default router;
