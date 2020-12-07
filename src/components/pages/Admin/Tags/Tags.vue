<template>
  <div>
  <div class="post-wrap tags">
    <h2 class="post-title">-&nbsp;Tags&nbsp;-</h2>
    <div class="categories-card">
      <tag-list v-for="tag in tags"
                     :key="tag.id"
                     :tag="tag"
                     @edit="listshowbox(tag)"
                     @del="deletetag"
      ></tag-list>
      <div class="card-item">
        <div class="categories">
          <a @click="insertshowbox"><h3>📘~~~ 新增标签 ~~~📘</h3></a>
        </div>
      </div>
    </div>
  </div>
  <box v-show="open"
       :tag="boxtag"
       :bottontext='bottontext'
       @Close="closebox"
       @edit="edittag"
       @insert="inserttag"
  ></box>
</div>
</template>

<script>
import axios from 'axios'
import tagList from './tag_list.vue'
import box from './Box'
export default {
  components: { tagList, box },
  data () {
    return {
      tags: [],
      open: false,
      boxtag: {},
      bottontext: ''
    }
  },
  methods: {
    getData: function () {
      axios({
        method: 'get',
        url: '/api/blog/admin/tags',
        timeout: 3000
      }).then(res => {
        if (res.data.Message === 'UnAuthorized') {
          console.log('删除过期token')
          this.$cookies.remove('token')
          console.log('重新获取token')
          this.$router.push({path: '/'})
        } else {
          this.tags = res.data.result
          console.log('获取数据成功')
        }
      })
    },
    listshowbox: function (tag) {
      console.log('将tag传给box')
      console.log(tag)
      this.boxtag = tag
      this.bottontext = '修改'
      this.open = true
    },
    insertshowbox: function () {
      console.log('添加新的分类')
      this.boxtag = null
      this.bottontext = '添加'
      this.open = true
    },
    closebox: function () {
      this.open = false
    },
    edittag: function (tag) {
      axios({
        method: 'put',
        url: '/api/blog/tag',
        params: {
          id: tag.id
        },
        data: {
          tagName: tag.tagName,
          displayName: tag.displayName
        }
      }).then(res => {
        if (res.data.success === true) {
          console.log('编辑成功')
          this.getData()
          this.closebox()
        } else {
          console.log('编辑失败')
          console.log(res)
          alert('编辑失败')
          this.closebox()
        }
      })
    },
    inserttag: function (tag) {
      this.open = false
      console.log('发起添加请求')
      axios({
        method: 'post',
        url: '/api/blog/tag',
        data: {
          tagName: tag.tagName,
          displayName: tag.displayName
        }
      }).then(res => {
        if (res.data.success === true) {
          console.log('添加成功')
        } else {
          console.log('添加失败')
          console.log(res)
        }
        this.getData()
      })
    },
    deletetag: function (id) {
      console.log('发起删除请求')
      axios({
        url: 'api/blog/tag?id=' + id,
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
