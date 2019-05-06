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
            <div class="emptyIcon">
            </div>
            <div class="emptyText">
              <span>购物车空空的哦~，去看看心仪的商品吧~</span>
              <a href="/">去购物</a>
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
  export default {
    components: {
      footNav,
      topBar
    },
    data () {
      return {

      }
    }
  }
</script>

<style lang="less">
@import "shoppingCart";
</style>
