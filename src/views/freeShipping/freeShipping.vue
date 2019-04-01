<template>
    <div class="freeShipping">
      <!--顶部导航栏-->
      <top-bar></top-bar>
      <!--搜索栏-->
      <search-bar></search-bar>
      <!--类别导航栏-->
      <nav-bar></nav-bar>
      <div class="content">
        <div class="w1200">
          <!-- 面包屑-->
          <div class="crumbsBar">
            <Breadcrumb separator=">">
              <BreadcrumbItem to="/">中国图书网</BreadcrumbItem>
              <BreadcrumbItem to="/">包邮图书</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <!--主要内容-->
          <div class="freeShipFloor">
            <ul>
              <li class="specil">
                <div class="specilTitle">
                  <div class="titleInner">
                    <Icon type="ios-thumbs-up-outline" />
                    今日主打
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
  import navBar from '../../components/navBar/navBar'
  import footNav from '../../components/footNav/footBav'
  import topBar from '../../components/topBar/topBar'
  import searchBar from '../../components/searchBar/searchBar'
  export default {
    components: {
      navBar,
      footNav,
      topBar,
      searchBar
    }
  }
</script>

<style lang="less">
@import "freeShipping";
</style>
