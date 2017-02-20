<template lang="html">
<div class="MARGIN-TOP-40-PX">
  <!-- 提示信息 -->
  <mt-popup v-model="popupVisible" position="top" pop-transition="popup-fade" modal="false">
    <div style="width:100%;height:auto;margin-top:40px;padding:10px 0">
        {{parameter}}
    </div>
  </mt-popup>
  <!-- 提示信息结束 -->
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
  <!-- 航班列表信息 -->
  <article class="flightListItem-Wrapper" v-for="(item,index) in shoppingRes.goShoppingRes"  @click="toShowDetails(index)">
    <div class="flightListItem-plane-detail">
      <!-- 单条航班信息左侧部分 -->
      <div class="flightList-Item flightList-Item-left">
        <!-- 航班号 -->
        <div class="flightList-Item-No">
          {{item.segments[0].airline}}{{item.segments[0].fltNo}}
        </div>
        <!-- 出发日期 -->
        <div class="flightList-Item-orgDate">
          {{item.segments[0].takeoffTimeShow.slice(11,16)}}
        </div>
        <!-- 出发城市 -->
        <div class="flightList-Item-orgCity">
          {{item.segments[0].orgName}}
        </div>
      </div>
      <!-- 航班经停信息 -->
      <div class="flightList-Item flightList-Item-center">
        <!-- 飞行时间 -->
        <div class="flightList-Item-flightTime">
          {{item.segments[0].durationMin}}
        </div>
        <!-- 经停或者直飞 -->
        <div class="flightList-Item-isStop" v-if="item.segments[0].stop>=1">
          经停
        </div>
        <div class="flightList-Item-isStop" v-else>
          直飞
        </div>
        <!-- 箭头图标 -->
        <div class="flightList-Item-Icon">

        </div>
        <!-- 经停城市 -->
        <div class="flightList-Item-stopCity">
          {{item.segments[0].stopCityName}}
        </div>
      </div>
      <!-- 航班到达信息 -->
      <div class="flightList-Item flightList-Item-right">
        <!-- 机型 -->
        <div class="flightList-Item-type">
          机型{{item.segments[0].planeStyle}}
        </div>
        <!-- 到达时间 -->
        <div class="flightList-Item-dstTime">
          {{item.segments[0].arrTimeShow.slice(11,16)}}
        </div>
        <!-- 到达城市 -->
        <div class="flightList-Item-dstCity">
          {{item.segments[0].dstName}}
        </div>
      </div>
      <!-- 航班预订区域 -->
      <div class="flightList-Item flightList-Item-order">
        <!-- 最低价格 -->
        <div class="flightList-Item-minPrice">
          ￥{{item.priceAmount}}
        </div>
        <!-- 座位数量状态 -->
        <div class="flightList-Item-Status">
          <span>座位充足</span>
        </div>
        <!-- 查看更多 -->
        <div class="flightList-Item-readMore">
          <div class="flightList-Item-readMore-content">
            查看更多
          </div>
        </div>
      </div>
    </div>
    <!-- 座位信息 -->
    <div v-show="item.OpenClose">
      <div class="flightList-Item-SeatItem" v-for="seatItem in item.segsProductSummaryInfos" >
        <div class="flightList-Item-SeatContent">
          <!-- 座位类型名称及价格 -->
          <div class="flightList-Item-SeatItem-type">
            {{seatItem.fareBrandName}}
          </div>
          <div class="flightList-Item-SeatItem-price">
            ￥{{seatItem.adultPriceAmount}}
          </div>
          <!-- 增值服务 -->
          <div class="flightList-Item-SeatItem-addServiceWrap">
            <div class="SeatItem SeatItem-isSuitCase"></div>
            <div :class="[seatItem.childCanBaggage?'SeatItem-isPullBox':'SeatItem-noPullBox','SeatItem']"></div>
            <div class="SeatItem SeatItem-isSeatIcon"></div>
            <div class="SeatItem SeatItem-isFoodIcon"></div>
            <div class="SeatItem SeatItem-isRedPaperIcon"></div>
            <div class="border-right"></div>
            <div class="SeatItem SeatItem-isticketBackIcon"></div>
            <div class="SeatItem SeatItem-isTicketChangeIcon"></div>
          </div>
          <!-- 预订按钮 -->
          <div class="SeatItemBtn">
            <div class="border-right"></div>
              <span @click="toFillInOrderPage">预订</span>
          </div>
        </div>
      </div>
    </div>
  </article>
