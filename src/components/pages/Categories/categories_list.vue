<template>
    <div class="card-item">
      <div class="categories">
        <a>
          <h3>
            <i class="iconfont iconcode" style="padding-right:3px"></i>
            <router-link :to="{name:'categoryposts',params:{name:category.displayName}}">{{category.displayName}}</router-link>
          </h3>
          <small>{{category.count}}</small>
        </a>
      </div>
    </div>
</template>

<script>
export default {
  props: ['category'],
  created () {
  }
}
</script>

<style>

</style>
