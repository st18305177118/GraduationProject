<template>
    <div class="shoppingCart">
      <top-bar></top-bar>
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
      <div class="content">
        <div class="contentInner">
          <div class="cartEmpty">
            <!--<div class="emptyIcon">-->
            <!--</div>-->
            <!--<div class="emptyText">-->
              <!--<span>购物车空空的哦~，去看看心仪的商品吧~</span>-->
              <!--<a href="/">去购物</a>-->
            <!--</div>-->
            <Steps :current="current">
              <Step title="已完成" content="我的购物车"></Step>
              <Step title="进行中" content="填写核对订单信息"></Step>
              <Step title="待进行" content="成功提交订单"></Step>
            </Steps>
            <div v-show="current1">
              <ul style="line-height: 38px;border: 1px solid #e4e4e4;height: 38px;margin-top: 20px">
                <li class="f2" style="margin-left: 20px;width: 200px">图书名称</li>
                <li class="f5" >数量操作</li>
                <li class="f6" >小计（元）</li>
                <li class="f7">操作</li>
              </ul>
              <ul v-for="shop in shops" :key="shop.id" style="line-height: 38px;border: 1px solid #e4e4e4;height: 38px;margin-top: 20px;background: #fffbf0;">
                <li class="f2" style="margin-left: 20px;width: 200px">{{shop.bookName}}</li>
                <li class="f5" >{{shop.bookNumber}}</li>
                <li class="f6" >{{shop.bookPrice}}</li>
                <li class="f7" @click="deleteShop(shop)">删除</li>
              </ul>
              <ul style="line-height: 38px;height:80px;border: 1px solid #e4e4e4;margin-top: 20px;background: #e5e5e5;display: flex;align-items: center">
                <li class="f2" style="margin-left: 20px;width: 200px"></li>
                <li class="f5" ></li>
                <li class="f6" >总额&nbsp;&nbsp;￥{{totalPrice}}</li>
                <li class="f7"><Button type="error" style="font-size: 14px;width: 100px" @click="settleMent">结算</Button></li>
              </ul>
            </div>
            <div style="margin-top: 50px;padding: 0 280px;" v-show="current2">
              <Form :model="formItem"   :label-width="80">
                <FormItem label="收货:" style="width: 340px" >
                  <Input v-model="formItem.name" placeholder="请输入收货人"></Input>
                </FormItem>
                <FormItem label="手机号:" style="width: 340px;" >
                  <Input v-model="formItem.phone" placeholder="请输入手机号"></Input>
                </FormItem>
                <FormItem label="详细地址:" style="width: 340px;" >
                  <Input v-model="formItem.address" placeholder="请输入详细地址"></Input>
                </FormItem>
                <FormItem style="width: 340px;">
                  <Button type="error" class="loginBtn" style="width: 200px" @click="sureInfo">确认信息</Button>
                </FormItem>
              </Form>
            </div>
            <div class="current3" v-show="current3">
              <div class="current3-top">
                <h1>订单已生成！<span class="icon"></span></h1>
              </div>
              <div class="current3-btn" style="text-align: center;margin-top: 100px">
                <Button type="error" class="loginBtn" style="width: 200px;font-size: 16px" :to="{path:'/'}">继续购物</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <foot-nav></foot-nav>
    </div>
</template>

<script>
  import footNav from '../../components/footNav/footBav'
  import topBar from '../../components/topBar/topBar'
  import * as shopCart from '../../request/shoppingCart'
  export default {
    components: {
      footNav,
      topBar
    },
    created () {
      shopCart.getShopCart(this)
    },
    data () {
      return {
        id: '',//根据id删除购物车里某个商品
        totalPrice:  '',//总额
        current: 0,//步骤条
        current1: true,
        current2: false,
        current3: false,
        shops:[],
        formItem:{
          name: '',
          phone: '',
          address: ''
        },
      }
    },
    methods:{
      deleteShop(shop){
        this.id = shop.id
        console.log('删除',this.id)
        shopCart.deleteShop(this)
      },
      /*结算*/
      settleMent () {
        this.current = 1
        this.current1 = false
        this.current2 = true
        this.current3 = false
        shopCart.getUser(this)
      },
      /*确认信息*/
      sureInfo () {
        this.current = 2
        this.current1 = false
        this.current2 = false
        this.current3 = true
      }
    },
    mounted () {
      console.log('计算')
      for(let i=0;i<this.shops.length;i++){
        this.totalPrice = this.totalPrice+this.shops[i].bookPrice
      }
    }
  }
</script>

<style lang="less">
@import "shoppingCart";
</style>
