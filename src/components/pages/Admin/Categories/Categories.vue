<template>
<div>
  <loader v-if="!ready"></loader>
  <div class="post-wrap categories" v-if="ready">
    <h2 class="post-title">-&nbsp;Categories&nbsp;-</h2>
    <div class="categories-card">
      <category-list v-for="category in categories"
                     :key="category.id"
                     :category="category"
                     @edit="listshowbox(category)"
                     @del="deletecategory"
      ></category-list>
      <div class="card-item">
        <div class="categories">
          <a @click="insertshowbox"><h3>📕~~~ 新增分类 ~~~📕</h3></a>
        </div>
      </div>
    </div>
  </div>
  <box v-show="open"
       :category="boxcategory"
       :bottontext='bottontext'
       @Close="closebox"
       @edit="editcategory"
       @insert="insertcategory"
  ></box>
</div>
</template>

<script>
import axios from 'axios'
import categoryList from './category_list.vue'
import box from './Box'
import loader from '../../../loading'
export default {
  components: {
    categoryList,
    box,
    loader
  },
  data () {
    return {
      categories: [],
      open: false,
      boxcategory: {},
      bottontext: '',
      ready: false
    }
  },
  methods: {
    getData: function () {
      axios({
        method: 'get',
        url: '/api/blog/admin/categories',
        timeout: 3000
      }).then(res => {
        if (res.data.Message === 'UnAuthorized') {
          console.log('删除过期token')
          this.$cookies.remove('token')
          console.log('重新获取token')
          this.$router.push({path: '/'})
        } else {
          this.categories = res.data.result
          console.log('获取数据成功')
          this.ready = true
        }
      })
    },
    listshowbox: function (category) {
      console.log('将category传给box')
      console.log(category)
      this.boxcategory = category
      this.bottontext = '修改'
      this.open = true
    },
    insertshowbox: function () {
      console.log('添加新的分类')
      this.boxcategory = null
      this.bottontext = '添加'
      this.open = true
    },
    closebox: function () {
      this.open = false
    },
    editcategory: function (category) {
      axios({
        method: 'put',
        url: '/api/blog/category',
        params: {
          id: category.id
        },
        data: {
          categoryName: category.categoryName,
          displayName: category.displayName
        }
      }).then(res => {
        if (res.data.success === true) {
          console.log('编辑成功')
          this.getData()
        } else {
          console.log('编辑失败')
          console.log(res)
        }
      })
    },
    insertcategory: function (category) {
      this.open = false
      console.log('发起添加请求')
      axios({
        method: 'post',
        url: '/api/blog/category',
        data: {
          categoryName: category.categoryName,
          displayName: category.displayName
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
    deletecategory: function (id) {
      console.log('发起删除请求')
      axios({
        url: 'api/blog/category',
        method: 'delete',
        params: {
          id: id
        }
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
