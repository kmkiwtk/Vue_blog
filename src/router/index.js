
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import nothing from '@/components/nothing'
import posts from '@/components/pages/Posts/Posts.vue'
import categories from '@/components/pages/Categories/Categories'
import tags from '@/components/pages/Tags/Tags'
import friendlinks from '@/components/pages/FriendLinks/FriendLinks'
import categoryposts from '@/components/pages/Categories/Category.Posts'
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
      path: '/categories',
      component: categories
    },
    {
      path: '/category/posts/:name',
      name: 'categoryposts',
      component: categoryposts
    },
    {
      path: '/tags',
      component: tags
    },
    {
      path: '/apps',
      component: friendlinks
    },
    {
      path: '*',
      name: 'nothing',
      component: nothing
    }
  ]
})
