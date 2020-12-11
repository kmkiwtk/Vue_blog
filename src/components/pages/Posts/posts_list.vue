<template>
  <div class="post-wrap archive">
      <h3>{{year}}</h3>
      <article v-for="post in posts"
               v-bind:key="post.url"
      class="archive-item">
        <a @click="jumptourl(post.creationTime,post.title)">{{post.title}}</a>
        <span class="archive-item-date">{{post.creationTime}}</span>
      </article>
  </div>
</template>

<script>
export default {
  name: 'post_list',
  props: ['year', 'posts'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    jumptourl: function (time, name) {
      var patt = /[\s|,]/
      time = time.split(patt, 2)
      var url = '/' + this.year + '/' + this.changetonumber(time[0]) + '/' + time[1] + '/' + name + '/'
      this.$router.push({
        name: 'post',
        params: { url: url }
      })
    },
    changetonumber: function (month) {
      var t = 0
      if (month === 'January') {
        t = 1
      } else if (month === 'February') {
        t = 2
      } else if (month === 'March') {
        t = 3
      } else if (month === 'April') {
        t = 4
      } else if (month === 'May') {
        t = 5
      } else if (month === 'June') {
        t = 6
      } else if (month === 'July') {
        t = 7
      } else if (month === 'August') {
        t = 8
      } else if (month === 'September') {
        t = 9
      } else if (month === 'October') {
        t = 10
      } else if (month === 'November') {
        t = 11
      } else if (month === 'December') {
        t = 12
      } else {
        return false
      }
      return t
    }
  }
}
</script>

<style>

</style>
