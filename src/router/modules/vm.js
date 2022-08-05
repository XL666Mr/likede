import Layout from '@/layout'
export default {
  path: '/vm',
  component: Layout,
  redirect: '/vm/index',
  meta: { title: '设备管理', icon: '设备' },
  children: [
    {
      path: 'index',
      component: () => import('@/views/vm'),
      meta: { title: '设备管理' }
    },
    {
      path: 'status',
      component: () => import('@/views/vm/status'),
      meta: { title: '运营工单' }
    },
    {
      path: 'type',
      component: () => import('@/views/vm/type'),
      meta: { title: '运维工单' }
    }
  ]
}
