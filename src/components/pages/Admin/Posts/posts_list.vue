<template>
  <div class="post-wrap archive">
      <h3>{{year}}</h3>
      <article v-for="post in posts"
               v-bind:key="post.id"
      class="archive-item">
        <a @click="deletepost(post.id)" title="❌删除" >❌</a>
        <a @click='jumpbyid(post.id)' title="📝编辑" >📝</a>
        <a @click="jumpbyid(post.id)">{{post.title}}</a>
        <span class="archive-item-date">{{post.creationTime}}</span>
      </article>
  </div>
</template>

<script>
import * as Admin from '../../../../api/Admin'
export default {
  name: 'post_list',
  props: ['year', 'posts'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    jumpbyid: function (id) {
      this.$router.push({
        name: 'adminpost',
        params: { id: id }
      })
    },
    deletepost: function (id) {
      if (confirm('\n💥💢真的要干掉这个该死的文章吗💢💥')) {
        Admin.DeletePost(id).then(res => {
          if (res.data.success) {
            console.log('删除成功')
          } else {
            console.log('删除失败')
            console.log(res.data.message)
          }
          this.$emit('del')
        })
      } else {
        console.log('放弃删除')
      }
    },
    changetonumber: function (month) {
      var t = 0
      if (month === 'January') {
        t = 1
      } else if (month === 'February') {
        t = 2
      } else if (month === 'March') {
        t = 3
      } else if (month === 'April') {
        t = 4
      } else if (month === 'May') {
        t = 5
      } else if (month === 'June') {
        t = 6
      } else if (month === 'July') {
        t = 7
      } else if (month === 'August') {
        t = 8
      } else if (month === 'September') {
        t = 9
      } else if (month === 'October') {
        t = 10
      } else if (month === 'November') {
        t = 11
      } else if (month === 'December') {
        t = 12
      } else {
        return false
      }
      return t
    }
  }
}
</script>

<style>

</style>
