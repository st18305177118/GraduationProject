<template>
  <div class="home">
    <!--顶部菜单栏-->
    <div class="topBar">
      <div class="loginArea">
        <b>欢迎光临图书网 请</b>
        <a class="login">登录</a>
        <span>|</span>
        <a>注册</a>
      </div>
      <div class="personalArea">
        <ul>
          <li>购物车</li>
          <li>我的订单</li>
          <li>我的账户</li>
          <li>帮助中心</li>
          <li>手机中图</li>
        </ul>
      </div>
    </div>
    <!--搜索区域-->
    <div class="searchBar">
        <div class="logo">
          <a>
            <img src="http://static.winxuancdn.com/css/v2/images/logo.png"/>
          </a>
        </div>
        <div class="searchArea">
          <Input search enter-button="搜索" placeholder="Enter something..." />
        </div>
        <div class="notice">
          <img style="float:left;max-width: 45px;max-height: 45px" src="@/assets/logo.png"/>
          <vue-seamless-scroll :data="listData" :class-option="optionSingleHeight" class="seamless-warp">
            <ul class="item">
              <li v-for="item in listData" :key="item.id">
                <span class="title" v-text="item.title"></span><span class="date" v-text="item.date"></span>
              </li>
            </ul>
          </vue-seamless-scroll>
        </div>
      </div>
    <!--导航栏-->
    <nav-bar></nav-bar>
    <!--书籍分类和右边轮播图-->
    <div class="classCarousel">
      <div class="class-left">
        <!--书籍分类-->
        <div class="literature">
          <!--文学类-->
          <div style="width: 170px;height: 24px">
            <h3>文学</h3>
            <em style="color:#666666;font-style: normal;font-weight: 400;float: right">></em>
          </div>
          <div style="width:170px;color: #666;line-height: 24px;font-size: 12px;display: flex;
flex-direction: row;flex-wrap: wrap">
            <p>小说</p>
            <p>青春文学</p>
            <p>中国散文</p>
            <p>外国散文</p>
            <p>悬疑推理</p>
            <p>文学理论</p>
            <p>文集</p>
            <p>世界名著</p>
            <Divider type="horizontal" style="background: #FFCCCC" />
          </div>
          <!--社科类-->
          <div style="width: 170px;height: 24px">
            <h3>社科</h3>
            <em style="color:#666666;font-style: normal;font-weight: 400;float: right">></em>
          </div>
          <div style="width:170px;color: #666;line-height: 24px;font-size: 12px;display: flex;
flex-direction: row;flex-wrap: wrap">
            <p>历史</p>
            <p>哲学/宗教</p>
            <p>社会科学</p>
            <p>政治军事</p>
            <p>传记</p>
            <p>文化</p>
            <p>古籍</p>
            <p>管理</p>
            <p>经济</p>
            <p>成功励志</p>
            <p>法律</p>
            <p>语言文字</p>
            <Divider type="horizontal" style="background: #FFCCCC" />
          </div>
          <!--少儿-->
          <div style="width: 170px;height: 24px">
            <h3>少儿</h3>
            <em style="color:#666666;font-style: normal;font-weight: 400;float: right">></em>
          </div>
          <div style="width:170px;color: #666;line-height: 24px;font-size: 12px;display: flex;
flex-direction: row;flex-wrap: wrap">
            <p>中国儿童文学</p>
            <p>外国儿童文学</p>
            <p>科普读物</p>
            <p>绘本</p>
            <p>动漫/卡通</p>
            <p>幼儿启蒙</p>
            <Divider type="horizontal" style="background: #FFCCCC" />
          </div>
          <!--艺术-->
          <div style="width: 170px;height: 24px">
            <h3>艺术</h3>
            <em style="color:#666666;font-style: normal;font-weight: 400;float: right">></em>
          </div>
          <div style="width:170px;color: #666;line-height: 24px;font-size: 12px;display: flex;
flex-direction: row;flex-wrap: wrap">
            <p>绘画</p>
            <p>书法篆刻</p>
            <p>艺术理论</p>
            <p>摄影</p>
            <p>音乐</p>
            <Divider type="horizontal" style="background: #FFCCCC" />
          </div>
          <!--生活-->
          <div style="width: 170px;height: 24px">
            <h3>生活</h3>
            <em style="color:#666666;font-style: normal;font-weight: 400;float: right">></em>
          </div>
          <div style="width:170px;color: #666;line-height: 24px;font-size: 12px;display: flex;
