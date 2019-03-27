<template>
  <div class="searchBars">
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
  </div>
</template>

<script>
export default {
  data () {
    return {
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

<style lang="less">
@import "searchBar";
</style>
