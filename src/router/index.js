import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import ClienteCrud from '../components/ClienteCrud'
import AnimalCrud from '../components/AnimalCrud'
import ProdutosPetShopCrud from '../components/ProdutosPetShopCrud'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/clientes',
    name: '/clientes',
    component: ClienteCrud
  },
  {
    path: '/animais',
    name: 'animais',
    component: AnimalCrud
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: ProdutosPetShopCrud
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
