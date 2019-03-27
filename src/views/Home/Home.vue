<template>
  <div class="home">
    <!--顶部菜单栏-->
    <top-bar></top-bar>
    <!--搜索区域-->
    <search-bar></search-bar>
    <!--导航栏-->
    <nav-bar></nav-bar>
    <!--书籍分类和右边轮播图-->
    <div class="classCarousels">
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
    </div>
    <!--专题广告-->
    <div class="advertisements">
      <div class="advertisement">
        <img src="http://image31.bookschina.com/pro-images/sbanner/sbanner_277.jpg">
        <img src="http://image31.bookschina.com/pro-images/sbanner/sbanner_278.jpg">
        <img src="http://image31.bookschina.com/pro-images/sbanner/sbanner_279.jpg">
      </div>
    </div>
    <!--淘书团热销-->
    <div class="taoShu">
      <div class="taoShuHotSellers">
        <div class="taoShuHotSeller">
          <h2>
            <a>淘书团热销></a>
            <span>全场包邮，低至一折，每天上线</span>
          </h2>
          <a>查看更多商品>></a>
        </div>
        <div class="bookType">
          <ul>
            <li>
              <div class="bookCover">
                <img src="http://imgt.bookschina.com/2019/tuangou/10439_20190319093846.jpg">
              </div>
              <div class="bookName">
                <a href="http://tuan.bookschina.com/tuan/10439" title="“语文新课标必读丛书”11种，人民教育出版和业界优秀出版社联手打造，荟萃11种经典好书，既有《庄子选译》《西厢记》等古典名著，亦有《呐喊》《家》《少年天子》等近现代名家名作，还有外文译作《中国的创造精神》，以及《中国童话故事精选》《中外历史故事精选》等精选集。每册书前配有详细的导读、作家介绍、创作背景等文学知识，可更加有效地帮助广大读者领略全书风貌、理解内容思想，培养良好的阅读习惯和审美情趣。定价" target="_blank">“语文新课标必读丛书”11种，人民教育出版和业界优秀出版社联手打造，荟萃11种经典好书，既有《庄子选译》《西厢记》等古典名著，亦有《呐喊》《家》《少年天子》等近现代名家名作，还有外文译作《中国的创造精神》，以及《中国童话故事精选》《中外历史故事精选》等精选集。每册书前配有详细的导读、作家介绍、创作背景等文学知识，可更加有效地帮助广大读者领略全书风貌、理解内容思想，培养良好的阅读习惯和审美情趣。定价
                </a>
              </div>
              <div class="priceWrap">
              <span class="salePrice">
                <b>团购价:</b>
                <i>¥</i>29.9</span>
                <del class="price">¥120.9</del>
                <span class="discount">2.5折
              </span>
              </div>
            </li>
            <li>
              <div class="bookCover">
                <img src="http://imgt.bookschina.com/2019/tuangou/10439_20190319093846.jpg">
              </div>
              <div class="bookName">
                <a href="http://tuan.bookschina.com/tuan/10439" title="“语文新课标必读丛书”11种，人民教育出版和业界优秀出版社联手打造，荟萃11种经典好书，既有《庄子选译》《西厢记》等古典名著，亦有《呐喊》《家》《少年天子》等近现代名家名作，还有外文译作《中国的创造精神》，以及《中国童话故事精选》《中外历史故事精选》等精选集。每册书前配有详细的导读、作家介绍、创作背景等文学知识，可更加有效地帮助广大读者领略全书风貌、理解内容思想，培养良好的阅读习惯和审美情趣。定价" target="_blank">“语文新课标必读丛书”11种，人民教育出版和业界优秀出版社联手打造，荟萃11种经典好书，既有《庄子选译》《西厢记》等古典名著，亦有《呐喊》《家》《少年天子》等近现代名家名作，还有外文译作《中国的创造精神》，以及《中国童话故事精选》《中外历史故事精选》等精选集。每册书前配有详细的导读、作家介绍、创作背景等文学知识，可更加有效地帮助广大读者领略全书风貌、理解内容思想，培养良好的阅读习惯和审美情趣。定价
                </a>
              </div>
              <div class="priceWrap">
              <span class="salePrice">
                <b>团购价:</b>
                <i>¥</i>29.9</span>
                <del class="price">¥120.9</del>
                <span class="discount">2.5折
              </span>
              </div>
            </li>
            <li>
              <div class="bookCover">
                <img src="http://imgt.bookschina.com/2019/tuangou/10439_20190319093846.jpg">
              </div>
              <div class="bookName">
                <a href="http://tuan.bookschina.com/tuan/10439" title="“语文新课标必读丛书”11种，人民教育出版和业界优秀出版社联手打造，荟萃11种经典好书，既有《庄子选译》《西厢记》等古典名著，亦有《呐喊》《家》《少年天子》等近现代名家名作，还有外文译作《中国的创造精神》，以及《中国童话故事精选》《中外历史故事精选》等精选集。每册书前配有详细的导读、作家介绍、创作背景等文学知识，可更加有效地帮助广大读者领略全书风貌、理解内容思想，培养良好的阅读习惯和审美情趣。定价" target="_blank">“语文新课标必读丛书”11种，人民教育出版和业界优秀出版社联手打造，荟萃11种经典好书，既有《庄子选译》《西厢记》等古典名著，亦有《呐喊》《家》《少年天子》等近现代名家名作，还有外文译作《中国的创造精神》，以及《中国童话故事精选》《中外历史故事精选》等精选集。每册书前配有详细的导读、作家介绍、创作背景等文学知识，可更加有效地帮助广大读者领略全书风貌、理解内容思想，培养良好的阅读习惯和审美情趣。定价
                </a>
              </div>
              <div class="priceWrap">
              <span class="salePrice">
                <b>团购价:</b>
                <i>¥</i>29.9</span>
                <del class="price">¥120.9</del>
                <span class="discount">2.5折
              </span>
              </div>
            </li>
            <li>
              <div class="bookCover">
                <img src="http://imgt.bookschina.com/2019/tuangou/10439_20190319093846.jpg">
              </div>
              <div class="bookName">
                <a href="http://tuan.bookschina.com/tuan/10439" title="“语文新课标必读丛书”11种，人民教育出版和业界优秀出版社联手打造，荟萃11种经典好书，既有《庄子选译》《西厢记》等古典名著，亦有《呐喊》《家》《少年天子》等近现代名家名作，还有外文译作《中国的创造精神》，以及《中国童话故事精选》《中外历史故事精选》等精选集。每册书前配有详细的导读、作家介绍、创作背景等文学知识，可更加有效地帮助广大读者领略全书风貌、理解内容思想，培养良好的阅读习惯和审美情趣。定价" target="_blank">“语文新课标必读丛书”11种，人民教育出版和业界优秀出版社联手打造，荟萃11种经典好书，既有《庄子选译》《西厢记》等古典名著，亦有《呐喊》《家》《少年天子》等近现代名家名作，还有外文译作《中国的创造精神》，以及《中国童话故事精选》《中外历史故事精选》等精选集。每册书前配有详细的导读、作家介绍、创作背景等文学知识，可更加有效地帮助广大读者领略全书风貌、理解内容思想，培养良好的阅读习惯和审美情趣。定价
                </a>
              </div>
              <div class="priceWrap">
              <span class="salePrice">
                <b>团购价:</b>
                <i>¥</i>29.9</span>
                <del class="price">¥120.9</del>
                <span class="discount">2.5折
              </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--文学图书-->
    <div class="literatureBook">
      <div class="w1200">
        <div class="bookTitle">
          <h2><a>文学图书 &gt;</a></h2>
          <Menu mode="horizontal" active-name="1" @on-select="detailsShow">
            <MenuItem name="1">
              小说
            </MenuItem>
            <MenuItem name="2">
              诗歌散文
            </MenuItem>
            <MenuItem name="3">
              悬疑推理
            </MenuItem>
            <MenuItem name="4">
              青春文学
            </MenuItem>
          </Menu>
          <!--<ul>-->
            <!--<li><a href="#" @click="novel">小说</a></li>-->
            <!--<li><a @click="literature">诗歌散文</a></li>-->
            <!--<li><a @click="reasoning">悬疑推理</a></li>-->
            <!--<li><a @click="youth">青春文学</a></li>-->
          <!--</ul>-->

        </div>
        <div class="bookContent">
          <div class="bookLeft">
            <div class="leftImg">
              <div class="imgTop">
                <a><img src="http://image31.bookschina.com/pro-images/sbanner/sbanner_274.jpg" alt="浮世杂绘-小人物系列杂文"></a>
              </div>
              <!--小说排行榜-->
              <div class="imgText" v-show="novelShow">
                <h3 class="kindTextTit">小说排行榜</h3>
                <ul>
                  <li>
                    <a title="羊脂球-莫泊桑短篇小说精选">羊脂球-莫泊桑短篇小说精选</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="黑铁时代">黑铁时代</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="最后一个大西洲人">最后一个大西洲人</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="隐形圈">隐形圈</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="绞河镇的最后一夜">绞河镇的最后一夜</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
              <!--文学排行榜-->
              <div class="imgText" v-show="literatureShow">
                <h3 class="kindTextTit">文学排行榜</h3>
                <ul>
                  <li>
                    <a>城南旧事-签名手稿典藏版</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>红楼艺术</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>食事-汪曾祺精选集</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>宋家客厅-从钱锺书到张爱玲</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>莫砺锋评说白居易</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
              <!--悬疑推理排行榜-->
              <div class="imgText" v-show="reasoningShow">
                <h3 class="kindTextTit">悬疑推理排行榜</h3>
                <ul>
                  <li>
                    <a>一个背叛日本的日本人</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>不可能犯罪诊断书-V</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>隐形圈</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>圣恶女</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>写乐杀人事件</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
              <!--青春文学-->
              <div class="imgText" v-show="youthShow">
                <h3 class="kindTextTit">青春文学排行榜</h3>
                <ul>
                  <li>
                    <a>你若向阳,心不忧伤</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>长篇小说:饕餮记3</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>催枪问谁-剑侠情缘叁-壹</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>沉颜传奇(全两册)</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>云养汉</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
            </div>
            <!--小说-->
            <div class="bookDetails" v-show="novelShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image12.bookschina.com/2013/20130309/s5757855.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>天空的囚徒</a>
                  </h3>
                  <p class="bookAuthor">[西班牙]卡洛斯·鲁依斯·萨丰</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥13.3</span>
                    <span class="price">¥29.0</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image30.bookschina.com/1/1.11/s1042729.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>牟氏庄园</a>
                  </h3>
                  <p class="bookAuthor">衣向东</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2009/20090121/s3208464.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>澜本嫁衣</a>
                  </h3>
                  <p class="bookAuthor">七堇年 著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2018/zuo/6/s3646281.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>明治开化安吾捕物帖(上)</a>
                  </h3>
                  <p class="bookAuthor">[日]坂口安吾著,杨明绮 译</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image12.bookschina.com/2013/20131119/s5844293.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>我的邻居张爱玲</a>
                  </h3>
                  <p class="bookAuthor">戴文采  著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2018/zuo/6/s7481557.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>灰故事-楚尘文化</a>
                  </h3>
                  <p class="bookAuthor">阿乙 著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20110122/s5009512.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>现代派文学辞典</a>
                  </h3>
                  <p class="bookAuthor">贾勤</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20110211/s5026393.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>风语-2/茅盾文学奖得主麦家力作</a>
                  </h3>
                  <p class="bookAuthor">麦家 著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>
            <!--诗歌散文-->
            <div class="bookDetails" v-show="literatureShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>
            <!--悬疑推理-->
            <div class="bookDetails" v-show="reasoningShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>
            <!--青春文学-->
            <div class="bookDetails" v-show="youthShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <div class="bookRight">
            <ul>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
            </ul>
            <div class="rightImg">
              <a><img src="http://image31.bookschina.com/pro-images/congshuxin/58336_ad190.jpg"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--社科图书-->
    <div class="socialBook">
      <div class="w1200">
        <div class="bookTitle">
          <h2><a>社科图书 &gt;</a></h2>
          <Menu mode="horizontal" active-name="5" @on-select="socialShow">
            <MenuItem name="5">
              历史
            </MenuItem>
            <MenuItem name="6">
              传记
            </MenuItem>
            <MenuItem name="7">
              哲学宗教
            </MenuItem>
            <MenuItem name="8">
              政治军事
            </MenuItem>
          </Menu>
          <!--<ul>-->
          <!--<li><a href="#" @click="novel">小说</a></li>-->
          <!--<li><a @click="literature">诗歌散文</a></li>-->
          <!--<li><a @click="reasoning">悬疑推理</a></li>-->
          <!--<li><a @click="youth">青春文学</a></li>-->
          <!--</ul>-->

        </div>
        <div class="bookContent">
          <div class="bookLeft">
            <div class="leftImg">
              <div class="imgTop">
                <a><img src="http://image31.bookschina.com/pro-images/sbanner/sbanner_273.jpg" alt="浮世杂绘-小人物系列杂文"></a>
              </div>
              <!--历史畅销榜-->
              <div class="imgText" v-show="historyShow">
                <h3 class="kindTextTit">历史畅销榜</h3>
                <ul>
                  <li>
                    <a title="羊脂球-莫泊桑短篇小说精选">羊脂球-莫泊桑短篇小说精选</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="黑铁时代">黑铁时代</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="最后一个大西洲人">最后一个大西洲人</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="隐形圈">隐形圈</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="绞河镇的最后一夜">绞河镇的最后一夜</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
              <!--传记排行榜-->
              <div class="imgText" v-show="biographyShow">
                <h3 class="kindTextTit">传记排行榜</h3>
                <ul>
                  <li>
                    <a>城南旧事-签名手稿典藏版</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>红楼艺术</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>食事-汪曾祺精选集</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>宋家客厅-从钱锺书到张爱玲</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>莫砺锋评说白居易</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
              <!--哲学宗教畅销榜-->
              <div class="imgText" v-show="religionShow">
                <h3 class="kindTextTit">哲学宗教畅销榜</h3>
                <ul>
                  <li>
                    <a>一个背叛日本的日本人</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>不可能犯罪诊断书-V</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>隐形圈</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>圣恶女</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>写乐杀人事件</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
              <!--政治军事畅销榜-->
              <div class="imgText" v-show="politicsShow">
                <h3 class="kindTextTit">政治军事畅销榜</h3>
                <ul>
                  <li>
                    <a>你若向阳,心不忧伤</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>长篇小说:饕餮记3</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>催枪问谁-剑侠情缘叁-壹</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>沉颜传奇(全两册)</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>云养汉</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
            </div>
            <!--历史畅销榜-->
            <div class="bookDetails" v-show="historyShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image12.bookschina.com/2013/20130309/s5757855.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>天空的囚徒</a>
                  </h3>
                  <p class="bookAuthor">[西班牙]卡洛斯·鲁依斯·萨丰</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥13.3</span>
                    <span class="price">¥29.0</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image30.bookschina.com/1/1.11/s1042729.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>牟氏庄园</a>
                  </h3>
                  <p class="bookAuthor">衣向东</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2009/20090121/s3208464.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>澜本嫁衣</a>
                  </h3>
                  <p class="bookAuthor">七堇年 著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2018/zuo/6/s3646281.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>明治开化安吾捕物帖(上)</a>
                  </h3>
                  <p class="bookAuthor">[日]坂口安吾著,杨明绮 译</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image12.bookschina.com/2013/20131119/s5844293.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>我的邻居张爱玲</a>
                  </h3>
                  <p class="bookAuthor">戴文采  著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2018/zuo/6/s7481557.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>灰故事-楚尘文化</a>
                  </h3>
                  <p class="bookAuthor">阿乙 著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20110122/s5009512.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>现代派文学辞典</a>
                  </h3>
                  <p class="bookAuthor">贾勤</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20110211/s5026393.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>风语-2/茅盾文学奖得主麦家力作</a>
                  </h3>
                  <p class="bookAuthor">麦家 著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>
            <!--传记排行榜-->
            <div class="bookDetails" v-show="biographyShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>
            <!--哲学宗教畅销榜-->
            <div class="bookDetails" v-show="religionShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>
            <!--政治军事畅销榜-->
            <div class="bookDetails" v-show="politicsShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>

          </div>
          <div class="bookRight">
            <ul>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
            </ul>
            <div class="rightImg">
              <a><img src="http://image31.bookschina.com/pro-images/congshuxin/6497952_ad190.jpg"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--少儿图书-->
    <div class="childrenBook">
      <div class="w1200">
        <div class="bookTitle">
          <h2><a>少儿图书 &gt;</a></h2>
          <Menu mode="horizontal" active-name="9" @on-select="childrenShow">
            <MenuItem name="9">
              益智启蒙
            </MenuItem>
            <MenuItem name="10">
              儿童文学
            </MenuItem>
            <MenuItem name="11">
              精品绘本
            </MenuItem>
          </Menu>
        </div>
        <div class="bookContent">
          <div class="bookLeft">
            <div class="leftImg">
              <div class="imgTop">
                <a><img src="http://image31.bookschina.com/pro-images/sbanner/sbanner_272.jpg"></a>
              </div>
              <!--益智启蒙-->
              <div class="imgText" v-show="alpiniaShow">
                <h3 class="kindTextTit">益智启蒙</h3>
                <ul>
                  <li>
                    <a title="羊脂球-莫泊桑短篇小说精选">羊脂球-莫泊桑短篇小说精选</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="黑铁时代">黑铁时代</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="最后一个大西洲人">最后一个大西洲人</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="隐形圈">隐形圈</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a title="绞河镇的最后一夜">绞河镇的最后一夜</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
              <!--儿童文学畅销榜-->
              <div class="imgText" v-show="childrenBookShow">
                <h3 class="kindTextTit">儿童文学畅销榜</h3>
                <ul>
                  <li>
                    <a>城南旧事-签名手稿典藏版</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>红楼艺术</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>食事-汪曾祺精选集</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>宋家客厅-从钱锺书到张爱玲</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>莫砺锋评说白居易</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
              <!--绘本畅销本-->
              <div class="imgText" v-show="pictureShow">
                <h3 class="kindTextTit">绘本畅销本</h3>
                <ul>
                  <li>
                    <a>一个背叛日本的日本人</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>不可能犯罪诊断书-V</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>隐形圈</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>圣恶女</a>
                    <span>&gt;</span>
                  </li>
                  <li>
                    <a>写乐杀人事件</a>
                    <span>&gt;</span>
                  </li>
                </ul>
              </div>
            </div>
            <!--小说-->
            <div class="bookDetails" v-show="alpiniaShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image12.bookschina.com/2013/20130309/s5757855.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>天空的囚徒</a>
                  </h3>
                  <p class="bookAuthor">[西班牙]卡洛斯·鲁依斯·萨丰</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥13.3</span>
                    <span class="price">¥29.0</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image30.bookschina.com/1/1.11/s1042729.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>牟氏庄园</a>
                  </h3>
                  <p class="bookAuthor">衣向东</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2009/20090121/s3208464.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>澜本嫁衣</a>
                  </h3>
                  <p class="bookAuthor">七堇年 著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2018/zuo/6/s3646281.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>明治开化安吾捕物帖(上)</a>
                  </h3>
                  <p class="bookAuthor">[日]坂口安吾著,杨明绮 译</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image12.bookschina.com/2013/20131119/s5844293.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>我的邻居张爱玲</a>
                  </h3>
                  <p class="bookAuthor">戴文采  著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2018/zuo/6/s7481557.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>灰故事-楚尘文化</a>
                  </h3>
                  <p class="bookAuthor">阿乙 著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20110122/s5009512.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>现代派文学辞典</a>
                  </h3>
                  <p class="bookAuthor">贾勤</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20110211/s5026393.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>风语-2/茅盾文学奖得主麦家力作</a>
                  </h3>
                  <p class="bookAuthor">麦家 著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>
            <!--诗歌散文-->
            <div class="bookDetails" v-show="childrenBookShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>
            <!--悬疑推理-->
            <div class="bookDetails" v-show="pictureShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>
            <!--青春文学-->
            <div class="bookDetails" v-show="youthShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111019/s5306995.jpg"></a>
                  </div>
                  <h3 class="detailsName">
                    <a>宅十三-山口山-第一部</a>
                  </h3>
                  <p class="bookAuthor">有时右逝 等著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">¥8.9</span>
                    <span class="price">¥29.8</span>
                  </div>
                  <div class="icon">
                    <img src="http://image31.bookschina.com/pro-images/190320cc/tubiao45.png" alt="12万种图书|每满10减3">
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="bookRight">
            <ul>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
            </ul>
            <div class="rightImg">
              <a><img src="http://image31.bookschina.com/pro-images/congshuxin/60511_ad230.jpg"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--其他分类图书楼层-->
    <div class="otherBook">
      <div class="w1200">
        <div class="otherContent">
          <div class="contentTop">
            <Menu mode="horizontal" active-name="12" @on-select="otherShow">
              <MenuItem name="12">
                艺术
              </MenuItem>
              <MenuItem name="13">
                美食
              </MenuItem>
              <MenuItem name="14">
                旅游
              </MenuItem>
              <MenuItem name="15">
                保健
              </MenuItem>
              <MenuItem name="16">
                孕产/育儿
              </MenuItem>
              <MenuItem name="17">
                外语
              </MenuItem>
              <MenuItem name="18">
                辅导
              </MenuItem>
            </Menu>
          </div>
          <!--艺术类-->
          <div class="contentLeft" v-show="artShow">
            <ul>
              <li>
                <div class="bookImg">
                  <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                </div>
                <h3 class="bookName">
                  <a>弗拉哈迪纪录电影研究</a>
                </h3>
                <p class="bookAuthor">[英]保罗·罗沙</p>
                <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
              </li>
              <li>
                <div class="bookImg">
                  <a><img src="http://image31.bookschina.com/2005/051115/s1152501.jpg"></a>
                </div>
                <h3 class="bookName">
                  <a>秋山孝海报作品集</a>
                </h3>
                <p class="bookAuthor">[日]秋山孝 著</p>
                <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
              </li>
              <li>
                <div class="bookImg">
                  <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                </div>
                <h3 class="bookName">
                  <a>弗拉哈迪纪录电影研究</a>
                </h3>
                <p class="bookAuthor">[英]保罗·罗沙</p>
                <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
              </li>
              <li>
                <div class="bookImg">
                  <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                </div>
                <h3 class="bookName">
                  <a>弗拉哈迪纪录电影研究</a>
                </h3>
                <p class="bookAuthor">[英]保罗·罗沙</p>
                <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
              </li>
              <li>
                <div class="bookImg">
                  <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                </div>
                <h3 class="bookName">
                  <a>弗拉哈迪纪录电影研究</a>
                </h3>
                <p class="bookAuthor">[英]保罗·罗沙</p>
                <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
              </li>
            </ul>
          </div>
          <!--美食-->
          <div class="contentLeft" v-show="foodShow">
            <ul>
              <li>
                <div class="bookImg">
                  <a><img src="http://image12.bookschina.com/2012/20120713/s5565049.jpg"></a>
                </div>
                <h3 class="bookName">
                  <a>舌尖上的中国/引发央视收视狂潮</a>
                </h3>
                <p class="bookAuthor">中央电视台纪录频道-编</p>
                <div class="pirceWrap">
                  <span class="salePrice">￥20.3</span>
                  <span class="price">￥45.0</span>
                </div>
              </li>
              <li>
                <div class="bookImg">
                  <a><img src="http://image31.bookschina.com/2005/051115/s1152501.jpg"></a>
                </div>
                <h3 class="bookName">
                  <a>秋山孝海报作品集</a>
                </h3>
                <p class="bookAuthor">[日]秋山孝 著</p>
                <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
              </li>
              <li>
                <div class="bookImg">
                  <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                </div>
                <h3 class="bookName">
                  <a>弗拉哈迪纪录电影研究</a>
                </h3>
                <p class="bookAuthor">[英]保罗·罗沙</p>
                <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
              </li>
              <li>
                <div class="bookImg">
                  <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                </div>
                <h3 class="bookName">
                  <a>弗拉哈迪纪录电影研究</a>
                </h3>
                <p class="bookAuthor">[英]保罗·罗沙</p>
                <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
              </li>
              <li>
                <div class="bookImg">
                  <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                </div>
                <h3 class="bookName">
                  <a>弗拉哈迪纪录电影研究</a>
                </h3>
                <p class="bookAuthor">[英]保罗·罗沙</p>
                <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
              </li>
            </ul>
          </div>
          <!--旅游-->
          <div class="contentLeft" v-show="tourismShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image12.bookschina.com/2013/20130309/s5776417.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>河上漂流记-十九世纪的旅行</a>
                  </h3>
                  <p class="bookAuthor">[美]约翰·巴勒斯 著,马永波/石蕾 译</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2005/051115/s1152501.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>秋山孝海报作品集</a>
                  </h3>
                  <p class="bookAuthor">[日]秋山孝 著</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
              </ul>
            </div>
          <!--保健-->
          <div class="contentLeft" v-show="healthShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20110124/s4952415.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>看三国说中医</a>
                  </h3>
                  <p class="bookAuthor">胡献国</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2005/051115/s1152501.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>秋山孝海报作品集</a>
                  </h3>
                  <p class="bookAuthor">[日]秋山孝 著</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
              </ul>
            </div>
          <!--孕产/育儿-->
          <div class="contentLeft" v-show="maternityShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2011/20111203/s5312376.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>顺产是件美丽的事-俏妈咪的顺产经</a>
                  </h3>
                  <p class="bookAuthor">凯特猫斯基 著,张艳琴 审读</p>
                  <div class="pirceWrap">
                    <span class="salePrice">￥20.3</span>
                    <span class="price">￥45.0</span>
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2005/051115/s1152501.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>秋山孝海报作品集</a>
                  </h3>
                  <p class="bookAuthor">[日]秋山孝 著</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
              </ul>
            </div>
          <!--外语-->
          <div class="contentLeft" v-show="foreignShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image12.bookschina.com/2013/20131101/s6367881.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>在普林斯顿大学听演讲-超值馋馈赠380分钟MP3光盘一张</a>
                  </h3>
                  <p class="bookAuthor">江涛 主编</p>
                  <div class="pirceWrap">
                    <span class="salePrice">￥20.3</span>
                    <span class="price">￥45.0</span>
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2005/051115/s1152501.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>秋山孝海报作品集</a>
                  </h3>
                  <p class="bookAuthor">[日]秋山孝 著</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
              </ul>
          </div>
          <!--辅导-->
          <div class="contentLeft" v-show="coachShow">
              <ul>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image30.bookschina.com/2/2.10/s522126.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>谈美书简——语文新课标必读丛书</a>
                  </h3>
                  <p class="bookAuthor">朱光潜 著</p>
                  <div class="pirceWrap">
                    <span class="salePrice">￥20.3</span>
                    <span class="price">￥45.0</span>
                  </div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2005/051115/s1152501.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>秋山孝海报作品集</a>
                  </h3>
                  <p class="bookAuthor">[日]秋山孝 著</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
                <li>
                  <div class="bookImg">
                    <a><img src="http://image31.bookschina.com/2007/20070114/s1921156.jpg"></a>
                  </div>
                  <h3 class="bookName">
                    <a>弗拉哈迪纪录电影研究</a>
                  </h3>
                  <p class="bookAuthor">[英]保罗·罗沙</p>
                  <div class="pirceWrap"><span class="salePrice">￥20.3</span><span class="price">￥45.0</span></div>
                </li>
              </ul>
            </div>
          <div class="contentRight">
            <ul>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
              <li>
                <a class="text">经典印象·小说名作坊</a>
                <span>&gt;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <foot-nav/>
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
  },
  data () {
    return {
      novelShow: true,
      literatureShow: false,
      reasoningShow: false,
      youthShow: false,

      historyShow: true,
      biographyShow: false,
      religionShow: false,
      politicsShow: false,

      alpiniaShow: true,
      childrenBookShow: false,
      pictureShow: false,

      artShow: true,
      foodShow: false,
      tourismShow: false,
      healthShow: false,
      maternityShow: false,
      foreignShow: false,
      coachShow: false,
      value1: 1
    }
  },
  methods: {
    detailsShow: function (name) {
      if (name === '1') {
        this.novelShow = true
        this.literatureShow = false
        this.reasoningShow = false
        this.youthShow = false
      } else if (name === '2') {
        this.novelShow = false
        this.literatureShow = true
        this.reasoningShow = false
        this.youthShow = false
      } else if (name === '3') {
        this.novelShow = false
        this.literatureShow = false
        this.reasoningShow = true
        this.youthShow = false
      } else if (name === '4') {
        this.novelShow = false
        this.literatureShow = false
        this.reasoningShow = false
        this.youthShow = true
      }
    },
    socialShow: function (name) {
      if (name === '5') {
        this.historyShow = true
        this.biographyShow = false
        this.religionShow = false
        this.politicsShow = false
      } else if (name === '6') {
        this.historyShow = false
        this.biographyShow = true
        this.religionShow = false
        this.politicsShow = false
      } else if (name === '7') {
        this.historyShow = false
        this.biographyShow = false
        this.religionShow = true
        this.politicsShow = false
      } else if (name === '8') {
        this.historyShow = false
        this.biographyShow = false
        this.religionShow = false
        this.politicsShow = true
      }
    },
    childrenShow: function (name) {
      if (name === '9') {
        this.alpiniaShow = true
        this.childrenBookShow = false
        this.pictureShow = false
      } else if (name === '10') {
        this.alpiniaShow = false
        this.childrenBookShow = true
        this.pictureShow = false
      } else if (name === '11') {
        this.alpiniaShow = false
        this.childrenBookShow = false
        this.pictureShow = true
      }
    },
    otherShow: function (name) {
      if (name === '12') {
        this.artShow = true
        this.foodShow = false
        this.tourismShow = false
        this.healthShow = false
        this.maternityShow = false
        this.foreignShow = false
        this.coachShow = false
      } else if (name === '13') {
        this.artShow = false
        this.foodShow = true
        this.tourismShow = false
        this.healthShow = false
        this.maternityShow = false
        this.foreignShow = false
        this.coachShow = false
      } else if (name === '14') {
        this.artShow = false
        this.foodShow = false
        this.tourismShow = true
        this.healthShow = false
        this.maternityShow = false
        this.foreignShow = false
        this.coachShow = false
      } else if (name === '15') {
        this.artShow = false
        this.foodShow = false
        this.tourismShow = false
        this.healthShow = true
        this.maternityShow = false
        this.foreignShow = false
        this.coachShow = false
      } else if (name === '16') {
        this.artShow = false
        this.foodShow = false
        this.tourismShow = false
        this.healthShow = false
        this.maternityShow = true
        this.foreignShow = false
        this.coachShow = false
      } else if (name === '17') {
        this.artShow = false
        this.foodShow = false
        this.tourismShow = false
        this.healthShow = false
        this.maternityShow = false
        this.foreignShow = true
        this.coachShow = false
      } else if (name === '18') {
        this.artShow = false
        this.foodShow = false
        this.tourismShow = false
        this.healthShow = false
        this.maternityShow = false
        this.foreignShow = false
        this.coachShow = true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "Home";
</style>
