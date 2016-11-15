<template lang="html">
<div class="">
  <!-- 提示信息 -->
  <mt-popup v-model="popupVisible" position="top" pop-transition="popup-fade" modal="false">
    <div style="width:100%;height:auto;margin-top:40px;padding:10px 0">
        {{parameter}}
    </div>
  </mt-popup>
  <!-- 提示信息结束 -->
  <!-- header -->
  <mt-header fixed v-bind:title="pageName">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="home" slot="right"></mt-button>
  </mt-header>
  <!-- header结束 -->
  <div style="margin-top:40px;"></div>
  <!-- 内容区获取 -->
  <!-- 特价日历 -->
  <article class="lowPriceWrap">
      <div v-for="item in lowPrice" :class="[item.className,'lowPriceItem']">
        <div class="priceDate">{{item.date}}</div>
        <div class="priceWeek">{{item.week}}</div>
        <div class="price">￥{{item.price}}</div>
      </div>
      <div class="lowPriceItem purpleBac">
        <ul>
          <li>低</li>
          <li>价</li>
          <li>日</li>
          <li>历</li>
        </ul>
      </div>
  </article>
</div>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
      pageName:'',
      popupVisible:false,
      parameter:'',
      lowPrice:[
        {
          className:'grayBac',
          date:'2016-11-16',
          week:'星期一',
          price:333
        },
        {
          className:'blueBac',
          date:'2016-11-17',
          week:'星期二',
          price:444
        },
        {
          className:'yellowBac',
          date:'2016-11-18',
          week:'星期三',
          price:555
        },
      ]
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm=>{
      //获取上页的数据
      //vm.$data.popupVisible=true;
      //vm.$data.parameter = to.query;
      //var Tip = setTimeout(function(){vm.$data.popupVisible=false},3000);
    })
  },
  computed: {},
  created:function(){
    this.$data.pageName = this.$route.name;
  },
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
.lowPriceItem{
  width:25%;
  height:80px;
  float: left;
  color: #FFF;
}
.grayBac{
  background-color: #c9c9c9;
}
.blueBac{
  background-color: #3eafe5;
}
.yellowBac{
  background-color: #ff9703;
}
.purpleBac{
  background-color:#a06daf;
}
.purpleBac ul li{
  display: block;
  width: 50%;
  height:40px;
  float: left;
  text-align: center;
  line-height:40px;
  font-size: 18px;
}
.priceDate{
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  float: left;
}
.priceWeek{
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  float: left;
  font-size: 14px;
}
.price{
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  float: left;
}

</style>
