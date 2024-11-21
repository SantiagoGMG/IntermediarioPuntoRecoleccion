import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/Home.vue';  // Asegúrate de importar desde la ubicación correcta
import Fase1 from '@/Fase1.vue';  // Asegúrate de importar desde la ubicación correcta

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fase1',
    name: 'Fase1',
    component: Fase1,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
