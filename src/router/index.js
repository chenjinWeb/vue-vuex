import Vue from 'vue'
import Router from 'vue-router'

import Login from "../pages/login/login.vue"
import Index from "../pages/index/index.vue"

Vue.use(Router);

const login=[
  {
    path:"/login",
    name:'login',
    component:Login
  }
]

const index=[
  {
    path:"/index",
    name:'index',
    component:Index
  }
]


const routes = [
  {
    path:"*",
    redirect:'/login',
    component:Login
  },
  {
    path:"/",
    redirect:"/login",
    component:Login
  },
  ...login,
  ...index
]

const router = new Router({
  routes,
  mode:"history"
})

export default router
