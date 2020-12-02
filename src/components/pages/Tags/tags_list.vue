<template>
  <router-link :to="{name:'tagposts',params:{name:tag.displayName}}">{{tag.displayName}}<small>{{tag.count}}</small></router-link>
</template>

<script>
export default {
  props: ['tag'],
  created () {
  }
}
</script>

<style>

</style>
