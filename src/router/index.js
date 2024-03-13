import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => {
      return import('@/views/HomeView.vue');
    },
  },
  {
    path: '/About',
    name: 'About',
    component: () => {
      return import('@/views/AboutView.vue');
    },
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => {
  //     return import('@/views/NotFound.vue');
  //   },
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
