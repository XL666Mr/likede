import router from '@/router'
import store from '@/store'
import {getTokenTime} from '@/utils/auth'
const whiteList = ['/login', '/404']

function isTimeOut() {
  const currentTime = Date.now()
  const tokenTime = getTokenTime()
  const timeout = 60 * 60 * 2 * 1000
  return currentTime - tokenTime > timeout
}
router.beforeEach(async (to, from, next) => {
  if (store.state.user.loginInfo.token) {
    if(isTimeOut()){
      await store.dispatch('user/logout')
      router.push('/login')
      alert('登录过期')
    }else{
      if (!store.state.user.loginInfo.userId) {
        store.dispatch('user/getLoginList')
      }
      if (to.path === '/login') {
        next('/')
      } else {
        next()
      }
    }
  } else {
    const isInclude = whiteList.includes(to.path)
    if (isInclude) {
      next()
    } else {
      next('/login')
    }
  }
})
