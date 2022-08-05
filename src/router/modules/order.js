import Layout from '@/layout'
export default {
  path: '/order',
  component: Layout,
  redirect: '/order/index',
  children: [
    {
      path: 'index',
      component: () => import('@/views/order'),
      meta: { title: '订单管理', icon: '_订单 待付款' }
    }
  ]
}