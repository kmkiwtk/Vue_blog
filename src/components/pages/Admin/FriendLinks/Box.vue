<template>
<div>
  <div class="shadow"></div>
  <div class="box">
    <div class="close" @click="Close">❌</div>
    <div class="box-content">
      <br/>
      <div class="box-item">
        <b>Title：</b><input type="text" v-model="title" />
      </div>
      <div class="box-item">
        <b>LinkUrl：</b><input type="text" v-model="linkUrl" />
      </div>
      <div class="box-item box-item-btn">
        <button class="box-btn" @click="Confirm">{{bottontext}}</button>
        <button class="box-btn btn-primary" @click="Close">取消</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['friendlink', 'bottontext'],
  data () {
    return {
      id: 0,
      title: '',
      linkUrl: ''
    }
  },
  methods: {
    Close: function () {
      this.$emit('Close')
    },
    Confirm: function () {
      if (this.bottontext === '修改') {
        this.$emit('edit', {
          id: this.id,
          title: this.title,
          linkUrl: this.linkUrl
        })
      } else {
        this.$emit('insert', {
          title: this.title,
          linkUrl: this.linkUrl
        })
      }
    }
  },
  created () {
    console.log('box接收到的数据：')
    console.log(this.friendlink)
  },
  watch: {
    friendlink () {
      if (this.friendlink !== null) {
        this.id = this.friendlink.id
        this.title = this.friendlink.title
        this.linkUrl = this.friendlink.linkUrl
      } else {
        this.id = 0
        this.linkUrl = ''
        this.linkUrl = ''
      }
    }
  }
}
</script>

<style>

</style>
