
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import nothing from '@/components/nothing'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/nothing',
      name: 'nothing',
      component: nothing
    }
  ]
})
