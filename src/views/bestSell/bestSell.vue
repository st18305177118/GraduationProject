<template>
    <div class="bestSell">
      <!--顶部导航栏-->
      <top-bar></top-bar>
      <!--搜索栏-->
      <search-bar></search-bar>
      <!--类别导航栏-->
      <nav-bar></nav-bar>
      <div class="content">
        <div class="w1200">
          <!--横幅图片-->
          <div class="kindBanner">
            <a><img src="http://image31.bookschina.com/pro-images/190327zc/1200100.jpg?id=5"></a>
          </div>
          <!--面包屑-->
          <div class="crumbsBar">
            <Breadcrumb separator=">">
              <BreadcrumbItem to="/">中国图书网</BreadcrumbItem>
              <BreadcrumbItem to="/">畅销榜</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div class="container">
            <div class="listLeft">
              <div class="bookListInner">
                <h1>图书畅销榜</h1>
                <ul>
                  <li>
                    <dl>
                      <dt class="cur">
                        <a>总榜</a>
                      </dt>
                    </dl>
                  </li>
                  <li>
                    <dl class="js_toggledl">
                      <dt>文学类</dt>
                    </dl>
                  </li>
                  <li>
                    <dl class="js_toggledl">
                      <dt>少儿类</dt>
                    </dl>
                  </li>
                  <li>
                    <dl class="js_toggledl">
                      <dt>社科类</dt>
                    </dl>
                  </li>
                  <li>
                    <dl class="js_toggledl">
                      <dt>艺术类</dt>
                    </dl>
                  </li>
                  <li>
                    <dl class="js_toggledl">
                      <dt>文教类</dt>
                    </dl>
                  </li>
                  <li>
                    <dl class="js_toggledl">
                      <dt>生活类</dt>
                    </dl>
                  </li>
                </ul>
              </div>
            </div>
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
@import "bestSell";
</style>