</div>
</template>
<script>
import Vue from 'vue';
import shoppingRes from '../../mocks/book/flightList.json';
//console.log(shoppingRes);
export default {
  data() {
    return {
      pageName:'',
      popupVisible:false,
      parameter:'',
      shoppingRes:shoppingRes,
      lowPrice:[
        {
          className:'grayBac',
          date:'2016-11-16',
          week:'星期一',
          price:333.00
        },
        {
          className:'blueBac',
          date:'2016-11-17',
          week:'星期二',
          price:444.00
        },
        {
          className:'yellowBac',
          date:'2016-11-18',
          week:'星期三',
          price:555.00
        },
      ]
    };
  },
  computed: {

  },
  created:function(){
    this.$data.shoppingRes = shoppingRes;

    //设置默认展开收缩状态值
    this.initOpenClose();

    //console.log(this.$data.openCloseArr);

  },
  ready() {},
  attached() {},
  methods: {
    toShowDetails(index){
      let goShoppingRes = this.$data.shoppingRes.goShoppingRes;
      for(let i=0;i<goShoppingRes.length;i++){
        this.$set(goShoppingRes[i],'OpenClose',((i!=index)?false:true));
      }
      console.log(goShoppingRes);
    },
    initOpenClose(){
      for (var i = 0; i < this.$data.shoppingRes.goShoppingRes.length; i++) {
        this.$set(this.$data.shoppingRes.goShoppingRes[i],'OpenClose',false);
      }
    },
    toFillInOrderPage(){
      this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
      this.$router.push({ path: '/book/bookFillInOrder'});
    }
  },
  components: {}
};
</script>

