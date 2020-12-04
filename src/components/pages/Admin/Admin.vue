<template>
  <div class="post-wrap">
    <h2 class="post-title">-&nbsp;博客内容管理&nbsp;-</h2>
    <ul>
        <li>
            <a href="/admin/post"><h3>📝~~~ 新增文章 ~~~📝</h3></a>
        </li>
        <li>
            <a href="/admin/posts"><h3>📗~~~ 文章管理 ~~~📗</h3></a>
        </li>
        <li>
            <router-link to="/admin/categories"><h3>📕~~~ 分类管理 ~~~📕</h3></router-link>
        </li>
        <li>
            <a href="/admin/tags"><h3>📘~~~ 标签管理 ~~~📘</h3></a>
        </li>
        <li>
            <a href="/admin/friendlinks"><h3>📒~~~ 友链管理 ~~~📒</h3></a>
        </li>
    </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  created () {
    console.log('判断是否存有token')
    if (!this.$cookies.isKey('token')) {
      console.log('不存在token')
      this.$router.push({ path: '/auth' })
    } else {
      console.log('存在token')
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$cookies.get('token')
    }
  }
}
</script>

<style>

</style>
