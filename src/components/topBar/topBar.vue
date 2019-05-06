<template>
  <!--顶部菜单栏-->
  <div class="topBars">
    <div class="topBar">
      <div class="loginArea">
        <b>欢迎光临图书网 </b>
        <a class="login" @click="login" v-show="isLogin">登录</a>
        <span v-show="isLogin">|</span>
        <a v-show="isLogin" @click="register">注册</a>
        <b style="color: #0365b9" v-show="isShows">{{name}}</b>
        <a class="loginOut" style="color: #e60000;" @click="loginOut" v-show="isShows">[安全退出]</a>
      </div>
      <div class="personalArea">
        <ul>
          <li><router-link style="color: #666666" :to="{path: '/shoppingCart'}">购物车</router-link></li>
          <li>我的订单</li>
          <li>我的账户</li>
          <li>帮助中心</li>
          <li>手机中图</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Cookies from 'js-cookie'
export default {
  created () {
    if (Cookies && Cookies.get('userName')) {
      this.isLogin = false
      this.isShows = true
      this.name = Cookies.get('userName')
    }
    console.log('userName', Cookies.get('userName'))
  },
  data () {
    return {
      name: '',
      isLogin: true,
      isShows: false
    }
  },

  methods: {
    login(){
      this.$router.push({path: '/login'})
    },
    loginOut(){
      this.$router.push({path: '/'})
      this.isLogin = true
      this.isShows = false
    },
    register() {
      this.$router.push({path: '/register'})
    }
  }
}
</script>

<style lang="less">
@import "topBar";
</style>
