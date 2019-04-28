<template>
  <!--顶部菜单栏-->
  <div class="topBars">
    <div class="topBar">
      <div class="loginArea">
        <b>欢迎光临图书网 </b>
        <a class="login" @click="login" v-show="isShow">登录</a>
        <span v-show="isShow">|</span>
        <a v-show="isShow">注册</a>
        <!--<span>{{name}}</span>-->
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
    this.isShow == Cookies.get('isShow'),
    this.isShows == Cookies.get('isShows'),
    this.name = Cookies.get('name')
    console.log('isShow',Cookies.get('isShow'))
  },
  data () {
    return {
      name: '',
      isShow: true,
      isShows: false
    }
  },
  methods: {
    login(){
      this.$router.push({path: '/login'})
    },
    loginOut(){
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style lang="less">
@import "topBar";
</style>
