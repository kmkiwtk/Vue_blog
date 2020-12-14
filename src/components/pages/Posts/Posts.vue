<template>
<div>
  <loader v-if="!ready"></loader>
  <div class="post-wrap archive" v-if="ready">
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
</div>
</template>

<script>
import axios from 'axios'
import postsList from './posts_list'
import postPage from './posts_page'
import loader from '../../loading'
export default {
  name: 'posts',
  components: {
    postsList,
    postPage,
    loader
  },
  data () {
    return {
      page: 1,
      limit: 10,
      total: 0,
      items: [],
      ready: false
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
    },
    getdata: function () {
      axios({
        method: 'get',
        url: '/api/blog/posts?Page=' + this.page + '&Limit=' + this.limit,
        timeout: 3000
      }).then(res => {
        var result = res.data.result
        this.total = result.total
        this.items = result.item
        this.ready = true
      })
    }
  },
  created () {
    this.getdata()
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
