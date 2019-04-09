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
            <div style="margin-top: 50px;padding: 0 110px;">
              <Form :model="formItem" :label-width="80">
                <FormItem label="用户名:" style="width: 340px;">
                  <Input v-model="formItem.input" placeholder="请输入用户名"></Input>
                </FormItem>
                <FormItem label="密码:" style="width: 340px;">
                  <Input v-model="formItem.input" placeholder="请输入密码"></Input>
                </FormItem>
                <FormItem label="验证码:" style="width: 340px;">
                  <Input v-model="formItem.input" placeholder="请输入验证码"></Input>
                  <div class = "captcha">
                    <input type="text" placeholder="请输入验证码" class="yanzhengma_input" v-model="picLyanzhengma">
                    <input type="button"  @click="createCode"  class="verification" v-model="checkCode"/>
                  </div>
                </FormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    created () {
      this.createCode()
    },
    data () {
      return {
        formItem:{
          input:''
        }
      }
    },
    methods: {
      // 图片验证码
      createCode(){
        //先清空验证码的输入
        this.code = "";
        this.checkCode = "";
        this.picLyanzhengma = "";
        //验证码的长度
        var codeLength = 4;
        //随机数
        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
        for(var i = 0; i < codeLength; i++) {
          //取得随机数的索引（0~35）
          var index = Math.floor(Math.random()*36);
          //根据索引取得随机数加到code上
          this.code += random[index];
        }
        //把code值赋给验证码
        this.checkCode = this.code;
      }
    }
  }
</script>

<style lang="less">
@import "login";
</style>
