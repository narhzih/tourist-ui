import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';
import Overview from '../views/Overview';
import Tour from '../views/Tour';
const routes = [
  {
    path: '/',
    name: 'overview',
    component: Overview,
  },
  {
    path: '/tour/:id',
    name: 'tour',
    component: Tour,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
