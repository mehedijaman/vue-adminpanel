import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/auth/Register.vue')
    },
    {
      path: '/forget-password',
      name: 'forget-password',
      component: () => import('../views/auth/ForgetPassword.vue')
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('../views/auth/ResetPassword.vue')
    },

    {
      path: '/',
      component: () => import('../layouts/Master.vue'),
      children:[
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/Dashboard.vue')
        },
        {
          path: 'product',
          children:[
            {
              path:'',
              name: 'product',
              component: () => import('../views/product/List.vue')
            },
            {
              path:'create',
              name: 'product-create',
              component: () => import('../views/product/Create.vue')
            },
            {
              path:':id/details',
              name: 'product-details',
              component: () => import('../views/product/Details.vue')
            },
            {
              path:':id/edit',
              name: 'product-edit',
              component: () => import('../views/product/Edit.vue')
            }
          ]
        },
      ],
    },
    
    
  ]
})

export default router
