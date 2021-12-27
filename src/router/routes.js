import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import NewsFeed from '@/views/NewsFeed'
import User from '@/views/User'
import VueRouter from "vue-router";
import Vue from "vue";
import {store} from "@/store/store";

Vue.use(VueRouter)

export const routes = [
    {
        path: '', name: 'homePage', component: Home, children: [
            {path: '/', name: 'newsfeed', component: NewsFeed},
            {path: '/user', name: 'user', component: User},
        ]
    },
    {
        path: '/login', name: 'loginPage', component: Login
    },
    {
        path: '/register', name: 'registerPage', component: Register
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

router.beforeEach((to, from, next) => {
    if ((to.name === 'loginPage' || to.name === 'registerPage') && store.getters.getToken) {
        next('/')
    } else next()
    if (!store.getters.getToken){
        if (to.name==='registerPage'){
            next('/register')
        } else {
            next('/login')
        }
    }
})

export default router