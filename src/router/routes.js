
const routes = [
  {
    path: '/',
    component: () => import('../pages/Main'),
    children: [
      {
        path:'laptops',
        component: () => import('../components/Laptops')
      },
      {
        path:'smartphones',
        component: () => import('../components/Smartphones')
      },
      {
        path:'computers',
        component: () => import('../components/Computer')
      },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes
