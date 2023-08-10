import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        component: () => import('@/pages/index/index.vue')             
    },
    {
        path: '/course',
        component: () => import('@/pages/course/index.vue')             
    },
    {
        path: '/about',
        component: () => import('@/pages/about/index.vue')             
    },
    {
        path: '/news',
        component: () => import('@/pages/news/index.vue')             
    }
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
