import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/print-invoice',
      name: 'print-invoice',
      component: () => import('../views/PrintInvoice.vue'),
    },
  ],
});

export default router;
