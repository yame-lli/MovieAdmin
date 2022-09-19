import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/login',
        children: [
            {
                path: '/login',
                name: 'Login',
                component: () => import('@/views/Login/index.vue')
            },
            {
                path: '/home',
                name: 'Home',
                component: () => import('@/views/Home/index.vue'),
                children:[{
                    path: '/userManagement',
                    name: 'UserManagement',
                    component: () => import('@/views/Home/UserManagement/index.vue')
                }]
            },
          ]
    },

]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

export default router