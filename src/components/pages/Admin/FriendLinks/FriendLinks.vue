<template>
<div>
  <loader v-if="!ready"></loader>
  <div class="post-wrap categories" v-if="ready">
    <h2 class="post-title">-&nbsp;FriendLinks&nbsp;-</h2>
    <div class="categories-card">
      <friendlink-list v-for="friendlink in friendlinks"
                     :key="friendlink.id"
                     :friendlink="friendlink"
                     @edit="listshowbox(friendlink)"
                     @del="deletefriendlink"
      ></friendlink-list>
      <div class="card-item">
        <div class="categories">
          <a @click="insertshowbox"><h3>📒~~~ 新增友链 ~~~📒</h3></a>
        </div>
      </div>
    </div>
  </div>
  <box v-show="open"
       :friendlink="boxfriendlink"
       :bottontext='bottontext'
       @Close="closebox"
       @edit="editfriendlink"
       @insert="insertfriendlink"
  ></box>
</div>
</template>

<script>
import axios from 'axios'
import friendlinkList from './friendlink_list.vue'
import box from './Box'
import loader from '../../../loading'
export default {
  components: {
    friendlinkList,
    box,
    loader
  },
  data () {
    return {
      friendlinks: [],
      open: false,
      boxfriendlink: {},
      bottontext: '',
      ready: false
    }
  },
  methods: {
    getData: function () {
      axios({
        method: 'get',
        url: '/api/blog/admin/friendlinks',
        timeout: 3000
      }).then(res => {
        if (res.data.Message === 'UnAuthorized') {
          console.log('删除过期token')
          this.$cookies.remove('token')
          console.log('重新获取token')
          this.$router.push({path: '/'})
        } else {
          this.friendlinks = res.data.result
          console.log('获取数据成功')
          this.ready = true
        }
      })
    },
    listshowbox: function (friendlink) {
      console.log('将friendlink传给box')
      console.log(friendlink)
      this.boxfriendlink = friendlink
      this.bottontext = '修改'
      this.open = true
    },
    insertshowbox: function () {
      console.log('添加新的分类')
      this.boxfriendlink = null
      this.bottontext = '添加'
      this.open = true
    },
    closebox: function () {
      this.open = false
    },
    editfriendlink: function (friendlink) {
      axios({
        method: 'put',
        url: '/api/blog/friendlink',
        params: {
          id: friendlink.id
        },
        data: {
          title: friendlink.title,
          linkUrl: friendlink.linkUrl
        }
      }).then(res => {
        if (res.data.success === true) {
          console.log('编辑成功')
          this.getData()
          this.closebox()
        } else {
          console.log('编辑失败')
          console.log(res)
        }
      })
    },
    insertfriendlink: function (friendlink) {
      this.open = false
      console.log('发起添加请求')
      axios({
        method: 'post',
        url: '/api/blog/friendlink',
        data: {
          title: friendlink.title,
          linkUrl: friendlink.linkUrl
        }
      }).then(res => {
        if (res.data.success === true) {
          console.log('添加成功')
          this.closebox()
        } else {
          console.log('添加失败')
          console.log(res)
        }
        this.getData()
      })
    },
    deletefriendlink: function (id) {
      console.log('发起删除请求')
      axios({
        url: 'api/blog/friendlink?id=' + id,
        method: 'delete'
      }).then(res => {
        if (res.data.success) {
          console.log('删除成功')
          this.getData()
        } else {
          console.log('删除失败')
          console.log(res)
        }
      })
    }
  },
  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$cookies.get('token')
    console.log(this.$cookies.get('token'))
    console.log('开始请求接口数据')
    this.getData()
  }
}
</script>

<style>

</style>
