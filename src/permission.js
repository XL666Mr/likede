import router from '@/router'
import store from '@/store'
const whiteList = ['/login', '/404']
router.beforeEach((to, from, next) => {
  if (store.state.user.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
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
