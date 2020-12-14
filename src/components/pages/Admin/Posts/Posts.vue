<template>
<div>
  <loader v-if="!ready"></loader>
  <div class="post-wrap archive" v-if="ready">
    <a  @click="insertpost"><h3>📝~~~ 新增文章 ~~~📝</h3></a>
    <postsList v-for="item in items"
               :key="item.year"
               :year="item.year"
               :posts="item.posts"
               @del="getdata"
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
import loader from '../../../loading'
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
    getdata: function () {
      axios({
        method: 'get',
        url: '/api/blog/admin/posts?Page=' + this.page + '&Limit=' + this.limit,
        timeout: 3000
      }).then(res => {
        if (res.data.Message === 'UnAuthorized') {
          console.log('删除过期token')
          this.$cookies.remove('token')
          console.log('重新获取token')
          this.$router.push({path: '/'})
        } else {
          var result = res.data.result
          this.total = result.total
          this.items = result.item
          console.log('获取数据成功')
          this.ready = true
        }
      })
    },
    changepage: function (page) {
      this.page = page
    },
    insertpost: function () {
      this.$router.push({
        name: 'insertpost'
      })
    }
  },
  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$cookies.get('token')
    console.log('开始请求接口数据')
    this.getdata()
  },
  watch: {
    page (newval) {
      this.item = []
      axios({
        method: 'get',
        url: '/api/blog/admin/posts',
        timeout: 3000,
        params: {
          Page: this.page,
          Limit: this.limit
        }
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
