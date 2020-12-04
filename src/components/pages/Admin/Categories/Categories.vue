<template>
<div>
  <div class="post-wrap categories">
    <h2 class="post-title">-&nbsp;Categories&nbsp;-</h2>
    <div class="categories-card">
      <category-list v-for="category in categories"
                     :key="category.id"
                     :category="category"
                     @edit="listshowbox(category)"
      ></category-list>
      <div class="card-item">
        <div class="categories">
          <a><h3>📕~~~ 新增分类 ~~~📕</h3></a>
        </div>
      </div>
    </div>
  </div>
  <box v-show="open"
       :category="boxcategory"
       :bottontext='bottontext'
       @Close="closebox"
  ></box>
</div>
</template>

<script>
import axios from 'axios'
import categoryList from './category_list.vue'
import box from './Box'
export default {
  components: { categoryList, box },
  data () {
    return {
      categories: [],
      open: false,
      boxcategory: {},
      bottontext: ''
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
          this.$router.push({path: '/auth'})
        } else {
          this.categories = res.data.result
          console.log('获取数据成功')
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
          this.getData()
        } else {
          console.log('添加失败')
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
