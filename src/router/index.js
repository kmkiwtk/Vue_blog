
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import nothing from '@/components/nothing'
import posts from '@/components/pages/Posts/Posts.vue'
import categories from '@/components/pages/Categories/Categories'
import tags from '@/components/pages/Tags/Tags'
import friendlinks from '@/components/pages/FriendLinks/FriendLinks'
import categoryposts from '@/components/pages/Categories/Category.Posts'
import tagposts from '@/components/pages/Tags/Tag.Posts'
import post from '@/components/pages/Posts/Post.vue'
import admin from '@/components/pages/Admin/Admin'
import auth from '@/components/pages/Admin/Auth'
import admincategories from '@/components/pages/Admin/Categories/Categories'
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
      path: '/tag/posts/:name',
      name: 'tagposts',
      component: tagposts
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
      path: '/post/:url',
      name: 'post',
      component: post
    },
    {
      path: '/admin',
      component: admin
    },
    {
      path: '/admin/categories',
      component: admincategories
    },
    {
      path: '/auth',
      component: auth
    },
    {
      path: '*',
      name: 'nothing',
      component: nothing
    }
  ]
})
