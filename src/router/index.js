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
import AdminCatalogList from '../views/Admin/AdminCatalogList.vue';
import AdminCatalogProduct from '../views/Admin/AdminCatalogProduct.vue';

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
                {
                    path: '/admin',
                    name: 'AdminCatalogList',
                    component: AdminCatalogList,
                },
                {
                    path: '/admin/edit/:id',
                    name: 'ProductEdit',
                    component: AdminCatalogProduct,
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
                    path: '*',
                    component: NotFound,
                },
            ],
        },
    ],

});

// router.beforeResolve((from, to, next) => {
//   store.state.isLoading = true;
//   next();
// });

// router.afterEach((to, from) => {
//   store.state.isLoading = false;
// })


export default router;
