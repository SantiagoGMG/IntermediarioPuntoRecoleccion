import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/view/Home.vue';  // Asegúrate de importar desde la ubicación correcta
import Fase1 from '@/view/Fase1.vue';  // Asegúrate de importar desde la ubicación correcta
import Fase2 from '@/view/Fase2.vue';
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
  {
    path:'/fase2',
    name: 'Fase2',
    component: Fase2,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
