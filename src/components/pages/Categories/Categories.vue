<template>
<div>
  <loader v-if="!ready"></loader>
  <div class="container" v-if="ready">
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
</div>
</template>

<script>
import * as Service from '../../../api/Service'
import categoriesList from './categories_list'
import loader from '../../loading.vue'
export default {
  components: {
    categoriesList,
    loader
  },
  data () {
    return {
      categories: [],
      ready: false
    }
  },
  created () {
    Service.GetCategories().then(res => {
      this.categories = res.data.result
      this.ready = true
    })
  }
}
</script>

<style>

</style>
