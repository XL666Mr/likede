import Vue from "vue";
import Router from "vue-router";
import report from './modules/report'
import vm from './modules/vm'
import sku from './modules/sku'
import order from './modules/order'
import user from './modules/user'
import node from './modules/node'
import policy from './modules/policy'
import task from './modules/task'

Vue.use(Router);

import Layout from "@/layout";

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: () => import('@/views/home/index'),
      meta: { title: '帝可得', icon: 'home' }
    }]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

// 动态路由
export const asyncRoutes = [
  task,
  node,
  vm,
  user,
  sku,
  policy,
  order,
  report,
]


const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: [...constantRoutes,...asyncRoutes],
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
