<template>
<div>
  <loader v-if="!ready"></loader>
  <div class="post-box" id="editor" v-if="ready">
    <div class="post-box-item">
      <input type="text" v-model="title" placeholder="标题" autocomplete="off" />
      <input type="text" v-model="author" placeholder="作者" autocomplete="off" />
    </div>
    <div class="post-box-item">
      <input type="text" v-model="url" placeholder="URL" autocomplete="off" readonly/>
      <input type="text" v-model="creationTime" placeholder="时间" autocomplete="off" readonly/>
    </div>
    <mavon-editor class="" style="height:100%;z-index:auto;opacity:1" v-model="markdown"
                                       @change="change"
                                       @save="openbox">
    </mavon-editor>
    <box v-if="open"
       :tags="tags"
       :categoryId='categoryId'
       @Close="closebox"
       @save="save"
    ></box>
  </div>
</div>
</template>

<script>
import * as Admin from '../../../../api/Admin'
import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import moment from 'moment'
import box from './Box'
import loader from '../../../loading'
export default {
  components: {
    mavonEditor,
    box,
    loader
  },
  data () {
    return {
      author: '',
      categoryId: -1,
      creationTime: '',
      html: '',
      markdown: '',
      tags: [],
      title: '',
      url: '',
      open: false,
      ready: false
    }
  },
  watch: {
    title (newval) {
      this.url = newval
    }
  },
  created () {
    console.log('开始请求接口数据')
    var id = this.$route.params.id
    if (id) {
      this.getdata(id)
    } else {
      this.author = 'xiami'
      this.createTime()
      this.ready = true
    }
  },
  methods: {
    getdata: function (id) {
      Admin.GetPostById(id).then(res => {
        if (res.data.success) {
          var result = res.data.result
          this.author = result.author
          this.categoryId = result.categoryId
          this.creationTime = result.creationTime
          this.html = result.html
          this.markdown = result.markdown
          this.tags = result.tags
          this.title = result.title
          this.url = result.url
          console.log(this.categoryId)
          console.log(this.tags)
          this.ready = true
        } else {
          console.log(res.data.Message)
          this.$router.push({path: '/'})
        }
      })
    },
    change: function (value, render) {
      this.html = render
    },
    createTime: function () {
      this.creationTime = moment().format()
      console.log(moment().format())
    },
    save: function (data) {
      this.open = false
      console.log('开始保存')
      var id = this.$route.params.id
      if (id) {
        var Editdata = {
          title: this.title,
          author: this.author,
          url: this.url,
          html: this.html,
          markdown: this.markdown,
          categoryId: data.categoryId,
          creationTime: this.creationTime,
          tags: data.tags
        }
        Admin.EditPost(id, Editdata).then(res => {
          if (res.data.success) {
            console.log('更新成功')
            this.getdata(this.$route.params.id)
          } else {
            console.log('更新失败')
            console.log(res.data.message)
          }
        })
      } else {
        var insertdata = {
          title: this.title,
          author: this.author,
          url: this.url,
          html: this.html,
          markdown: this.markdown,
          categoryId: data.categoryId,
          creationTime: this.creationTime,
          tags: data.tags
        }
        Admin.InsertPost(id, insertdata).then(res => {
          if (res.data.success) {
            alert('添加成功')
          } else {
            alert('添加失败')
            console.log(res)
          }
        })
      }
    },
    closebox: function () {
      this.open = false
    },
    openbox: function () {
      this.open = true
    },
    titletourl: function (e) {
      this.title = e.target.value
    }
  }
}
</script>

<style>
#editor {
  margin: auto;
  width: 80%;
  height: 540px;
}
</style>
