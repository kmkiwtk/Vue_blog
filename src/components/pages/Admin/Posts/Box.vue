<template>
<div v-if="ready">
  <div class="shadow"></div>
  <div class="box">
    <div class="close" @click="Close">❌</div>
    <div class="box-content">
      <br/>
      <div class="box-item">
        <b>Category：</b>
        <el-dropdown @command="SelectCategory">
          <span class="el-dropdown-link">
            {{categoryName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="category in categories"
                          :key="category.displayName"
                          :command="category.id">{{category.categoryName}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <br/>
        <b>Tags:</b>
        <el-checkbox-group v-model="mytags">
          <el-checkbox v-for="tag in tagslist"
          :key="tag.id"
          :label="tag.displayName">
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div class="box-item box-item-btn">
        <button class="box-btn" @click="save">{{bottontext}}</button>
        <button class="box-btn btn-primary" @click="Close">取消</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
export default {
  components: {
  },
  props: ['categoryId', 'tags'],
  data () {
    return {
      categories: [],
      tagslist: [],
      bottontext: '',
      Id: 0,
      mytags: [],
      categoryName: 'Category',
      ready: false
    }
  },
  methods: {
    Close: function () {
      this.$emit('Close')
    },
    getcategories: function () {
      console.log('开始获取分类列表')
      axios({
        method: 'get',
        url: '/api/blog/admin/categories'
      }).then(res => {
        if (res.data.success) {
          console.log('分类获取成功')
          this.categories = res.data.result
          console.log(this.categories)
          this.ready = true
        } else {
          console.log('分类获取失败')
          console.log(res.data)
        }
      })
    },
    gettags: function () {
      console.log('开始获取标签列表')
      axios({
        method: 'get',
        url: '/api/blog/admin/tags'
      }).then(res => {
        if (res.data.success) {
          console.log('标签获取成功')
          this.tagslist = res.data.result
          console.log(this.tagslist)
          this.ready = true
        } else {
          console.log('标签获取失败')
          console.log(res.data)
        }
      })
    },
    save: function () {
      this.$emit('save', {
        categoryId: this.Id,
        tags: this.mytags
      })
    },
    getNameById: function (id) {
      console.log('获取分类名字id:' + id)
      if (id > 0) {
        for (var i = 0; i < this.categories.length; i++) {
          if (this.categories[i].id === id) {
            return this.categories[i].categoryName
          }
        }
        return '分类不存在'
      } else {
        console.log('没有ID')
        return 'Category'
      }
    },
    SelectCategory: function (id) {
      console.log('选择分类')
      this.Id = id
      console.log(this.Id)
    }
  },
  created () {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$cookies.get('token')
    console.log('box接收到的数据：')
    console.log('分类id: ' + this.categoryId)
    console.log(this.tags)
    if (this.categoryId > 0) {
      this.bottontext = '修改'
      this.Id = this.categoryId
      this.mytags = this.tags
      console.log('本组件id' + this.Id)
    } else {
      this.bottontext = '添加'
    }
    this.getcategories()
    this.gettags()
  },
  watch: {
    Id (newval) {
      console.log('id变化：' + newval)
      this.categoryName = this.getNameById(newval)
    },
    categories () {
      console.log('分类列表变化')
      this.categoryName = this.getNameById(this.Id)
    }
  }
}
</script>

<style>

</style>
