import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login-signup',
  },
  {
    path: '/login-signup',
    name: 'login-signup',
    component: () => import('@/views/login-signup.vue'),
  },
  {
    path: '/onboarding',
    name: 'onboarding',
    component: () => import('@/views/onboarding.vue'),
  },
  {
    path: '/step-1',
    name: 'step-1',
    component: () => import('@/views/step-1.vue'),
  },
  {
    path: '/step-2',
    name: 'step-2',
    component: () => import('@/views/step-2.vue'),
  },
  {
    path: '/notification',
    name: 'notification',
    component: () => import('@/views/notification.vue'),
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: () => import('@/views/feedback.vue'),
  },
  {
    path: '/upgrade',
    name: 'upgrade',
    component: () => import('@/views/upgrade.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
