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
          name: 'product',
          component: () => import('../views/product/Index.vue'),
          children:[
            {
              path:'list',
              name: 'product-list',
              component: () => import('../views/product/List.vue')
            }
          ]
        },
        // {
        //   path: 'product',
        //   name: 'product-create',
        //   component: ProductsCreate
        // },
      ],
    },
    
    
  ]
})

export default router
