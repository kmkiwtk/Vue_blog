<template>
  <div class="container">
      <div class="post-wrap categories">
          <h2 class="post-title">-&nbsp;Categories&nbsp;-</h2>
          <div class="categories-card">
           <categoriesList v-for="category in categories"
                           :key="category.categoryName"
                           :category="category"
           ></categoriesList>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import categoriesList from './categories_list'
export default {
  components: {
    categoriesList
  },
  data () {
    return {
      categories: []
    }
  },
  created () {
    axios({
      method: 'get',
      url: '/api/blog/categories',
      timeout: 3000
    }).then(res => {
      this.categories = res.data.result
    })
  }
}
</script>

<style>

</style>
