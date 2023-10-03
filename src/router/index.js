import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../views/Home.vue');
const Login = () => import('../views/Login.vue');
const Register = () => import('../views/Register.vue');
const Dashboard = () => import('../views/Dashboard.vue');
const Products = () => import('../views/Products.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
  ]
})

export default router
