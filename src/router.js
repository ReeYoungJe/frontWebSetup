import { createWebHistory, createRouter } from "vue-router";

import  Main from '@/components/Main'
import sub from "@/components/sub";

const routes = [
  {
    path : '/',
    component: Main
  },{
    path: '/sub',
    component: sub
  },{

  }

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;