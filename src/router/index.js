import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicInformation from '../views/BasicInformation.vue'
import Questionnaire from '../views/Questionnaire.vue'
import ConsultantContent from '../views/ConsultantContent.vue'
import Confirm from '../views/Confirm.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BasicInformation',
    component: BasicInformation
  },
  {
    path: '/questionnaire',
    name: 'Questionnaire',
    component: Questionnaire
  },
  {
    path: '/consultantcontent',
    name: 'ConsultantContent',
    component: ConsultantContent
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
