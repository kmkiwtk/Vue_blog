<template>
  <nav class="pagination">
    <span v-for="item in pages"
          :key="item">
      <span v-if="currentpage == item" class="page-number current">{{item}}</span>
      <a @click="changepage($event)" v-if="currentpage != item">{{item}}</a>
    </span>
  </nav>
</template>

<script>
export default {
  name: 'postpage',
  props: ['pagetotal', 'currentpage'],
  computed: {
    pages: function () {
      var pages = []
      var pageid = 0
      for (var i = this.pagetotal; i > 0; i--) {
        pageid++
        pages.push(pageid)
      }
      return pages
    }
  },
  methods: {
    changepage: function (e) {
      this.$emit('changepage', e.target.innerHTML)
    }
  }
}
</script>

<style>

</style>
