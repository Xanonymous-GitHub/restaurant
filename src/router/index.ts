import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main.vue'
import HomePage from "@/pages/HomePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {
        path:'/',
        name:'HomePage',
        component:HomePage
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
