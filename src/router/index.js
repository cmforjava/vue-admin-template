import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
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
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  // {
  //   path: '/example',
  //   component: Layout,
  //   redirect: '/example/table',
  //   name: 'Example',
  //   meta: { title: 'Example', icon: 'example' },
  //   children: [
  //     {
  //       path: 'table',
  //       name: 'Table',
  //       component: () => import('@/views/table/index'),
  //       meta: { title: 'Table', icon: 'table' }
  //     },
  //     {
  //       path: 'tree',
  //       name: 'Tree',
  //       component: () => import('@/views/tree/index'),
  //       meta: { title: 'Tree', icon: 'tree' }
  //     }
  //   ]
  // },
  {
    path: '/kuaidi',
    component: Layout,
    redirect: '/kuaidi/mail',
    name: 'kuaidi',
    meta: { title: '快递管理', icon: 'example' },
    children: [
      {
        path: 'mail',
        name: 'Table',
        component: () => import('@/views/express/index'),
        meta: { title: '寄件管理', icon: 'table' }
      },
      {
        path: 'edit/*',
        name: 'Form',
        hidden: true,
        component: () => import('@/views/express/edit'),
        meta: { title: '编辑', icon: 'form' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/express/delivery'),
        meta: { title: '派件管理', icon: 'tree' }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting/role',
    name: 'setting',
    meta: { title: '配置管理', icon: 'example' },
    children: [
      {
        path: 'role',
        name: 'Table',
        component: () => import('@/views/setting/role'),
        meta: { title: '角色管理', icon: 'table' }
      },
      {
        path: 'permissionedit/*',
        name: 'Form',
        hidden: true,
        component: () => import('@/views/setting/permissionedit'),
        meta: { title: '权限编辑', icon: 'form' }
      },
      {
        path: 'roleedit/*',
        name: 'Form',
        hidden: true,
        component: () => import('@/views/setting/roleedit'),
        meta: { title: '角色编辑', icon: 'form' }
      },
      {
        path: 'permission',
        name: 'Tree',
        component: () => import('@/views/setting/permission'),
        meta: { title: '权限管理', icon: 'tree' }
      },
      {
        path: 'menu',
        name: 'Tree2',
        component: () => import('@/views/setting/menu'),
        meta: { title: '菜单管理', icon: 'tree' }
      },
      {
        path: 'log',
        name: 'Tree3',
        component: () => import('@/views/setting/log'),
        meta: { title: '操作日志', icon: 'tree' }
      }
    ]
  },
  {
    path: '/people',
    component: Layout,
    redirect: '/people/admin',
    name: 'Example',
    meta: { title: '人员管理', icon: 'example' },
    children: [
      {
        path: 'admin',
        name: 'Table',
        component: () => import('@/views/people/admin'),
        meta: { title: '管理员管理', icon: 'table' }
      },
      {
        path: 'user',
        name: 'Tree',
        component: () => import('@/views/people/user'),
        meta: { title: '用户管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'index/*',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },
  //
  // {
  //   path: '/nested',
  //   component: Layout,
  //   redirect: '/nested/menu1',
  //   name: 'Nested',
  //   meta: {
  //     title: 'Nested',
  //     icon: 'nested'
  //   },
  //   children: [
  //     {
  //       path: 'menu1',
  //       component: () => import('@/views/nested/menu1/index'), // Parent router-view
  //       name: 'Menu1',
  //       meta: { title: 'Menu1' },
  //       children: [
  //         {
  //           path: 'menu1-1',
  //           component: () => import('@/views/nested/menu1/menu1-1'),
  //           name: 'Menu1-1',
  //           meta: { title: 'Menu1-1' }
  //         },
  //         {
  //           path: 'menu1-2',
  //           component: () => import('@/views/nested/menu1/menu1-2'),
  //           name: 'Menu1-2',
  //           meta: { title: 'Menu1-2' },
  //           children: [
  //             {
  //               path: 'menu1-2-1',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  //               name: 'Menu1-2-1',
  //               meta: { title: 'Menu1-2-1' }
  //             },
  //             {
  //               path: 'menu1-2-2',
  //               component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  //               name: 'Menu1-2-2',
  //               meta: { title: 'Menu1-2-2' }
  //             }
  //           ]
  //         },
  //         {
  //           path: 'menu1-3',
  //           component: () => import('@/views/nested/menu1/menu1-3'),
  //           name: 'Menu1-3',
  //           meta: { title: 'Menu1-3' }
  //         }
  //       ]
  //     },
  //     {
  //       path: 'menu2',
  //       component: () => import('@/views/nested/menu2/index'),
  //       meta: { title: 'menu2' }
  //     }
  //   ]
  // },
  //
  // {
  //   path: 'external-link',
  //   component: Layout,
  //   children: [
  //     {
  //       path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
  //       meta: { title: 'External Link', icon: 'link' }
  //     }
  //   ]
  // },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
