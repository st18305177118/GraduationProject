<template>
  <div class="searchBook">
    <!--顶部导航栏-->
    <top-bar></top-bar>
    <!--搜索栏-->
    <search-bar></search-bar>
    <!--类别导航栏-->
    <nav-bar></nav-bar>
    <div class="content">
      <div class="w1200">
        <!--&lt;!&ndash;横幅图片&ndash;&gt;-->
        <!--<div class="kindBanner">-->
          <!--<a><img src="http://image31.bookschina.com/pro-images/190327zc/1200100.jpg?id=5"></a>-->
        <!--</div>-->
        <!--&lt;!&ndash;面包屑&ndash;&gt;-->
        <!--<div class="crumbsBar">-->
          <!--<Breadcrumb separator=">">-->
            <!--<BreadcrumbItem to="/">中国图书网</BreadcrumbItem>-->
            <!--<BreadcrumbItem to="/">五星图书</BreadcrumbItem>-->
          <!--</Breadcrumb>-->
        <!--</div>-->
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
          <div class="listRight">
            <div class="bookList">
              <ul>
                <li v-for="book in books" :key="book.id">
                  <div class="cover">
                    <a><img src="http://image31.bookschina.com/2019/zuo/3/s1894903.jpg"/></a>
                  </div>
                  <div class="information">
                    <h2 class="name">
                      <a>{{book.bookName}}</a>
                    </h2>
                    <div class="author">
                      <a>{{book.author}}&nbsp;&nbsp;著</a>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥{{book.price}}</span>
                      <span class="priceTit">定价:</span>
                      <del class="">¥{{book.nowPrice}}</del>
                    </div>
                    <div class="oparateButton">
                      <Button  type="error" icon="ios-cart-outline" @click="addShops(book)">加入购物车</Button>
                      <!--<Button class="collectBtns" @click="collect">收藏</Button>-->
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--底部导航栏-->
    <foot-nav></foot-nav>
  </div>
</template>

<script>
import navBar from '../../components/navBar/navBar'
import footNav from '../../components/footNav/footBav'
import topBar from '../../components/topBar/topBar'
import searchBar from '../../components/searchBar/searchBar'
import * as searchBook from '../../request/search'
export default {
  components: {
    navBar,
    footNav,
    topBar,
    searchBar
  },
  created(){
    searchBook.getSearchLikes(this)
  },
  data () {
    return {
      booksName: this.$route.query.bookName,
      bookName: '',
      bookNumber: 1,
      bookPrice: '',
      books:[
      ]
    }
  },
  methods:{
    addShops(book) {
      console.log('购物车',book.bookName)
      this.bookName = book.bookName
      this.bookPrice = book.price
      searchBook.addShop(this)
    }
  }
}
</script>

<style lang="less">
@import "searchBook";
</style>
