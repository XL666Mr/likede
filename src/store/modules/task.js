import { taskSearch, allTaskStatus } from '@/api/task'

export default {
  namespaced: true,
  state: {
    pageIndex: '1',
    TaskStatus: [], // 工单状态列表
    TableList: [] // 表格数据
  },
  getters: {
    pageIndexs: (state) => {
      return state.pageIndex
    }
  },
  mutations: {
    // 下一页
    addPageIndex(state) {
      state.pageIndex++
      // console.log(state.pageIndex)
    },
    // 上一页
    reducePageIndex(state) {
      state.pageIndex--
    },
    // 工单状态
    setAllTaskStatus(state, payload) {
      state.TaskStatus = payload
    },
    // 表格数据
    setTableObjs(state, payload) {
      state.TableList = payload
      state.TableList.currentPageRecords.forEach((ele) => {
        if (ele.createType === 1) {
          ele.createType = '手动'
        } else {
          ele.createType = '自动'
        }
        ele.createTime = ele.createTime.replace(/-/g, '.')
        ele.createTime = ele.createTime.replace(/T/g, ' ')
      })
    }
  },
  actions: {
    // 工单状态
    async getallTaskStatus({ commit }) {
      const { data } = await allTaskStatus()
      commit('setAllTaskStatus', data)
    },
    // 获取表格数据
    async getTableObjs({ commit, state }) {
      const { data } = await taskSearch(state.pageIndex)
      commit('setTableObjs', data)
    }
  }
}
