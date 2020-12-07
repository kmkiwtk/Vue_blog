<template>
<div>
  <div class="shadow"></div>
  <div class="box">
    <div class="close" @click="Close">❌</div>
    <div class="box-content">
      <br/>
      <div class="box-item">
        <b>DisplayName：</b><input type="text" v-model="displayName" />
      </div>
      <div class="box-item">
        <b>TagName：</b><input type="text" v-model="tagName" />
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
  props: ['tag', 'bottontext'],
  data () {
    return {
      id: 0,
      displayName: '',
      tagName: ''
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
          displayName: this.displayName,
          tagName: this.tagName
        })
      } else {
        this.$emit('insert', {
          displayName: this.displayName,
          tagName: this.tagName
        })
      }
    }
  },
  created () {
    console.log('box接收到的数据：')
    console.log(this.tag)
  },
  watch: {
    tag () {
      if (this.tag !== null) {
        this.id = this.tag.id
        this.displayName = this.tag.displayName
        this.tagName = this.tag.tagName
      } else {
        this.id = 0
        this.displayName = ''
        this.tagName = ''
      }
    }
  }
}
</script>

<style>

</style>
