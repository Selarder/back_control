import {createRouter,createWebHashHistory} from 'vue-router'
import { createApp } from 'vue';
import { useStore } from 'vuex';
import Home from '../views/Demo/home.vue'
import Main from '../views/main.vue'
import User from '../views/Demo/user.vue'
import Page1 from '../views/Demo/page1.vue'
import Page2 from '../views/Demo/page2.vue'
import NotFound from '../views/Demo/notfound.vue'
// import Login from '../components/login.vue'

const routes = [
    {
        path: '/',
        component: Main,
        redirect:'/home',
        children: [
            {
                path: '/home',
                name:'home',
                component: Home
            },
            {
                path: '/user',
                name:'user',
                component: User
            },
            {
                path: '/page1',
                name:'page1',
                component: Page1
            },
            {
                path: '/page2',
                name:'page2',
                component: Page2
            },
            // {
            //     path: '/login',
            //     name:'login',
            //     component: Login
            // },
            {
                path: '/404',
                name: 'NotFound',
                component:NotFound.vue,
              },
        ]
    }
];
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router;//