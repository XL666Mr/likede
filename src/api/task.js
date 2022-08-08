import request from '@/utils/request'
// 工单搜索
export function taskSearch(index) {
  return request({
    url: '/api/task-service/task/search',
    params:{
      pageIndex: index
    }
  })
}

// 工单状态列表
export function allTaskStatus() {
  return request({
    url: '/api/task-service/task/allTaskStatus'
  })
}
