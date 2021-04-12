import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { name: 'Products', path: '/products', component: () => import('pages/Products.vue'), props: true },
      { path: '/products/detail/:id', component: () => import('pages/DetailProduct.vue') },
      { path: '/promotions/detail/:id', component: () => import('pages/DetailPromotion.vue') },
      { path: '/promotions', component: () => import('pages/Promotions.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/my-account', component: () => import('pages/MyAccount.vue') },
      { path: '/cart', component:() => import('pages/ShoppingCart.vue')},
      { path: '/purchases', component:() => import('pages/Purchase.vue')},
      { path: '/purchases-orders', component:() => import('pages/PurchasesOrder.vue')},
      { path: '/purchases/detail/:id', component: () => import('pages/PurchaseDetail.vue') },
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
