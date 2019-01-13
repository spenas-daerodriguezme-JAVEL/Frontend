import axios from 'axios'
import Vue from 'vue'
import router from './router'
import { store } from './store/index'

const URI = process.env.URI

const VAPI = axios.create({
    baseURL: URI,
    timeout: 60000
})

// VAPI.interceptors.request.use(function (config) {
//   if(Vue.localStorage.get('token', null) !== null){
//     config.headers['Authorization'] = 'Bearer ' + Vue.localStorage.get('token', null)
//     config.headers['Content-Type'] = "application/json"
//   }
//   return config
// })
  
// VAPI.interceptors.response.use(function (response) {
//   if(response.status === 401){
//     Vue.localStorage.remove('token')
//     store.dispatch('logout')
//     router.push('/login')
//   }
//   return response
// })

export default VAPI