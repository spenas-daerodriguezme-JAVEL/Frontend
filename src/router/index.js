import Vue from 'vue';
import Router from 'vue-router';

import Motto from '../views/Motto.vue';
import Layout from '../views/Layout.vue';
import Landing from '../views/Landing.vue';
import Contact from '../views/Contact.vue';
import Search from '../views/Search.vue';
import Clients from '../views/Clients.vue';
import GiftCard from '../views/GiftCard.vue';
import Checkout from '../views/Checkout.vue';
import MyAccount from '../views/MyAccount.vue';
import CreateAccount from '../views/CreateAccount.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import ProductDetail from '../views/ProductDetail.vue';
import UserInfo from '../components/shared/UserInfo.vue';
import AdminCatalogList from '../views/Admin/AdminCatalogList.vue';
import AdminCatalogProduct from '../views/Admin/AdminCatalogProduct.vue';
import PurchaseResume from '../views/PurchaseResume.vue';
import AdminPanel from '../views/AdminPanel.vue';
import ProductDetailAdmin from '../views/ProductDetailAdmin.vue';
import DescriptionDetailAdmin from '../views/DescriptionDetailAdmin.vue';

import PaymentTest from '../views/Payment/Test.vue';

import NotFound from '../views/NotFound.vue';

Vue.use(Router);

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
          component: Landing,
        },
        {
          path: '/catalogo',
          name: 'Catalog',
          component: () => import('../views/Catalog.vue'),
        },
        {
          path: '/buscar',
          name: 'Search',
          component: Search,
        },
        {
          path: '/clientes',
          name: 'Clients',
          component: Clients,
        },
        {
          path: '/mision',
          name: 'Motto',
          component: Motto,
        },
        {
          path: '/tarjeta-regalo',
          name: 'GiftCard',
          component: GiftCard,
        },
        // {
        //   path: '/admin',
        //   name: 'AdminCatalogList',
        //   component: AdminCatalogList,
        // },

        {
          path: '/admin/edit/:id',
          name: 'ProductEdit',
          component: AdminCatalogProduct,
          meta: {
            // actionType: 'Editar',
          },
        },

        {
          path: '/admin/product/:id',
          name: 'ProductEdit',
          component: ProductDetailAdmin,
          meta: {
            actionType: 'Editar',
          },
        },
        {
          path: '/admin/description/:id',
          name: 'DescriptionEdit',
          component: DescriptionDetailAdmin,
          meta: {
            actionType: 'Editar',
          },
        },
        {
          path: '/product/:id',
          name: 'ProductDetail',
          component: ProductDetail,
        },
        {
          path: '/admin/new/',
          name: 'ProductNew',
          component: AdminCatalogProduct,
          meta: {
            actionType: 'Crear',
          },
        },
        {
          path: '/admin/user/:id',
          name: 'UserDetail',
          component: UserInfo,
          meta: {
            actionType: 'Visualizar',
          },
        },
        {
          path: '/checkout',
          name: 'Checkout',
          component: Checkout,
        },
        {
          path: '/create-account',
          name: 'CreateAccount',
          component: CreateAccount,
        },
        {
          path: '/reset-password',
          name: 'ForgotPassword',
          component: ForgotPassword,
        },
        {
          path: '/contact',
          name: 'Contact',
          component: Contact,
        },
        {
          path: '/my-account',
          name: 'MyAccount',
          component: MyAccount,
        },
        {
          path: '/payment-test',
          name: 'Payment',
          component: PaymentTest,
        },
        {
          path: '/transaction-state',
          name: 'PurchaseResume',
          component: PurchaseResume,
        },
        {
          path: '/admin',
          name: 'AdminPanel',
          component: AdminPanel,
        },
        {
          path: '*',
          component: NotFound,
        },
      ],
    },
  ],

});

router.beforeEach((to, from, next) => {
  const JWT = localStorage.getItem('jwt');
  if (JWT) {
    const tokens = JWT.split('.');
    const JwtPayload = JSON.parse(atob(tokens[1]));
    if (Date.now() > JwtPayload.exp * 1000) {
      localStorage.removeItem('jwt');
    }
  }
  next();
});
// router.beforeResolve((from, to, next) => {
//   store.state.isLoading = true;
//   next();
// });

// router.afterEach((to, from) => {
//   store.state.isLoading = false;
// })

export default router;
