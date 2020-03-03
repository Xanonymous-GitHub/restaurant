import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main.vue'
import HomePage from "@/pages/HomePage.vue";
import Result from "@/pages/Result.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '/',
        name: 'HomePage',
        component: HomePage
      },
      {
        path: 'result',
        name: 'Result',
        component: Result
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
