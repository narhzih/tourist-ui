import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/index';

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
        component: () => import('../views/pages/Overview'),
      },
      {
        path: 'tour/:id',
        name: 'tour',
        component: () => import('../views/pages/Tour'),
        props: true,
      },
      {
        path: 'auth/login',
        name: 'login',
        component: () => import('../views/pages/auth/Login'),
        meta: {
          noAuth: true,
        },
      },
      {
        path: 'auth/signup',
        name: 'signUp',
        component: () => import('../views/pages/auth/SignUp'),
        meta: {
          noAuth: true,
        },
      },
      {
        path: 'account',
        name: 'account',
        component: () => import('../views/pages/account/AccountBase'),
        children: [
          {
            path: 'settings',
            name: 'settings',
            component: () => import('../views/pages/account/Settings'),
          },
        ],
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

router.beforeEach((to) => {
  if (to.meta.auth) {
    if (store.state.accessToken === null) {
      return router.push('/auth/login');
    }
  }

  if (to.meta.noAuth) {
    if (store.state.accessToken !== null) {
      return router.push('/home');
    }
  }
});

export default router;
