import { createRouter, createWebHistory } from 'vue-router';
// import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    component: () => import('../views/Base'),
    children: [
      {
        path: '',
        redirect: 'home',
      },
      {
        path: 'home',
        name: 'overview',
        component: () => import('../views/Overview'),
      },
      {
        path: 'tour/:id',
        name: 'tour',
        component: () => import('../views/Tour'),
      },
      {
        path: 'auth/login',
        name: 'login',
        component: () => import('../views/auth/Login'),
      },
      {
        path: 'auth/signup',
        name: 'signUp',
        component: () => import('../views/auth/SignUp'),
      },
    ],
  },
];

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }
    // always scroll to top
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
