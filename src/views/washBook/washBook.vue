<template>
    <div class="washBook">
      <!--顶部导航栏-->
      <top-bar></top-bar>
      <!--搜索栏-->
      <search-bar></search-bar>
      <!--类别导航栏-->
      <div class="classBar">
        <div class="w1200">
          <div class="contentBar">
            <ul style="height: 40px;width: 1200px">
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
      <!--三种类别搜索-->
      <div class="pageContent">
        <div class="selector">
          <div class="selectorInner">
            <div class="guide_box">
              <div class="guide_title">
                <strong>图书分类</strong>
              </div>
              <div class="guide_content">
                <ul>
                  <li>全部</li>
                  <li>文学</li>
                  <li>社科</li>
                  <li>童书</li>
                  <li>艺术</li>
                  <li>文教</li>
                  <li>生活</li>
                  <li>科学</li>
                  <li>其他</li>
                </ul>
              </div>
            </div>
            <div class="guide_box">
              <div class="guide_title">
                <strong>关键字</strong>
              </div>
              <div class="guide_content">
                <ul>
                  <li>全部</li>
                  <li>超低价</li>
                  <li>新近出版</li>
                  <li>漫画</li>
                  <li>影印本</li>
                  <li>名家文集</li>
                  <li>中国文库</li>
                  <li>古典名著</li>
                  <li>民俗风物</li>
                  <li>典藏版</li>
                  <li>插画本</li>
                  <li>古诗词</li>
                  <li>高颜值画册</li>
                  <li>民国</li>
                  <li>故宫</li>
                  <li>历史</li>
                  <li>签名本</li>
                  <li>毛边本</li>
                  <li>绝版老书</li>
                  <li>礼品书</li>
                  <li>绘本</li>
                  <li>热销小说</li>
                  <li>科普</li>
                </ul>
              </div>
            </div>
            <div class="guide_box">
              <div class="guide_title">
                <strong>价格</strong>
              </div>
              <div class="guide_content">
                <ul>
                  <li>全部</li>
                  <li>30元以下</li>
                  <li>31-50元</li>
                  <li>50-100元</li>
                  <li>100元以上</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--书列表-->
        <div class="bookList">
          <div class="bookListInner">
            <ul>
              <li>
                <div class="information">
                  <div class="bookCover">
                    <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                  </div>
                  <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                  <div class="price">
                    <span class="salePrice">¥136</span>
                  </div>
                  <div class="otherInfor">
                    <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                  </div>
                  <div class="buyButton">
                    <a>去购买</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="information">
                  <div class="bookCover">
                    <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                  </div>
                  <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                  <div class="price">
                    <span class="salePrice">¥136</span>
                  </div>
                  <div class="otherInfor">
                    <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                  </div>
                  <div class="buyButton">
                    <a>去购买</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="information">
                  <div class="bookCover">
                    <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                  </div>
                  <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                  <div class="price">
                    <span class="salePrice">¥136</span>
                  </div>
                  <div class="otherInfor">
                    <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                  </div>
                  <div class="buyButton">
                    <a>去购买</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="information">
                  <div class="bookCover">
                    <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                  </div>
                  <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                  <div class="price">
                    <span class="salePrice">¥136</span>
                  </div>
                  <div class="otherInfor">
                    <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                  </div>
                  <div class="buyButton">
                    <a>去购买</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="information">
                  <div class="bookCover">
                    <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                  </div>
                  <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                  <div class="price">
                    <span class="salePrice">¥136</span>
                  </div>
                  <div class="otherInfor">
                    <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                  </div>
                  <div class="buyButton">
                    <a>去购买</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="information">
                  <div class="bookCover">
                    <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                  </div>
                  <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                  <div class="price">
                    <span class="salePrice">¥136</span>
                  </div>
                  <div class="otherInfor">
                    <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                  </div>
                  <div class="buyButton">
                    <a>去购买</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="information">
                  <div class="bookCover">
                    <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                  </div>
                  <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                  <div class="price">
                    <span class="salePrice">¥136</span>
                  </div>
                  <div class="otherInfor">
                    <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                  </div>
                  <div class="buyButton">
                    <a>去购买</a>
                  </div>
                </div>
              </li>
              <li>
                <div class="information">
                  <div class="bookCover">
                    <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                  </div>
                  <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                  <div class="price">
                    <span class="salePrice">¥136</span>
                  </div>
                  <div class="otherInfor">
                    <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                  </div>
                  <div class="buyButton">
                    <a>去购买</a>
                  </div>
                </div>
              </li>
              <li>
              <div class="information">
                <div class="bookCover">
                  <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                </div>
                <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                <div class="price">
                  <span class="salePrice">¥136</span>
                </div>
                <div class="otherInfor">
                  <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                </div>
                <div class="buyButton">
                  <a>去购买</a>
                </div>
              </div>
            </li>
              <li>
              <div class="information">
                <div class="bookCover">
                  <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                </div>
                <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                <div class="price">
                  <span class="salePrice">¥136</span>
                </div>
                <div class="otherInfor">
                  <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                </div>
                <div class="buyButton">
                  <a>去购买</a>
                </div>
              </div>
            </li>
              <li>
              <div class="information">
                <div class="bookCover">
                  <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                </div>
                <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                <div class="price">
                  <span class="salePrice">¥136</span>
                </div>
                <div class="otherInfor">
                  <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                </div>
                <div class="buyButton">
                  <a>去购买</a>
                </div>
              </div>
            </li>
              <li>
                <div class="information">
                  <div class="bookCover">
                    <a><img src="http://imgt.bookschina.com/2019/tuangou/10486_20190325075959.jpg" alt="(精)DK视觉大发现(全套12册)"></a>
                  </div>
                  <p class="bookName"><a>风靡世界的少儿科普图书“DK视觉大发现”系列全12册，16开精装，铜版纸全彩图文，上百幅生动精美的高清大图、专业而有趣的科普知识，带领孩子睁大双眼，探索人体的生理奥秘；走近鲸鱼与海豚、鲨鱼、爬行动物、猫科动物和恐龙；领略热带雨林、火山、岩石与矿物的自然之美；了解汽车和飞机的科技发展；追寻古罗马的风土人情。定价396元，现团购价136元，全国包快递！</a></p>
                  <div class="price">
                    <span class="salePrice">¥136</span>
                  </div>
                  <div class="otherInfor">
                    <span class="dingjia">定价：¥396.0</span><span class="zhekou">折扣:3.4折</span>
                  </div>
                  <div class="buyButton">
                    <a>去购买</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <foot-nav style="margin"/>
    </div>
</template>

<script>
import footNav from '../../components/footNav/footBav'
import topBar from '../../components/topBar/topBar'
import searchBar from '../../components/searchBar/searchBar'
export default {
  components: {
    footNav,
    topBar,
    searchBar
  }
}
</script>

<style lang="less">
@import "washBook";
</style>
