<template>
<div>
  <loader v-if="!ready"></loader>
  <div class="container" v-if="ready">
      <div class="post-wrap categories">
          <h2 class="post-title">-&nbsp;Category&nbsp;·&nbsp;{{this.$route.params.name}}&nbsp;-</h2>
      </div>
      <postsList v-for="item in items"
                 :key="item.year"
                 :year="item.year"
                 :posts="item.posts"
      ></postsList>
  </div>
</div>
</template>

<script>
import * as Service from '../../../api/Service'
import postsList from '../Posts/posts_list'
import loader from '../../loading'
export default {
  data () {
    return {
      items: [],
      ready: false
    }
  },
  components: {
    postsList,
    loader
  },
  created () {
    this.getData()
  },
  methods: {
    getData: function () {
      Service.GetPostsByCategoryName(this.$route.params.name).then(res => {
        var result = res.data.result
        this.items = result
        this.ready = true
      })
    }
  }
}
</script>

<style>

</style>
