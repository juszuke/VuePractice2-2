import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/step1',
    name: 'Step1',
    component: () => import(/* webpackChunkName: "step1" */ './views/Step1.vue')
  },
  {
    path: '/step2',
    name: 'Step2',
    component: () => import(/* webpackChunkName: "step2" */ './views/Step2.vue')
  },
  {
    path: '/step3',
    name: 'Step3',
    component: () => import(/* webpackChunkName: "step3" */ './views/Step3.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
