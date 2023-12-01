import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/MyLogin.vue';
import Register from '../components/MyRegister.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Login
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
