<template>
    <div class="index">
      <div class="navBars">
        <div class="navBar">
          <div class="nav-left">
            <h2>图书分类</h2>
          </div>
          <div class="nav-right">
            <ul style="height: 40px">
              <li><router-link :to="{path: '/'}">首页</router-link></li>
              <li><router-link :to="{path: '/washBook'}">淘书团</router-link></li>
              <li><router-link :to="{path: '/bestSell'}">畅销榜</router-link></li>
              <li>五星书</li>
              <li>新上架</li>
              <li>9块9包邮</li>
              <li>出版社浏览</li>
              <li>闲情雅趣</li>
              <li>批发</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="less">
@import "navBar";
</style>
