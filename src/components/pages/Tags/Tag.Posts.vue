<template>
  <div class="container">
      <div class="post-wrap tags">
          <h2 class="post-title">-&nbsp;Tag&nbsp;·&nbsp;{{this.$route.params.name}}&nbsp;-</h2>
      </div>
      <postsList v-for="item in items"
               :key="item.year"
               :year="item.year"
               :posts="item.posts"
      ></postsList>
  </div>
</template>

<script>
import axios from 'axios'
import postsList from '../Posts/posts_list'
export default {
  data () {
    return {
      items: []
    }
  },
  components: {
    postsList
  },
  created () {
    axios({
      method: 'get',
      url: '/api/blog/posts/tag?name=' + this.$route.params.name,
      timeout: 3000
    }).then(res => {
      var result = res.data.result
      this.items = result
    })
  }
}
</script>

<style>

</style>
