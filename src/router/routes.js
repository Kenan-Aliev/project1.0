const routes = [
  {
    path: '/',
    component: () => import('../pages/Main'),
    children: [
      // {
      //   path: '',
      //   component: () => import('../components/Main')
      // },
      {
        path:'',
        component: () => import('components/SmartphonesList')
      },
      {
        path:'add',
        component:() => import('../components/AddSmartphones')
      },
      {
        path:':id',
        component: () => import('../components/Smartphone')
      }
    ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes
