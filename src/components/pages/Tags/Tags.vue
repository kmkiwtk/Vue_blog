<template>
<div>
  <loader v-if="!ready"></loader>
  <div class="container" v-if="ready">
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
</div>
</template>

<script>
import axios from 'axios'
import tagsList from './tags_list'
import loader from '../../loading'
export default {
  data () {
    return {
      tags: [],
      ready: false
    }
  },
  components: {
    tagsList,
    loader
  },
  created () {
    this.getData()
  },
  methods: {
    getData: function () {
      axios({
        method: 'get',
        url: '/api/blog/tags',
        timeout: 3000
      }).then(res => {
        this.tags = res.data.result
        this.ready = true
      })
    }
  }
}
</script>

<style>

</style>
