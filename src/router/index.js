import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductList from "../components/ProductList";
import Update from "../components/Update";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
