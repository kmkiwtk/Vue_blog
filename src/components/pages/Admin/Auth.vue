<template>
  <loader></loader>
</template>

<script>
import * as auth from '../../../api/Auth'
import loader from '../../loading'
export default {
  data () {
    return {
      code: 0,
      accesstoken: '',
      token: ''
    }
  },
  components: {
    loader
  },
  methods: {
    getcode: function () {
      console.log('获取code')
      var searchURL = window.location.search
      this.code = searchURL.substring(1, searchURL.length).split('&')[0].split('=')[1]
      console.log('code is ' + this.code)
    },
    getaccesstoken: function () {
      console.log('请求accesstoken')
      auth.getaccesstoken(this.code).then(res => {
        console.log(res)
        this.accesstoken = res.data.result
        console.log('accesstoken is ' + this.accesstoken)
      })
    },
    gettoken: function () {
      console.log('获取token')
      auth.gettoken(this.accesstoken).then(res => {
        console.log(res)
        this.token = res.data.result
        console.log('token is ' + this.token)
      })
    },
    savetoken: function () {
      console.log('保存token')
      this.$cookies.set('token', this.token, '3h')
      console.log('save token success')
      console.log('从cookies中读取token：' + this.$cookies.get('token'))
    }
  },
  created () {
    if (this.$cookies.isKey('token')) {
      this.$router.push({path: '/admin'})
    } else {
      this.getcode()
    }
  },
  watch: {
    code () {
      this.getaccesstoken()
    },
    accesstoken () {
      this.gettoken()
    },
    token () {
      if (this.token == null) {
        alert('你没有被授权！')
        this.$router.push({path: '/'})
      } else {
        this.savetoken()
        this.$router.push({ path: '/admin' })
      }
    }
  }
}
</script>

<style>

</style>
