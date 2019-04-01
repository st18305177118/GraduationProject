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
                      <dd>
                        <a>文学</a>
                        <a>小说</a>
                        <a>青春文学</a>
                        <a>动漫/幽默</a>
                      </dd>
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
                      <dd>
                        <a>古籍</a>
                        <a>社会科学</a>
                        <a>历史</a>
                        <a>传记</a>
                        <a>文化</a>
                        <a>经济</a>
                        <a>管理</a>
                        <a>成功/励志</a>
                        <a>哲学/宗教</a>
                        <a>政治军事</a>
                        <a>法律</a>
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <dl class="js_toggledl">
                      <dt>艺术类</dt>
                      <dd>
                        <a>艺术</a>
                        <a>收藏/鉴赏</a>
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <dl class="js_toggledl">
                      <dt>文教类</dt>
                      <dd>
                        <a>外语</a>
                        <a>工具书</a>
                        <a>科普读物</a>
                        <a>体育/运动</a>
                        <a>考试</a>
                        <a>教材</a>
                        <a>中小学辅导</a>
                        <a>教育音像</a>
                        <a>工业技术</a>
                        <a>计算机/网络</a>
                        <a>建筑</a>
                        <a>农业/林业</a>
                        <a>医学</a>
                        <a>自然科学</a>
                        <a>家庭教育</a>
                      </dd>
                    </dl>
                  </li>
                  <li>
                    <dl class="js_toggledl">
                      <dt>生活类</dt>
                      <dd>
                        <a>地图/地理</a>
                        <a>旅游</a>
                        <a>美丽装扮</a>
                        <a>美食</a>
                        <a>两性关系</a>
                        <a>孕产妇/育儿</a>
                        <a>地图/地理</a>
                        <a>家居/休闲游戏</a>
                        <a>个人理财</a>
                        <a>保健/心理健康</a>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </div>
              <div class="hostList">
                <div class="listTitle">
                  <h2>
                    <span>淘书团畅销榜</span>
                  </h2>
                </div>
                <div class="listContent">
                  <ul>
                    <li class="red">
                      <i>01</i>
                      <em>&gt;</em>
                      <p>谈美书简</p>
                    </li>
                    <li class="red">
                      <i>02</i>
                      <em>&gt;</em>
                      <p>地中海史诗三部曲</p>
                    </li>
                    <li class="red">
                      <i>03</i>
                      <em>&gt;</em>
                      <p>不合时宜的阅读者</p>
                    </li>
                    <li>
                      <i>04</i>
                    <em>&gt;</em>
                      <p>鸟:全世界130种鸟的彩色图</p>
                    </li>
                    <li>
                      <i>05</i>
                      <em>&gt;</em>
                      <p>撒马尔罕的金桃-唐代舶来</p>
                    </li>
                    <li>
                      <i>06</i>
                      <em>&gt;</em>
                      <p>未来病史</p>
                    </li>
                    <li>
                      <i>07</i>
                      <em>&gt;</em>
                      <p>历史的慰藉</p>
                    </li>
                    <li>
                      <i>08</i>
                      <em>&gt;</em>
                      <p>无影灯:渡边淳-自选集</p>
                    </li>
                    <li>
                      <i>09</i>
                      <em>&gt;</em>
                      <p>人间词话</p>
                    </li>
                    <li>
                      <i>10</i>
                      <em>&gt;</em>
                      <p>民国往事</p>
                    </li>
                    <li>
                      <i>11</i>
                      <em>&gt;</em>
                      <p>甲午战争十二讲:温情敬意看历史</p>
                    </li>
                    <li>
                      <i>12</i>
                      <em>&gt;</em>
                      <p>采桑小镇</p>
                    </li>
                  </ul>
                </div>
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