flex-direction: row;flex-wrap: wrap">
            <p>美食</p>
            <p>保健/心里健康</p>
            <p>旅游</p>
            <p>家庭教育</p>
            <p>家居休闲</p>
            <Divider type="horizontal" style="background: #FFCCCC" />
          </div>
          <!--文教-->
          <div style="width: 170px;height: 24px">
            <h3>文教</h3>
            <em style="color:#666666;font-style: normal;font-weight: 400;float: right">></em>
          </div>
          <div style="width:170px;color: #666;line-height: 24px;font-size: 12px;display: flex;
flex-direction: row;flex-wrap: wrap">
            <p>中小学教辅</p>
            <p>外语</p>
            <p>教材</p>
            <p>医学</p>
            <p>计算机</p>
            <p>自然科学</p>
            <Divider type="horizontal" style="background: #FFCCCC" />
          </div>
        </div>
      </div>
      <div class="class-right">
        <!--轮播图-->
        <Carousel v-model="value1" loop>
          <CarouselItem>
            <div class="demo-carousel"><img src="http://image31.bookschina.com/uploadfiles/images/10427_ad990.jpg"/></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img src="http://image31.bookschina.com/pro-images/190318ora/990360.jpg"/></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img src="http://image31.bookschina.com/uploadfiles/images/10426_ad990.jpg"/></div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel"><img src="http://image31.bookschina.com/pro-images/190313zc/990360.jpg"/></div>
          </CarouselItem>
        </Carousel>
        <!--特惠区和畅销榜-->
        <div class="preferential">
          <Tabs type="card">
            <TabPane label="新品特惠">
              <div class="newProduct" style="background: #fff">
                <div class="mainEditor">
                  <!--图片-->
                  <div class="imgIcon" style="position: relative;width: 190px;" >
                    <div class="mainImg">
                      <img style="max-width: 160px;height: 160px" src="http://image31.bookschina.com/2019/zuo/3/s7662091.jpg"/>
                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png"/>
                    </div>
                  </div>
                  <!--标题文字-->
                  <div class="mainText">
                    <h2>宋元戏曲史</h2>
                    <div class="priceWrap">
                      <span class="sellPrice">¥11.2</span>
                      <span class="price">¥25.0</span>
                    </div>
                    <div class="mainFont">
                      <p>王国维先生多年从事戏曲研究的总结性著作，被公认为中国古典戏曲研究的开山之作，使得大大提升了戏曲在文学中的地位，将之从“托体近卑”的俗文学拉升到了文学艺术的范畴。这是中国第一部系统研究戏曲发展史的专著，材料丰富，治学态度严谨，影响深远。此次整理出版以商务印书馆《国学小丛书》本为底本，同时参考上海古籍出版社本，内容更加完善。</p>
                    </div>
                  </div>
                </div>
                <div class="tabBook">
                  <ul>
                    <li>
                      <div class="Img">
                        <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2015/20150402/s6916445.jpg"/>
                      </div>
                      <div class="icon">
                        <img src="http://image31.bookschina.com/pro-images/newtejia/tubiao46.png" alt="新上架特惠下单折上8折">
                      </div>
                      <div class="name">
                        <p>民国广告与民国名人/图文并茂的往事如烟与故纸温暖</p>
                      </div>
                      <div class="priceWrap">
                        <span class="sellPrice">¥12.5</span>
                        <span class="price">¥39.0</span>
                       </div>
                    </li>
                    <li>
                      <div class="Img">
                        <img style="max-height: 158px;max-width: 158px;" src="http://image31.bookschina.com/2019/zuo/3/s7109124.jpg"/>

                      </div>
                      <div class="icon">
                        <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png" alt="新上架特惠下单折上8折">
                      </div>
                      <div class="name">
                        <p>解毒《西游记》的禅文化/出家僧人颇具说服力的解读</p>
                      </div>
                      <div class="priceWrap">
                        <span class="sellPrice">¥15.9</span>
                        <span class="price">¥38.0</span>
                      </div>
                    </li>
                    <li>
                      <div class="Img">
                        <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2013/20131113/s5908013.jpg"/>
                      </div>
                      <div class="icon">
                        <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png" alt="新上架特惠下单折上8折">
                      </div>
                      <div class="name">
                        <p>经济学统治世界/比总统和立法者更能影响社会的祸福</p>
                      </div>
                      <div class="priceWrap">
                        <span class="sellPrice">¥12.2</span>
                        <span class="price">¥38.0</span>
                      </div>
                    </li>
                    <li>
                      <div class="Img">
                        <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2014/20140826/s6643312.jpg"/>
                      </div>
                      <div class="icon">
                        <img src="http://image31.bookschina.com/pro-images/newtejia/tubiao45.png" alt="新上架特惠下单折上8折">
                      </div>
                      <div class="name">
                        <p>中华的另一种可能:魏晋风流/魏晋文化史专家唐翼明著</p>
                      </div>
                      <div class="priceWrap">
                        <span class="sellPrice">¥11.2</span>
                        <span class="price">¥35.0</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </TabPane>
            <TabPane label="本周精选"> <div class="newProduct" style="background: #fff">
              <div class="mainEditor">
                <!--图片-->
                <div class="imgIcon" style="position: relative;width: 190px;" >
                  <div class="mainImg">
                    <img style="max-width: 160px;height: 160px" src="http://image12.bookschina.com/2012/20120429/s5435125.jpg"/>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png"/>
                  </div>
                </div>
                <!--标题文字-->
                <div class="mainText">
                  <h2>爱在蓝色时代</h2>
                  <div class="priceWrap">
                    <span class="sellPrice">¥11.2</span>
                    <span class="price">¥25.0</span>
                  </div>
                  <div class="mainFont">
                    <p>继萨曼·拉什迪后风靡世界文坛的亚裔作家中短篇小说集，作者以描写爱情的体验为主，写出当代人总在摆荡之间的爱情体验和选择。用东方移民的视角观察着西方社会，将人与人的关系与情感刻画得入木三分。这些小说成功地捕捉了当代人的爱情情绪，在细致、诚恳的笔触下，在其对生命多变本质的了解中，绽放出罕见的美感，故事铺陈强而有力，艺术性很高。
                    </p>
                  </div>
                </div>
              </div>
              <div class="tabBook">
                <ul>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2015/20150402/s6916445.jpg"/>
                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/newtejia/tubiao46.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>民国广告与民国名人/图文并茂的往事如烟与故纸温暖</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥12.5</span>
                      <span class="price">¥39.0</span>
                    </div>
                  </li>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image31.bookschina.com/2019/zuo/3/s7109124.jpg"/>

                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>解毒《西游记》的禅文化/出家僧人颇具说服力的解读</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥15.9</span>
                      <span class="price">¥38.0</span>
                    </div>
                  </li>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2013/20131113/s5908013.jpg"/>
                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>经济学统治世界/比总统和立法者更能影响社会的祸福</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥12.2</span>
                      <span class="price">¥38.0</span>
                    </div>
                  </li>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2014/20140826/s6643312.jpg"/>
                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/newtejia/tubiao45.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>中华的另一种可能:魏晋风流/魏晋文化史专家唐翼明著</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥11.2</span>
                      <span class="price">¥35.0</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div></TabPane>
            <TabPane label="新书速递"> <div class="newProduct" style="background: #fff">
              <div class="mainEditor">
                <!--图片-->
                <div class="imgIcon" style="position: relative;width: 190px;" >
                  <div class="mainImg">
                    <img style="max-width: 160px;height: 160px" src="http://image31.bookschina.com/2019/zuo/3/s7662091.jpg"/>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png"/>
                  </div>
                </div>
                <!--标题文字-->
                <div class="mainText">
                  <h2>宋元戏曲史</h2>
                  <div class="priceWrap">
                    <span class="sellPrice">¥11.2</span>
                    <span class="price">¥25.0</span>
                  </div>
                  <div class="mainFont">
                    <p>王国维先生多年从事戏曲研究的总结性著作，被公认为中国古典戏曲研究的开山之作，使得大大提升了戏曲在文学中的地位，将之从“托体近卑”的俗文学拉升到了文学艺术的范畴。这是中国第一部系统研究戏曲发展史的专著，材料丰富，治学态度严谨，影响深远。此次整理出版以商务印书馆《国学小丛书》本为底本，同时参考上海古籍出版社本，内容更加完善。</p>
                  </div>
                </div>
              </div>
              <div class="tabBook">
                <ul>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2015/20150402/s6916445.jpg"/>
                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/newtejia/tubiao46.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>民国广告与民国名人/图文并茂的往事如烟与故纸温暖</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥12.5</span>
                      <span class="price">¥39.0</span>
                    </div>
                  </li>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image31.bookschina.com/2019/zuo/3/s7109124.jpg"/>

                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>解毒《西游记》的禅文化/出家僧人颇具说服力的解读</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥15.9</span>
                      <span class="price">¥38.0</span>
                    </div>
                  </li>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2013/20131113/s5908013.jpg"/>
                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>经济学统治世界/比总统和立法者更能影响社会的祸福</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥12.2</span>
                      <span class="price">¥38.0</span>
                    </div>
                  </li>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2014/20140826/s6643312.jpg"/>
                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/newtejia/tubiao45.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>中华的另一种可能:魏晋风流/魏晋文化史专家唐翼明著</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥11.2</span>
                      <span class="price">¥35.0</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div></TabPane>
            <TabPane label="读者热评"> <div class="newProduct" style="background: #fff">
              <div class="mainEditor">
                <!--图片-->
                <div class="imgIcon" style="position: relative;width: 190px;" >
                  <div class="mainImg">
                    <img style="max-width: 160px;height: 160px" src="http://image31.bookschina.com/2019/zuo/3/s7662091.jpg"/>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png"/>
                  </div>
                </div>
                <!--标题文字-->
                <div class="mainText">
                  <h2>宋元戏曲史</h2>
                  <div class="priceWrap">
                    <span class="sellPrice">¥11.2</span>
                    <span class="price">¥25.0</span>
                  </div>
                  <div class="mainFont">
                    <p>王国维先生多年从事戏曲研究的总结性著作，被公认为中国古典戏曲研究的开山之作，使得大大提升了戏曲在文学中的地位，将之从“托体近卑”的俗文学拉升到了文学艺术的范畴。这是中国第一部系统研究戏曲发展史的专著，材料丰富，治学态度严谨，影响深远。此次整理出版以商务印书馆《国学小丛书》本为底本，同时参考上海古籍出版社本，内容更加完善。</p>
                  </div>
                </div>
              </div>
              <div class="tabBook">
                <ul>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2015/20150402/s6916445.jpg"/>
                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/newtejia/tubiao46.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>民国广告与民国名人/图文并茂的往事如烟与故纸温暖</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥12.5</span>
                      <span class="price">¥39.0</span>
                    </div>
                  </li>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image31.bookschina.com/2019/zuo/3/s7109124.jpg"/>

                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>解毒《西游记》的禅文化/出家僧人颇具说服力的解读</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥15.9</span>
                      <span class="price">¥38.0</span>
                    </div>
                  </li>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2013/20131113/s5908013.jpg"/>
                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/190313zc/tubiao45.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>经济学统治世界/比总统和立法者更能影响社会的祸福</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥12.2</span>
                      <span class="price">¥38.0</span>
                    </div>
                  </li>
                  <li>
                    <div class="Img">
                      <img style="max-height: 158px;max-width: 158px;" src="http://image12.bookschina.com/2014/20140826/s6643312.jpg"/>
                    </div>
                    <div class="icon">
                      <img src="http://image31.bookschina.com/pro-images/newtejia/tubiao45.png" alt="新上架特惠下单折上8折">
                    </div>
                    <div class="name">
                      <p>中华的另一种可能:魏晋风流/魏晋文化史专家唐翼明著</p>
                    </div>
                    <div class="priceWrap">
                      <span class="sellPrice">¥11.2</span>
                      <span class="price">¥35.0</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div></TabPane>
          </Tabs>
        </div>
        <div class="bestSell">
          <div class="hostTitle">
            <h2>图书畅销榜</h2>
            <p>更多&gt;&gt;</p>
          </div>
          <div class="hostType">
            <Tabs value="name1">
              <TabPane label="总榜" name="name1">
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
                  <li >
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
              </TabPane>
              <TabPane label="文学" name="name2">
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
                  <li >
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
              </TabPane>
              <TabPane label="社科" name="name3">
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
                  <li >
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
              </TabPane>
              <TabPane label="少儿" name="name4">
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
                  <li >
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
              </TabPane>
              <TabPane label="艺术" name="name5">
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
                  <li >
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
              </TabPane>
              <TabPane label="文教" name="name6">
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
                  <li >
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
              </TabPane>
              <TabPane label="生活" name="name7">
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
                  <li >
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
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
    <!--专题广告-->
    <div class="advertisement">
      <img src="http://image31.bookschina.com/pro-images/sbanner/sbanner_277.jpg" alt="新品折上折">
      <img src="http://image31.bookschina.com/pro-images/sbanner/sbanner_278.jpg" alt="豆瓣冷门好书">
      <img src="http://image31.bookschina.com/pro-images/sbanner/sbanner_279.jpg" alt="甲老版书">
    </div>
  </div>
</template>

<script>
import navBar from '../../components/navBar/navBar'
export default {
  components: {
    navBar
  },
  data () {
    return {
      value1: 1,
      listData: [{
        'title': '无缝滚动第一行无缝滚动第一行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第二行无缝滚动第二行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第三行无缝滚动第三行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第四行无缝滚动第四行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第五行无缝滚动第五行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第六行无缝滚动第六行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第七行无缝滚动第七行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第八行无缝滚动第八行',
        'date': '2017-12-16'
      }, {
        'title': '无缝滚动第九行无缝滚动第九行',
        'date': '2017-12-16'
      }]
    }
  },
  computed: {
    optionSingleHeight () {
      return {
        singleHeight: 40, // （带停顿的）
        waitTime: 2500, // （停顿时间）
        direction: 0, // （从上往下的）
        // direction: 2, // （左右的）
        step: 1, // （调整速度的）0
        hoverStop: true // (鼠标停留停止 离开继续运行（反之则停止）)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "Home";
</style>
