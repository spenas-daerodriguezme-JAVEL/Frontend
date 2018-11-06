import Vue from 'vue'
import Router from 'vue-router'


import Layout from '../views/Layout.vue'
import Landing from '../views/Landing.vue'
import Catalog from '../views/Catalog.vue'
import Clients from '../views/Clients.vue'

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
      ]
    },
  ]
})
