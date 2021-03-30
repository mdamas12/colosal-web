import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/products', component: () => import('pages/Products.vue') },
      { path: '/products/detail/:id', component: () => import('pages/DetailProduct.vue') },
      { path: '/promotions', component: () => import('pages/Promotions.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/my-account', component: () => import('pages/MyAccount.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
