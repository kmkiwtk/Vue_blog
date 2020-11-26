<template>
  <div class="card-item">
    <div class="categories">
      <a target="_blank" :href="friendlink.linkUrl">
        <h3>{{friendlink.title}}</h3>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['friendlink'],
  created () {
  }
}
</script>

<style>

</style>
