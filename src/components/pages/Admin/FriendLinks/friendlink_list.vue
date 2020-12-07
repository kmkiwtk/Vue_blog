<template>
  <div class="card-item">
    <div class="categories">
      <a @click="deletefriendlink" title="❌删除">❌</a>
      <a  @click="editfriendlink()" title="📝编辑">📝</a>
      <a target="_blank">
        <h3>{{friendlink.title}}</h3>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['friendlink'],
  methods: {
    deletefriendlink: function () {
      if (confirm('\n💥💢真的要干掉这个该死的友链吗💢💥')) {
        this.$emit('del', this.friendlink.id)
      } else {
        console.log('放弃删除')
      }
    },
    editfriendlink: function () {
      this.$emit('edit')
    }
  },
  created () {
  }
}
</script>

<style>

</style>
