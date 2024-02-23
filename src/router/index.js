import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BestOfCitySection from '../views/BestOfCitySection.vue'
import ShowMoreHotel from '../views/ShowMoreHotel.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {

    path:'/BestOfCity',
    name:'best-of-city',
    component:BestOfCitySection


  },
  {

    path:'/ShowMoreHotel',
    name:'ShowMoreHotel',
    component:ShowMoreHotel


  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
