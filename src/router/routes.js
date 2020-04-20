const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      title: '首页',
      root: true
    },
    children: [
      {
        path: '/home',
        meta: { title: 'AdminApp', menu: false },
        component: () => import('pages/Index.vue')
      },
      {
        path: 'layout',
        meta: { title: '页面布局' },
        component: () => import('layouts/Blank.vue'),
        children: [
          {
            path: 'normal',
            meta: { title: '默认布局' },
            component: () => import('pages/NormalPage.vue')
          },
          {
            path: 'split',
            meta: { title: '左右分割布局' },
            component: () => import('pages/SplitPage.vue')
          }
        ]
      },
      {
        path: 'B',
        meta: { title: '页面BBB' },
        component: () => import('pages/Index.vue')
      },
      {
        path: 'C',
        meta: { title: '页面BBB' },
        component: () => import('layouts/Blank.vue'),
        children: [
          {
            path: 'C1',
            meta: { title: '页面C1' },
            component: () => import('pages/Index.vue')
          },
          {
            path: 'C2',
            meta: { title: '页面C1' },
            component: () => import('pages/Index.vue')
          }
        ]
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
