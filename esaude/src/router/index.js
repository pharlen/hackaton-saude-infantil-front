import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Reports from '@/components/Reports'
import InsertAgent from '@/components/InsertAgent'
import InsertData from '@/components/InsertData'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/agents',
      name: 'InsertAgent',
      component: InsertAgent
    },
    {
      path: '/insert-data',
      name: 'InsertData',
      component: InsertData
    },
    {
      path: '/account',
      name: 'Account',
      component: Account
    }
  ]
})
