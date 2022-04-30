import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


export const constantRouterMap = [
    { path: '/login', name: '登录', component: () => import('@/views/Login/index.vue'), hidden: true },
    { 
        path: '/', 
        name: '首页', 
        component: () => import('@/views/Layout/index.vue'),
        redirect: '/home',
        icon: 'homel',
        children: [
            { path: 'home', component: () => import('@/views/Home/index.vue'), name: '首页' }
        ]
    }
]
export const asyncRouterMap = [
    {
        path: '/permission',
        name: '权限管理',
        meta: { role: ['admin'] },
        component: () => import('@/views/Layout/index.vue'),
        redirect: '/permission/list',
        requireAuth: true, // 是否需要登录
        dropdown: true,
        icon: 'authority',
        children: [
            { path: 'list', component: () => import('@/views/Permission/list/index.vue'), name: '管理员列表' },
            { path: 'add', component: () => import('@/views/Permission/add/index.vue'), name: '添加管理员' }
        ]
    },
    {
        path: '/article',
        name: '文章',
        component: () => import('@/views/Layout/index.vue'),
        redirect: '/article/list',
        dropdown: true,
        icon: 'zuowen',
        children: [
            { path: 'list', component: () => import('@/views/Article/list/index.vue'), name: '文章列表' },
            { path: 'add', component: () => import('@/views/Article/add/index.vue'), name: '添加文章' }
        ]
    }
]

export const router = new Router({
    mode: 'history',
    routes: constantRouterMap
})

