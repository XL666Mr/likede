import request from '@/utils/request'
// 工单搜索
export function taskSearch() {
  return request({
    url: '/api/task-service/task/search'
  })
}

// 工单状态列表
export function allTaskStatus() {
    return request({
      url: '/api/task-service/task/allTaskStatus'
    })
  }

