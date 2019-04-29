<template>
  <!--顶部菜单栏-->
  <div class="topBars">
    <div class="topBar">
      <div class="loginArea">
        <b>欢迎光临图书网 </b>
        <a class="login" @click="login" v-show="isLogin">登录</a>
        <span v-show="isLogin">|</span>
        <a v-show="isLogin">注册</a>
        <b style="color: #0365b9" v-show="isShows">{{name}}</b>
        <a class="login" @click="loginOut" v-show="isShows">安全退出</a>
      </div>
      <div class="personalArea">
        <ul>
          <li>购物车</li>
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
    // console.log('isLogin',Cookies.get('isShow'))
    // console.log('isShows',Cookies.get('isShows'))
    // this.isLogin = Cookies.get('isLogin')
    // this.isShows = Cookies.get('isShows')
    // console.log('isShows',this.isShows)
  },
  data () {
    return {
      name: Cookies.get('name'),
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
    }
  }
}
</script>

<style lang="less">
@import "topBar";
</style>
