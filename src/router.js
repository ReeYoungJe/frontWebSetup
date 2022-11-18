import { createWebHistory, createRouter } from "vue-router";

import  Main from '@/components/Main'

const routes = [
  {
    main : '/',
    component: Main
  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;