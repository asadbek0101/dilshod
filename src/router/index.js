import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/pages/Home/HomePage";
import MainPage from "@/pages/Main/MainPage";

const routes = [
  {
    path:"/",
    name:"Home",
    component:HomePage
  },
  {
    path: '/main',
    name:"Main",
    component: MainPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
