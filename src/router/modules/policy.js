import Layout from '@/layout'
export default {
  path: '/policy',
  component: Layout,
  redirect: '/policy/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/policy'),
      meta: { title: '策略管理', icon: '灯泡' }
    }
  ]
}
