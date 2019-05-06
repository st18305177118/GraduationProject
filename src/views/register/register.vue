<template>
  <div class="register">
    <!--头部-->
    <div class="registerHead">
      <div class="logoBar">
        <div class="logoBarInner">
          <div class="logo fl">
            <h1>
              <a href="\" title="中国图书网">
                <img src="http://www.bookschina.com/shopcar/images/logo5.jpg" alt="中国图书网">
              </a>
            </h1>
          </div>
          <div class="ad fr">
            <span class="zhengbang">正版好图书</span><span class="liujiu">全场满69包邮</span><span class="yizhe">特价书一折起</span>
          </div>
        </div>
      </div>
    </div>
    <!--登录-->
    <div class="content registerWrap">
      <div class="w1000">
        <div class="registerForm">
          <div class="registerTitle">
            <b>用户登录</b>
            <div class="backLogin">已有账号？
              <a href="/login">请登录</a>
            </div>
          </div>
          <div style="margin-top: 50px;padding: 0 280px;">
            <Form :model="formItem" :label-width="100">
              <FormItem label="用户名:" style="width: 340px;">
                <Input v-model="formItem.username" placeholder="请输入用户名"></Input>
              </FormItem>
              <FormItem label="密码:" style="width: 340px;">
                <Input v-model="formItem.password" placeholder="请输入密码" type="password"></Input>
              </FormItem>
              <FormItem label="确认密码:" style="width: 340px;">
                <Input v-model="formItem.passwordTrue" placeholder="请再次输入密码" type="password"></Input>
              </FormItem>
              <FormItem label="验证码:" style="width: 340px;">
                <Input v-model="formItem.code" style="width: 120px"  placeholder="请输入验证码"></Input>
                <div class="verify-box" style="float: right" @click="refreshCode">
                  <Sidentify :identifyCode="identifyCode"></Sidentify>
                </div>
              </FormItem>
              <FormItem style="width: 340px;">
                <Button type="error" class="registerBtn" @click="register">注册</Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <!--底部-->
    <foot-bar></foot-bar>
  </div>
</template>

<script>
  import Sidentify from '../../components/identify/identify'
  import footBar from '../../components/footNav/footBav'
  import * as register from '../../request/register'
  export default {
    components: {
      Sidentify,
      footBar
    },
    data () {
      return {
        identifyCodes: '1234567890',
        identifyCode: '',
        formItem:{
          code:'',
          username: '',
          password: '',
          passwordTrue: ''
        }
      }
    },
    mounted () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes,4)
    },
    methods: {
      randomNum(min, max){
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = '';
        this.makeCode(this.identifyCodes, 4);
        console.log('当前验证码==',this.identifyCodes);
      },
      makeCode (o,l) {
        for (let i = 0; i< l; i++) {
          this.identifyCode += this.identifyCodes[
            this.randomNum(0, this.identifyCodes.length)
            ];
        }
        console.log('identifyCode',this.identifyCode)
      },
      /*注册*/
      register () {
        if(this.formItem.code==this.identifyCode && this.formItem.password == this.formItem.passwordTrue){
          register.registerUser(this)
          this.formItem = {}
        }else if(this.formItem.code!=this.identifyCode){
          this.$Message.error("验证码不正确!")
        }else if(this.formItem.passwordTrue != this.formItem.password){
          this.$Message.error('两次密码不一致')
        }
      }
    }
  }
</script>

<style lang="less">
  @import "register";
</style>
