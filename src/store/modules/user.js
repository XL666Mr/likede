import { login, getUserInfo } from '@/api/user'
import { Message } from 'element-ui'
import router from '@/router'
import { setTokenTime } from '@/utils/auth'
export default {
  namespaced: true,
  state: {
    clientToken: '',
    loginInfo: {}
  },
  mutations: {
    setclientToken(state, payload) {
      state.clientToken = payload
    },
    setLoginInfo(state, payload) {
      state.loginInfo = payload
      setTokenTime()
    }
  },
  actions: {
    async getLoginList(context, ruleForm) {
      try {
        const res = await login(context.state.clientToken, ruleForm)
        if (res.data.success) {
          context.commit('setLoginInfo', { ...res.data})
          const info = await getUserInfo(res.data.userId)
          context.commit('setLoginInfo', { ...res.data, ...info.data })
          router.push('/')
        } else {
          Message.error(res.data.msg)
        }
      } catch (error) {
        console.log(error)
        Message.error('系统错误')
      }
    },
    getclientToken(context, payload) {
      context.commit('setclientToken', payload)
    },
    logout(context) {
      context.commit('setLoginInfo', {})
    }
  }
}