<style lang="css" scoped>
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
.purpleBac ul{
    display:block;
    width: 60%;
    height: 60px;
    margin: 0 auto;
    margin-top: 10px;
}
.purpleBac ul li{
  display: block;
  width: 50%;
  height:30px;
  float: left;
  text-align: center;
  line-height:30px;
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

.flightListItem-Wrapper{
  width: 100%;
  height: auto;
  float: left;
  margin-top: 10px;
  border-top: 1px solid #c9c9c9;
  /*border-bottom: 1px solid #c9c9c9;*/
}
.flightListItem-plane-detail{
  width: 100%;
  height: 135px;
  float: left;
  background: #f3f3f3;
  border-bottom: 1px solid #c9c9c9;
}
.flightList-Item{
  text-align: right;
  width: 25%;
  height: 135px;
  float: left;
}
.flightList-Item-left{
  width: 24%;
  /*background-color: blue;*/
}
.flightList-Item-No,
.flightList-Item-orgCity,
.flightList-Item-flightTime,
.flightList-Item-isStop,
.flightList-Item-stopCity,
.flightList-Item-type,
.flightList-Item-dstCity,
.flightList-Item-minPrice,
.flightList-Item-Status{
  width: 100%;
  height: 40px;
  float: left;
  line-height: 40px;
}
.flightList-Item-orgDate,.flightList-Item-dstTime{
  width: 100%;
  height: 50px;
  float: left;
  line-height: 50px;
  color: #df3538;
  font-size:25px;
}
.flightList-Item-orgCity{

}
/*航班经停信息*/
.flightList-Item-center{
  /*background-color: green;*/
}
.flightList-Item-flightTime,
.flightList-Item-isStop,
.flightList-Item-stopCity,
.flightList-Item-minPrice,
.flightList-Item-Status{
  text-align: center;
}
.flightList-Item-Icon{
  width: 100%;
  height: 10px;
  float: left;
  background: url("../../assets/book/arrow.png") no-repeat center center;
  background-size: 60px;
}
.flightList-Item-isStop,
.flightList-Item-stopCity{
  font-size: 14px;
}
/*航班到达信息*/
.flightList-Item-right{
  width: 30%;
  /*background-color:#a06daf;*/
}
.flightList-Item-type,
.flightList-Item-dstTime,.flightList-Item-dstCity{
  text-align: left;
}

/*航班预订区域*/
.flightList-Item-order{
  width: 20%;
  /*background-color:#ff9703;*/
}
.flightList-Item-minPrice{
  font-size: 20px;
  color: #df3538;
}
.flightList-Item-Status span{
    display: block;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 8px;
    background-color: #00ade7;
    color: #FFF;
    margin-top: 10px;
}
.flightList-Item-readMore{
    width: 100%;
    height: 55px;
    float: left;
    background: url("../../assets/book/nav.png") no-repeat 85% 60%;
    background-size:25px;
}
.flightList-Item-readMore-content{
  width: 40px;
  height: 30px;
  font-size: 14px;
  color: #c9c9c9;
  margin-top: 15px;
}
/*座位信息*/
.flightList-Item-SeatItem{
  width: 100%;
  height: 80px;
  float: left;
  border-bottom: 1px solid #c9c9c9;
}
.flightList-Item-SeatContent{
  width: 90%;
  height: 80px;
  margin: 0 auto;
}
.flightList-Item-SeatItem-type,
.flightList-Item-SeatItem-price{
  width: 50%;
  height: 35px;
  float: left;
  line-height: 35px;
}
.flightList-Item-SeatItem-price{
  text-align: right;
  color: #df3538;
}
.flightList-Item-SeatItem-addServiceWrap{
  width: 70%;
  height: 45px;
  float: left;
}
.SeatItem{
  width: 14%;
  height: 45px;
  float: left;
}
.SeatItem-isSuitCase{
  background: url("../../assets/book/isSuitCase.png") no-repeat center center;
  background-size: 21px;
}
.SeatItem-isPullBox{
  background: url("../../assets/book/isPullBox.png") no-repeat center center;
  background-size: 15px;
}
.SeatItem-isSeatIcon{
  background: url("../../assets/book/isSeatIcon.png") no-repeat center center;
  background-size: 19px;
}
.SeatItem-isFoodIcon{
  background: url("../../assets/book/isFoodIcon.png") no-repeat center center;
  background-size: 26px;
}
.SeatItem-isRedPaperIcon{
  background: url("../../assets/book/isRedPaperIcon.png") no-repeat center center;
  background-size: 26px;
}
.SeatItem-noPullBox{
  background: url("../../assets/book/noPullBox.png") no-repeat center center;
  background-size: 20px;
}
.SeatItem-noSeatIcon{
  background: url("../../assets/book/noSeatIcon.png") no-repeat center center;
  background-size: 20px;
}
.SeatItem-noFoodIcon{
  background: url("../../assets/book/noFoodIcon.png") no-repeat center center;
  background-size: 20px;
}
.SeatItem-noRedPaperIcon{
  background: url("../../assets/book/noRedPaperIcon.png") no-repeat center center;
  background-size: 20px;
}
.SeatItem-isticketBackIcon{
  background: url("../../assets/book/isticketBackIcon.png") no-repeat center center;
  background-size: 25px;
}
.SeatItem-isTicketChangeIcon{
  background: url("../../assets/book/isTicketChangeIcon.png") no-repeat center center;
  background-size: 25px;
}
.border-right{
  float: left;
  width: 1%;
  height: 30px;
  margin-top: 7.5px;
  border-right: 1px solid #c9c9c9;
}
/*预订按钮*/
.SeatItemBtn{
  width: 30%;
  height: 45px;
  float: left;
}
.SeatItemBtn span{
  display: block;
  width: 90%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color:#df3538;
  color: #FFF;
  border-radius: 8px;
  margin-top: 7.5px;
  float: right;
}
</style>
