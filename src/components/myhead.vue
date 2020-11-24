<template>

<!-- Header.razor -->
<header>
    <nav class="navbar">
        <div class="container">
            <div class="navbar-header header-logo">
                <router-link to='/' class="menu-item" Match="NavLinkMatch.All">
                    😍阿星Plus
                </router-link>
            </div>
            <div class="menu navbar-right">
                <router-link to='/nothing' class="menu-item" >Posts</router-link>
                <router-link to='/nothing' class="menu-item" >Categories</router-link>
                <router-link to='/nothing' class="menu-item" >Tags</router-link>
                <router-link to='/nothing' class="menu-item apps" >Apps</router-link>
                <input id="switch_default" type="checkbox" class="switch_default" v-model="nightmodel"/>
                <label for="switch_default" class="toggleBtn"></label>
            </div>
        </div>
    </nav>
    <nav class="navbar-mobile">
        <div class="container">
            <div class="navbar-header">
                <div>
                    <router-link to='/' class="menu-item" href="" Match="NavLinkMatch.All">😍阿星Plus</router-link>
                    <router-link to='/nothing'>&nbsp;·&nbsp;Light</router-link>
                </div>
                <div @click="menuclick" class="menu-toggle">&#9776; Menu</div>
            </div>
            <div :class='["menu",menudispaly?"active":""]' >
                <router-link to='/nothing' class="menu-item" >Posts</router-link>
                <router-link to='/nothing' class="menu-item" >Categories</router-link>
                <router-link to='/nothing' class="menu-item" >Tags</router-link>
                <router-link to='/nothing' class="menu-item apps" >Apps</router-link>
            </div>
        </div>
    </nav>
</header>
</template>

<script>
export default {
  name: 'myhead',
  data () {
    return {
      menudispaly: false,
      nightmodel: false
    }
  },
  methods: {
    watch: function () {
      console.log(this.nightmodel)
    },
    menuclick: function () {
      this.menudispaly = !this.menudispaly
    }
  },
  watch: {
    nightmodel (newval) {
      if (newval) {
            document.querySelector('body').classList.add('dark-theme');
        } else {
            document.querySelector('body').classList.remove('dark-theme');
        }
    }
  }
}
</script>

<style>

</style>
