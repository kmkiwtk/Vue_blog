<template>
  <div class="card-item">
    <div class="categories">
      <a @click="deletecategory" title="❌删除">❌</a>
      <a  @click="editcategory()" title="📝编辑">📝</a>
      <a target="_blank">
        <h3>{{category.categoryName}}</h3>
        <small>({{category.count}})</small>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['category'],
  methods: {
    deletecategory: function () {
      if (confirm('\n💥💢真的要干掉这个该死的分类吗💢💥')) {
        this.$emit('del', this.category.id)
      } else {
        console.log('放弃删除')
      }
    },
    editcategory: function () {
      this.$emit('edit')
    }
  },
  created () {
  }
}
</script>

<style>

</style>
