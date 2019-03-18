import Vue from 'vue'
import Router from 'vue-router'
import { store } from '../store/index'

import Motto from '../views/Motto.vue'
import Layout from '../views/Layout.vue'
import Landing from '../views/Landing.vue'
import Catalog from '../views/Catalog.vue'
import Clients from '../views/Clients.vue'
import GiftCard from '../views/GiftCard.vue'
import Checkout from '../views/Checkout.vue'
import ProductDetail from '../views/ProductDetail.vue'
import AdminCatalogList from '../views/Admin/AdminCatalogList.vue'
import AdminCatalogProduct from '../views/Admin/AdminCatalogProduct.vue'

Vue.use(Router)

const router = new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: [
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'Landing',
          component: Landing
        },
        {
          path: '/catalogo',
          name: 'Catalog',
          component: Catalog
        },
        {
          path: '/clientes',
          name: 'Clients',
          component: Clients
        },
        {
          path: '/mision',
          name: 'Motto',
          component: Motto
        },
        {
          path: '/tarjeta-regalo',
          name: 'GiftCard',
          component: GiftCard
        },
        {
          path: '/admin',
          name: 'AdminCatalogList',
          component: AdminCatalogList
        },
        {
          path: '/admin/edit/:id',
          name: 'ProductEdit',
          component: AdminCatalogProduct,
          meta: {
            actionType: 'Editar'
          }
        },
        {
          path: '/product/:id',
          name: 'ProductDetail',
          component: ProductDetail
        },
        {
          path: '/admin/new/',
          name: 'ProductNew',
          component: AdminCatalogProduct,
          meta: {
            actionType: 'Crear'
          }
        },
        {
          path: '/checkout',
          name: 'Checkout',
          component: Checkout
        }
      ]
    },
  ]

})

// router.beforeResolve((from, to, next) => {
//   store.state.isLoading = true;
//   next();
// }); 

// router.afterEach((to, from) => {
//   store.state.isLoading = false;
// })



export default router;

