import Vue from 'vue'
import Router from 'vue-router'
import FormPage from '@/page/form'
import TablePage from '@/page/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form',
      name: 'form',
      component: FormPage
    },
    {
      path: '/table',
      name: 'table',
      component: TablePage
    }
  ]
})
