<template>
  <div class="card-item">
    <div class="categories">
      <a @click="deletetag" title="❌删除">❌</a>
      <a  @click="edittag()" title="📝编辑">📝</a>
      <a target="_blank">
        <h3>{{tag.tagName}}</h3>
        <small>({{tag.count}})</small>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tag'],
  created () {
    console.log('box获得的数据')
    console.log(this.tag)
  },
  methods: {
    deletetag: function () {
      if (confirm('\n💥💢真的要干掉这个该死的标签吗💢💥')) {
        this.$emit('del', this.tag.id)
      } else {
        console.log('放弃删除')
      }
    },
    edittag: function () {
      this.$emit('edit')
    }
  }
}
</script>

<style>

</style>
