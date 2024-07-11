import { type RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

type RouterRecord = Omit<RouteRecordRaw, 'name' | 'children'> & {
  name: string
  children?: RouterRecord[]
}

/* СОВЕТ:
    Выносите name / path в какой-нибудь utils/constants{.ts, .js} (если проект крупный, тяжко потом будет искать и фиксить по компонентам, а так вам лишь нужно поменять в файлике значение)
*/

const routes = [
  {
    name: 'home',
    path: '/',
    component: () => import('@/views/Home.vue'),
  },
  {
    name: 'about',
    path: '/about',
    component: () => import('@/views/About.vue'),
  },
] satisfies readonly RouterRecord[]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
