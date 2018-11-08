import Vue from 'vue'
import Router from 'vue-router'


import Layout from '../views/Layout.vue'
import Landing from '../views/Landing.vue'
import Catalog from '../views/Catalog.vue'
import Clients from '../views/Clients.vue'
import Motto from '../views/Motto.vue'
import GiftCard from '../views/GiftCard.vue'

Vue.use(Router)

export default new Router({
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
      ]
    },
  ]
})
