<template>
  <div class="post-wrap archive">
      <h3>{{year}}</h3>
      <article v-for="post in posts"
               v-bind:key="post.url"
      class="archive-item">
        <a>{{post.title}}</a>
        <span class="archive-item-date">{{post.creationTime}}</span>
      </article>
  </div>
</template>

<script>
export default {
  name: 'post_list',
  props: ['year', 'posts'],
  created () {
  }
}
</script>

<style>

</style>
