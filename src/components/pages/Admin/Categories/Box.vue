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
        <b>CategoryName：</b><input type="text" v-model="categoryName" />
      </div>
      <div class="box-item box-item-btn">
        <button class="box-btn">{{bottontext}}</button>
        <button class="box-btn btn-primary" @click="Close">取消</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['category', 'bottontext'],
  data () {
    return {
      id: 0,
      displayName: '',
      categoryName: ''
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
          categoryName: this.categoryName
        })
      } else {
        this.$emit('insert', {
          displayName: this.displayName,
          categoryName: this.categoryName
        })
      }
    }
  },
  created () {
    console.log('box接收到的数据：')
    console.log(this.category)
  },
  watch: {
    category () {
      if (this.category !== null) {
        this.id = this.category.id
        this.displayName = this.category.displayName
        this.categoryName = this.category.categoryName
      } else {
        this.id = 0
        this.displayName = ''
        this.categoryName = ''
      }
    }
  }
}
</script>

<style>

</style>
