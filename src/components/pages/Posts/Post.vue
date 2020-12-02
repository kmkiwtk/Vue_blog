<template>
  <article class="post-wrap">
    <header class="post-header">
      <h1 class="post-title">{{title}}</h1>
      <div class="post-meta">
        Author: <a itemprop="author" rel="author" >{{author}}</a>
        <span class="post-time">
          Date: <a>{{creationTime}}</a>
        </span>
        <span class="post-category">
          Category:
          <router-link :to="{name:'categoryposts',params:{name:category.displayName}}"
          >{{category.categoryName}}</router-link>
        </span>
      </div>
    </header>
    <div v-html="html" class="post-content" id="content">
      {{html}}
    </div>
    <section class="post-copyright">
      <p class="copyright-item">
        <span>Author:</span>
        <span>{{author}}</span>
      </p>
      <p class="copyright-item">
        <span>Permalink:</span>
        <span><a>https://meowv.com/post@_post.Url</a></span>
      </p>
      <p class="copyright-item">
        <span>License:</span>
        <span>本文采用<a target="_blank" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"> 知识共享 署名-非商业性使用-禁止演绎(CC BY-NC-ND)国际许可协议 </a>进行许可</span>
      </p>
    </section>
    <section class="post-tags">
      <div>
        <span>Tag(s):</span>
        <span class="tag">
          <router-link v-for="tag in tags"
                       :key="tag.displayName"
                       :to="{name:'tagposts',params:{name:tag.displayName}}">
            {{tag.tagName}}
          </router-link>
        </span>
      </div>
      <div>
        <a>back</a>
        <span>· </span>
        <a href="/">home</a>
      </div>
    </section>
    <section class="post-nav">
      <a @click="getdata(previous.url)"
         v-if="previous!=null"
         class="prev"
         rel="prev">
        {{previous.title}}
      </a>
      <a @click="getdata(next.url)"
         v-if="next!=null"
         class="next"
         rel="next">
        {{next.title}}
      </a>
    </section>
  </article>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      author: '',
      category: {},
      creationTime: '',
      html: '',
      markdown: '',
      next: {},
      previous: {},
      tags: [],
      title: '',
      url: ''
    }
  },
  created () {
    var url = this.$route.params.url
    this.getdata(url)
  },
  methods: {
    getdata: function (url) {
      axios({
        method: 'get',
        url: '/api/blog/post?url=' + url,
        timeout: 3000
      }).then(res => {
        var result = res.data.result
        this.author = result.author
        this.category = result.category
        this.creationTime = result.creationTime
        this.html = result.html
        this.markdown = result.markdown
        this.next = result.next
        this.previous = result.previous
        this.tags = result.tags
        this.title = result.title
        this.url = result.url
      })
    }
  }
}
</script>

<style>

</style>
