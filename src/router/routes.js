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
      }
   ]
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes
