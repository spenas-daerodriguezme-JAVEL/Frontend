import axios from 'axios';

// TODO: Improve the reading of data from environment variables
const { URI } = process.env;

const VAPI = axios.create({
  baseURL: 'https://aguadejavel.com:3000',
  // baseURL: 'http://localhost:3000',
  timeout: 60000,
});

// VAPI.interceptors.request.use(function (config) {
//         if(Vue.localStorage.get('token', null) !== null){
//                 config.headers['Authorization'] = 'Bearer ' + Vue.localStorage.get('token', null)
//                 config.headers['Content-Type'] = "application/json"
//         }
//         return config
// })

// VAPI.interceptors.response.use(function (response) {
//         if(response.status === 401){
//                 Vue.localStorage.remove('token')
//                 store.dispatch('logout')
//                 router.push('/login')
//         }
//         return response
// })

export default VAPI;
