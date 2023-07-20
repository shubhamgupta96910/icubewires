
import { createWebHistory, createRouter } from "vue-router";
import SignUp from './components/SignUp'
import LoginComponent from './components/LoginComponent'
import ButtonSignUp from './components/ButtonSignUp'
import User from './components/User'

const routes = [
    {
        path: '/login',
        component:LoginComponent
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path:'/',
        component: ButtonSignUp
    },
    {
        name:'User',
        path:'/user',
        component: User
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes

})

export default router;