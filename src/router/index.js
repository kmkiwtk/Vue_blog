
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import nothing from '@/components/nothing'
import posts from '@/components/pages/Posts/Posts.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/posts',
      component: posts
    },
    {
      path: '/posts/page/:page',
      component: posts
    },
    {
      path: '/posts/:page',
      component: posts
    },
    {
      path: '*',
      name: 'nothing',
      component: nothing
    }
  ]
})
