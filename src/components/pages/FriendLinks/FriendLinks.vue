<template>
  <div class="container">
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
</template>

<script>
import axios from 'axios'
import friendLinksList from './friendlinks_list'
export default {
  data () {
    return {
      friendlinks: []
    }
  },
  components: {
    friendLinksList
  },
  created () {
    axios({
      method: 'get',
      url: '/api/blog/friendlinks',
      timeout: 3000
    }).then(res => {
      this.friendlinks = res.data.result
    })
  }
}
</script>

<style>

</style>
