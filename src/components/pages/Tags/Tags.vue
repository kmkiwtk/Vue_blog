<template>
  <div class="container">
    <div class="post-wrap tags">
      <h2 class="post-title">-&nbsp;Tags&nbsp;-</h2>
      <div class="tag-cloud-tags">
        <tagsList v-for="tag in tags"
                :key="tag.tagName"
                :tag="tag"
        ></tagsList>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import tagsList from './tags_list'
export default {
  data () {
    return {
      tags: []
    }
  },
  components: {
    tagsList
  },
  created () {
    axios({
      method: 'get',
      url: '/api/blog/tags',
      timeout: 3000
    }).then(res => {
      this.tags = res.data.result
    })
  }
}
</script>

<style>

</style>
