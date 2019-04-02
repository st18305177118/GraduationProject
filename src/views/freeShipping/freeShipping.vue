<template>
    <div class="freeShipping">
      <!--顶部导航栏-->
      <top-bar></top-bar>
      <!--搜索栏-->
      <search-bar></search-bar>
      <!--类别导航栏-->
      <nav-bar></nav-bar>
      <!--包邮内容-->
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
                <div class="specilContent">
                  <div class="specilInner">
                    <h3 class="specilName">
                      <a>庄子的处世哲学-玄妙人生三味</a>
                    </h3>
                    <p class="specilAuthor">
                      作者：杨帆 著述
                    </p>
                    <p class="specilAuthor">
                      出版社：武汉出版社
                    </p>
                    <div class="priceWrap">
                      <div class="sellPrice">
                        ¥<span>9.9</span>
                        <i>包邮</i>
                      </div>
                      <div class="price">
                        <span>定价 ¥14.0</span>
                      </div>
                    </div>
                    <div class="buyButton">
                      <Button class="buyButtons"  type="error" >立即购买</Button>
                    </div>
                  </div>
                </div>
                <div class="specilCover">
                  <a>
                    <img src="http://image12.bookschina.com/2018/20181001/1/s7888783.jpg"/>
                  </a>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
              <div class="bookCover">
                <a>
                  <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
              </div>
              <div class="bookInfor">
                <h3 class="bookName">
                  <a>人生之体验续编</a>
                </h3>
                <div class="authorPublisher">
                  <b class="author">唐君毅 著</b>
                  <b class="publisher">广西师范大学出版社</b>
                </div>
                <div class="priceWrap">
                  <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                  <div class="price"><span>定价  ¥16.8</span></div>
                </div>
                <div class="buyButton">
                  <Button class="buyButtons"  type="error" >立即购买</Button>
                </div>
              </div>
            </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
              <li class="default">
                <div class="bookCover">
                  <a>
                    <img src="http://image31.bookschina.com/2018/zuo/12/s1195254.jpg" class="lazyImg"></a>
                </div>
                <div class="bookInfor">
                  <h3 class="bookName">
                    <a>人生之体验续编</a>
                  </h3>
                  <div class="authorPublisher">
                    <b class="author">唐君毅 著</b>
                    <b class="publisher">广西师范大学出版社</b>
                  </div>
                  <div class="priceWrap">
                    <div class="sellPrice">¥<span>9.9</span><i>包邮</i></div>
                    <div class="price"><span>定价  ¥16.8</span></div>
                  </div>
                  <div class="buyButton">
                    <Button class="buyButtons"  type="error" >立即购买</Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!--推荐-->
          <div class="siteHot">
            <div class="siteHotTitle">
              <h2>本站常销</h2>
            </div>
            <div class="siteHotCon">
              <div class="siteHotPannel">
                <ul>
                  <li>
                    <div class="bookCover">
                      <a>
                        <img src="http://image31.bookschina.com/2018/fm/12/s1262778.jpg"/>
                      </a>
                    </div>
                    <h3 class="bookName">
                      <a>
                        世界性文化图考
                      </a>
                    </h3>
                    <p class="bookAuthor">刘达临 著</p>
                    <div class="priceWrap">
                      <span class="salePrice">￥35.8</span><del class="price">￥39.8</del>
                    </div>
                    <div class="buyButton">
                      <Button class="buyButtons"  type="error" >加入购物车</Button>
                    </div>
                  </li>
                  <li>
                    <div class="bookCover">
                      <a>
                        <img src="http://image31.bookschina.com/2018/fm/12/s1262778.jpg"/>
                      </a>
                    </div>
                    <h3 class="bookName">
                      <a>
                        世界性文化图考
                      </a>
                    </h3>
                    <p class="bookAuthor">刘达临 著</p>
                    <div class="priceWrap">
                      <span class="salePrice">￥35.8</span><del class="price">￥39.8</del>
                    </div>
                    <div class="buyButton">
                      <Button class="buyButtons"  type="error" >加入购物车</Button>
                    </div>
                  </li>
                  <li>
                    <div class="bookCover">
                      <a>
                        <img src="http://image31.bookschina.com/2018/fm/12/s1262778.jpg"/>
                      </a>
                    </div>
                    <h3 class="bookName">
                      <a>
                        世界性文化图考
                      </a>
                    </h3>
                    <p class="bookAuthor">刘达临 著</p>
                    <div class="priceWrap">
                      <span class="salePrice">￥35.8</span><del class="price">￥39.8</del>
                    </div>
                    <div class="buyButton">
                      <Button class="buyButtons"  type="error" >加入购物车</Button>
                    </div>
                  </li>
                  <li>
                    <div class="bookCover">
                      <a>
                        <img src="http://image31.bookschina.com/2018/fm/12/s1262778.jpg"/>
                      </a>
                    </div>
                    <h3 class="bookName">
                      <a>
                        世界性文化图考
                      </a>
                    </h3>
                    <p class="bookAuthor">刘达临 著</p>
                    <div class="priceWrap">
                      <span class="salePrice">￥35.8</span><del class="price">￥39.8</del>
                    </div>
                    <div class="buyButton">
                      <Button class="buyButtons"  type="error" >加入购物车</Button>
                    </div>
                  </li>
                  <li>
                    <div class="bookCover">
                      <a>
                        <img src="http://image31.bookschina.com/2018/fm/12/s1262778.jpg"/>
                      </a>
                    </div>
                    <h3 class="bookName">
                      <a>
                        世界性文化图考
                      </a>
                    </h3>
                    <p class="bookAuthor">刘达临 著</p>
                    <div class="priceWrap">
                      <span class="salePrice">￥35.8</span><del class="price">￥39.8</del>
                    </div>
                    <div class="buyButton">
                      <Button class="buyButtons"  type="error" >加入购物车</Button>
                    </div>
                  </li>
                  <li>
                    <div class="bookCover">
                      <a>
                        <img src="http://image31.bookschina.com/2018/fm/12/s1262778.jpg"/>
                      </a>
                    </div>
                    <h3 class="bookName">
                      <a>
                        世界性文化图考
                      </a>
                    </h3>
                    <p class="bookAuthor">刘达临 著</p>
                    <div class="priceWrap">
                      <span class="salePrice">￥35.8</span><del class="price">￥39.8</del>
                    </div>
                    <div class="buyButton">
                      <Button class="buyButtons"  type="error" >加入购物车</Button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--底部菜单栏-->
      <foot-nav></foot-nav>
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
