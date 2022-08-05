import Layout from '@/layout'
export default {
  path: '/user',
  component: Layout,
  redirect: '/user/index',
  meta: { title: '人员管理', icon: '人物-@' },
  children: [
    {
      path: 'index',
      component: () => import('@/views/user'),
      meta: { title: '人员管理'}
    },
    {
      path: 'user-task-stats',
      component: () => import('@/views/user/user-task-stats'),
      meta: { title: '人员统计' }
    },
    {
      path: 'user-work',
      component: () => import('@/views/user/user-work'),
      meta: { title: '工作量列表' }
    }
  ]
}