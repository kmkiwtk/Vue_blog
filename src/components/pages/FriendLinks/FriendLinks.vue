<template>
<div>
  <loader v-if="!ready"></loader>
  <div class="container" v-if="ready">
        <div class="post-wrap categories">
            <h2 class="post-title">-&nbsp;FriendLinks&nbsp;-</h2>
            <div class="categories-card">
            <friendLinksList v-for="friendlink in friendlinks"
                             :key="friendlink.title"
                             :friendlink="friendlink"
            ></friendLinksList>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import friendLinksList from './friendlinks_list'
import loader from '../../loading'
export default {
  data () {
    return {
      friendlinks: [],
      ready: false
    }
  },
  components: {
    friendLinksList,
    loader
  },
  created () {
    this.getData()
  },
  methods: {
    getData: function () {
      axios({
        method: 'get',
        url: '/api/blog/friendlinks',
        timeout: 3000
      }).then(res => {
        this.friendlinks = res.data.result
        this.ready = true
      })
    }
  }
}
</script>

<style>

</style>
