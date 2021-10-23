const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
  },


  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
