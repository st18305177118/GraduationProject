<template>
    <div class="login">
      <!--头部-->
      <div class="loginHead">
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
      <div class="content loginWrap">
        <div class="w1000">
          <div class="loginForm">
            <div class="loginTitle">
              <b>用户登录</b>
            </div>
            <div style="margin-top: 50px;padding: 0 280px;">
              <Form :model="formItem"   :label-width="80">
                <FormItem label="用户名:" style="width: 340px;" >
                  <Input v-model="formItem.username" placeholder="请输入用户名"></Input>
                </FormItem>
                <FormItem label="密码:" style="width: 340px;" >
                  <Input v-model="formItem.password" placeholder="请输入密码" type="password"></Input>
                </FormItem>
                <FormItem label="验证码:" style="width: 340px;" >
                  <Input v-model="formItem.code" style="width: 140px"  placeholder="请输入验证码"></Input>
                  <div class="verify-box" style="float: right" @click="refreshCode">
                    <Sidentify :identifyCode="identifyCode"></Sidentify>
                  </div>
                </FormItem>
                <FormItem style="width: 340px;">
                  <Button type="error" class="loginBtn" @click="login">登录</Button>
                  <Button type="error" class="loginBtn" @click="register">注册</Button>
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
  import * as login from '../../request/login'
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
          username: '',
          password: '',
          code: '',
        },
        // rulesFormItem: {
        //   username: [
        //     {require: true,message:'不能为空',trigger: 'blur'}
        //   ],
        //   password: [
        //     {require: true,message:'不能为空',trigger: 'blur'}
        //   ],
        //   code: [
        //     {require: true,message:'不能为空',trigger: 'blur'}
        //   ]
        // }

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
      /*登录*/
      login () {
        console.log("loginsss")
        if(this.formItem.code==this.identifyCode){
          login.login(this)
        }else if(this.formItem.code!=this.identifyCode){
          this.$Message.error("验证码不正确!")
        }
        // register.getAllManager(this)
      },
      /*注册*/
      register () {
        this.$router.push({path: '/register'})
      }
    }
  }
</script>

<style lang="less">
@import "login";
</style>
