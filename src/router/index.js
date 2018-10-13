import Vue from 'vue'
import Router from 'vue-router'
import Landing from '../views/Landing.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Landing
    }
  ]
})
