<template>
  <div class="post-wrap archive">
    <postsList v-for="item in items"
               :key="item.year"
               :year="item.year"
               :posts="item.posts"
    ></postsList>
    <postPage :pagetotal='totalpage'
              :currentpage='page'
              @changepage='changepage'
    ></postPage>
  </div>
</template>

<script>
import loader from '../../loading'
import axios from 'axios'
import postsList from './posts_list'
import postPage from './posts_page'
export default {
  name: 'posts',
  components: {
    loader,
    postsList,
    postPage
  },
  data () {
    return {
      page: 1,
      limit: 10,
      total: 0,
      items: []
    }
  },
  computed: {
    totalpage: function () {
      return Math.ceil(this.total / this.limit)
    }
  },
  methods: {
    changepage: function (page) {
      this.page = page
    }
  },
  created () {
    axios({
      method: 'get',
      url: '/api/blog/posts?Page=' + this.page + '&Limit=' + this.limit,
      timeout: 3000
    }).then(res => {
      var result = res.data.result
      this.total = result.total
      for (var key in result.item) {
        this.items.push(result.item[key])
      }
    })
  },
  watch: {
    page (newval) {
      this.item = []
      axios({
        method: 'get',
        url: '/api/blog/posts?Page=' + this.page + '&Limit=' + this.limit,
        timeout: 3000
      }).then(res => {
        var result = res.data.result
        this.total = result.total
        for (var key in result.item) {
          this.items.push(result.item[key])
        }
      })
    }
  }
}
</script>

<style>

</style>
