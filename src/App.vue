<template>
  <div class="wrapper" id="app">
    <myhead></myhead>
    <div class="main">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <myfoot class="footer"></myfoot>
  </div>
</template>

<script>
import myhead from '@/components/myhead'
import myfoot from '@/components/myfoot'
export default {
  name: 'App',
  components: {
    myhead,
    myfoot
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
