<template>
  <a>{{tag.displayName}}<small>{{tag.count}}</small></a>
</template>

<script>
export default {
  props: ['tag'],
  created () {
    console.log(this.tag)
  }
}
</script>

<style>

</style>
