<template>
<div class="main">
    <div class="container">
        <div class="intro">
            <div class="avatar">
                <a href="javascript:;"><img src="../assets/avatar.jpg"></a>
            </div>
            <div class="nickname">XiaMi</div>
            <div class="description">
                <p>
                    生命不息，奋斗不止
                    <br>Cease to struggle and you cease to live
                </p>
            </div>
            <div class="links">
                <a class="link-item" title="Posts" href="posts">
                    <i class="iconfont iconread"></i>
                </a>
                <a target="_blank" class="link-item" title="Notes" href="https://notes.meowv.com/">
                    <i class="iconfont iconnotes"></i>
                </a>
                <a target="_blank" class="link-item" title="API" href="https://api.meowv.com/">
                    <i class="iconfont iconapi"></i>
                </a>
                <a class="link-item" title="Manage" :href="url">
                    <i class="iconfont iconcode"></i>
                </a>
                <a target="_blank" class="link-item" title="Github" href="https://github.com/kmkiwtk/">
                    <i class="iconfont icongithub"></i>
                </a>
                <a @mouseover="mouseover" @mouseleave="mouseleave" class="link-item weixin" title="扫码关注微信公众号：『阿星Plus』查看更多。">
                    <i class="iconfont iconweixin"></i>
                </a>
                <div v-show="isshow" class="qrcode">
                    <img src="https://static.meowv.com/images/wx_qrcode.jpg" />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {geturl} from '../api/Auth'
export default {
  name: 'index',
  data () {
    return {
      isshow: false,
      url: ''
    }
  },
  methods: {
    mouseover: function () {
      this.isshow = true
    },
    mouseleave: function () {
      this.isshow = false
    }
  },
  created () {
    geturl().then(res => {
      this.url = res.data.result
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
