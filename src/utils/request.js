import axios from 'axios'
import URL from './url'
import store from '@/store'
const service = axios.create({
  baseURL: URL,
  timeout: 5000
})

// request interceptor
service.interceptors.request.use((config) => {
  // console.log(store.state.user.loginInfo);
  config.headers['Authorization'] = store.state.user.loginInfo.token
  return config
})

// response interceptor
service.interceptors.response.use()

export default service
