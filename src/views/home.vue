<template lang="html">
<div class="homePageContent">
  <!-- banner区域 -->
  <div class="banner">
    <mt-swipe :auto="4000" :showIndicators="false" prevent>
      <mt-swipe-item><img src="http://www.flycua.com/upload/2016/12/16122201.jpg" alt="" /></mt-swipe-item>
      <mt-swipe-item><img src="http://www.flycua.com/upload/2016/7/870735824673800394.jpg" alt="" /></mt-swipe-item>
      <mt-swipe-item><img src="http://www.flycua.com/upload/2016/7/145502768571699261.jpg" alt="" /></mt-swipe-item>
      <mt-swipe-item><img src="http://www.flycua.com/upload/2016/10/16-10-31.jpg" alt="" /></mt-swipe-item>
    </mt-swipe>
  </div>
  <!-- 主要内容区透明背景 -->
  <div class="transparent-wrap">
    <div class="logo-wrap"></div>
    <div class="part-first"></div>
    <div class="part-between"></div>
    <div class="part-end"></div>
  </div>
  <!-- 查询内容区 -->
  <div class="home-flightSearch-wrap">
    <div class="logo-content"></div>
    <!-- 航班查询功能区域 -->
    <div class="part-first">
      <div class="part-first-content">
        <!-- Tab选项卡 -->
        <div class="tabs_wrap">
            <div class="tabs_wrap_item single" :class="{cur:getFlightType=='single'}" @click="changeTypeToSingle">单程</div>
            <div class="tabs_wrap_item multiple" :class="{cur:getFlightType=='multiple'}" @click="changeTypeToMultiple">往返</div>
        </div>
        <!-- 出发到达信息 -->
        <div class="flight_choose_wrap">
            <div class="flight_airport_date_wrap">
                    <div class="flight_airport_date_wrap_item" >
                        <div class="item_name"> 出发城市 </div>
                          <div class="item_val item_airport_val textCenter" @click="toAirportListByOrgDst('org')"> {{getFlightDetails.orgCityZh}}</div>
                    </div>
                <div class="flight_airport_date_wrap_item">
                    <div class="item_name"> 出发日期 </div>
                      <div class="item_val item_date_val textCenter" @click="toCalendarByOrgDst('org')"> {{getFlightDetails.orgDate}} </div>
                </div>
            </div>
            <div class="change_airport_wrap" v-on:click="changeOrgDst"></div>
            <div class="flight_airport_date_wrap">
                <div class="flight_airport_date_wrap_item">
                    <div class="item_name textRight"> 到达城市 </div>
                    <div class="item_val item_airport_val textCenter" @click="toAirportListByOrgDst('dst')"> {{getFlightDetails.dstCityZh}} </div>
                </div>
                <transition name="fade">
                  <div class="flight_airport_date_wrap_item" v-show="getFlightType=='multiple'">
                      <div class="item_name textRight"> 到达日期 </div>
                        <div class="item_val item_date_val textCenter" @click="toCalendarByOrgDst('dst')"> {{getFlightDetails.dstDate}} </div>
                  </div>
              </transition>
            </div>
        </div>
        <!-- 出发到达城市信息结束 -->
      </div>
    </div>
    <!-- 乘机人数量选择 -->
    <div class="part-between">
      <div class="part-between-content">
          <div class="passenger_count_item">
              <div class="passenger_count_name">成人</div>
              <div class="passenger_count_val adult_icon" @click="popup">{{getPassengerNum.adultNum}}</div>
          </div>
          <div class="passenger_count_item">
              <div class="passenger_count_name">儿童</div>
              <div class="passenger_count_val child_icon" @click="popup">{{getPassengerNum.childNum}}</div>
          </div>
          <div class="passenger_count_item">
              <div class="passenger_count_name">婴儿</div>
              <div class="passenger_count_val baby_icon" @click="popup">{{getPassengerNum.babyNum}}</div>
          </div>
      </div>
    </div>
    <!-- 乘机人数量选择结束 -->
    <!-- 查询按钮开始 -->
    <div class="part-end">
      <div class="part-end-content" @click="toDoSearch">
        <mt-button type="danger" size="large">航班查询</mt-button>
      </div>
    </div>
  </div>
  <!-- 航班查询区域结束 -->

  <!-- 首页模块入口 -->
  <div class="module_wrap">
    <div class="module_entry_item" v-for="item in moduleEntry" @click="moduleEnter(item.path)">
      <div class="module_entey_iterm_img" :class="item.moudleClassName"></div>
      <div class="module_entey_iterm_name">{{item.moudleNameZH}}</div>
    </div>
  </div>
  <!-- 乘机人数量选择开始 -->
    <mt-popup v-model="popupVisible" position="bottom">
        <mt-picker :slots="passengerNumSelect" @change="onValuesChange"></mt-picker>
    </mt-popup>
  <!-- 乘机人数量选择结束 -->

</div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem , Button , Popup , Picker ,Toast } from 'mint-ui';
import {getDay,getNextDay} from '../js/common';
import { mapGetters } from 'vuex'

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);

export default {
  data() {
      return {
        popupVisible:false,
        passengerNumSelect: [
            {
              flex: 1,
              values: ['1', '2', '3', '4', '5'],
              className: 'adultNum',
              textAlign: 'center',
              defaultIndex:0
            }, {
              divider: true,
              content: '-',
            }, {
              flex: 1,
              values: ['0', '1', '2', '3'],
              className: 'childNum',
              textAlign: 'center'
            },{
              divider: true,
              content: '-',
            }, {
              flex: 1,
              values: ['0', '1'],
              className: 'babyNum',
              textAlign: 'center'
            }
          ],
          moduleEntry:[
            {
              moudleClassName:'mycua',
              moudleNameZH:'我的联行',
              path:'/user/usercenter'
            },
            {
              moudleClassName:'book',
              moudleNameZH:'机票预订',
              path:'/book/flightQuery'
            },
            {
              moudleClassName:'hotel',
              moudleNameZH:'酒店',
              path:'/tujia'
            },
            {
              moudleClassName:'addService',
              moudleNameZH:'增值服务',
              path:'/addService'
            },
            {
              moudleClassName:'passlcon',
              moudleNameZH:'优选年票',
              path:'/annualTicket'
            },
            {
              moudleClassName:'dynamic',
              moudleNameZH:'航班动态',
              path:'/dynamic'
            },
            {
              moudleClassName:'insurance',
              moudleNameZH:'保险专区',
              path:'/insurance'
            },
            {
              moudleClassName:'contactUS',
              moudleNameZH:'联系我们',
              path:'/about'
            },
            {
              moudleClassName:'lovetravel',
              moudleNameZH:'爱旅游',
              path:'/iTour'
            },
          ]
      };
    },
    computed: mapGetters({
      getFlightType: 'getFlightType',
      getFlightDetails:'getFlightDetails',
      getPassengerNum:'getPassengerNum'
    }),
    ready() {

    },
    created(){
      //初始化出发日期为今天的日期
      //this.$store.dispatch('setOrgDate',getDay(0));
      //初始化到达日期为明天的日期
      //this.$store.dispatch('setDstDate',getDay(1));
    },
    attached() {},
    methods: {
      //乘机人数量选择组件状态管理
      popup(){
        this.$data.popupVisible=!this.$data.popupVisible;
      },

      //乘机人数量选择
      onValuesChange(){
        this.$store.dispatch('setAdultNum',arguments[1][0]);
        this.$store.dispatch('setChildNum',arguments[1][1]);
        this.$store.dispatch('setBabyNum',arguments[1][2]);
      },

      //单程往返切换
      changeTypeToSingle(){
        this.$store.dispatch('changeFlightType','single');
      },
      changeTypeToMultiple(){
        this.$store.dispatch('changeFlightType','multiple');
      },
      //切换往返程信息
      changeOrgDst(){
        this.$store.dispatch('changeOrgDstMes');
      },

      //执行选择机场列表
      toAirportListByOrgDst(type){
        this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
        if(type=='org'){
          this.$router.push({path: '/airportList', query: { type: 'orgCity'}});
        }else if(type=='dst'){
          this.$router.push({path: '/airportList', query: { type: 'dstCity'}});
        }
      },

      //执行选择日历
      toCalendarByOrgDst(type){
        this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
        if(type=='org'){
          this.$router.push({path: '/calendar', query: { type: 'orgDate'}});
        }else if(type=='dst'){
          this.$router.push({path: '/calendar', query: { type: 'dstDate'}});
        }
      },
      //执行查询
      toDoSearch(){
        if(this.$store.state.book.flightDetails.orgCityCode == this.$store.state.book.flightDetails.dstCityCode){
          Toast('出发与到达城市不可相同！');
        }else{
          this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
          this.$router.push({path:'/book/flightList'});
        };
      },

      //模块-个人中心入口
      moduleEnter(path){
        this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
        this.$router.push({path:path});
      },
    },
    components: {
    }
};
</script>

<style lang="css" scoped>
.homePageContent{
  height:830px;
  overflow: hidden;
}
/*通用样式*/
.textRight{
  text-align: right;
}
.textCenter{
  text-align: center;
}
/*banner容器*/
.banner{
  position: relative;
  height:408px;
  z-index: -2;
}
.banner img{
  max-width: 100%;
}
/*首页透明层*/
.transparent-wrap{
  position: relative;
  z-index: -1;
  width: 96%;
  margin:0px 2%;
  height: 340px;
  background: #FFF;
  top:-270px;
  filter: Alpha(opacity=80);
  -moz-opacity: 0.8;
  opacity: 0.8;
}
.logo-wrap{
  width: 100%;
  height: 50px;
  background: #e7e7e7;
}
.part-first{
  width: 100%;
  height: 140px;
  border-bottom: 1px solid #ccc;
}
.part-between{
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ccc;
}
.part-end{
  width: 100%;
  height: 90px;
}
/*主要查询区域*/
.home-flightSearch-wrap{
  position: relative;
  width:96%;
  margin:0px 2%;
  height: 340px;
  top: -610px;
}
.logo-content{
  width: 100%;
  height: 50px;
  background: url(../assets/common/logo.png) no-repeat center center;
  background-size: 140px;
}
/*单程往返选择*/
.part-first-content{
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.tabs_wrap{
  width: 100%;
  height: 45px;
}
.tabs_wrap_item{
  width: 50%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  float: left;
  background:#e7e7e7;
}
.cur{
  background:#f63939;
  color:#FFF;
}
/*出发到达地点日期选择*/
.flight_choose_wrap{
  width: 100%;
  height: 90px;
}
.flight_airport_date_wrap{
  width: 45%;
  height: 90px;
  float: left;
}
.flight_airport_date_wrap_item{
  width:100%;
  height: 45px;
  float: left;
}
.item_name{
  width: 40%;
  height: 45px;
  line-height: 45px;
  font-size: 14px;
  float: left;
}
.item_val{
  width: 60%;
  height: 45px;
  line-height: 45px;
  float: left;
  font-size: 14px;
}
.change_airport_wrap{
  width: 10%;
  height: 90px;
  float: left;
  background: url("../assets/common/addr_change.png") no-repeat center center;
  background-size:27px;
}
/*乘机人数量选择*/
.part-between-content{
  width: 95%;
  height: 100%;
  margin: 0 auto;
}
.passenger_count_item{
  width: 33%;
  height: 50px;
  line-height: 50px;
  float: left;
}
.passenger_count_name{
  width: 35%;
  height: 45px;
  float:left;
  text-align: center;
}
.passenger_count_val{
  width: 55%;
  height: 30px;
  float: left;
  border-radius: 5px;
  margin-top: 10px;
  line-height: 30px;
  padding-left: 10%;
}
.adult_icon{
 background:#c9c9c9 url("../assets/home/adult.png") no-repeat 85% center;
 background-size:20px;
}
.child_icon{
 background:#c9c9c9 url("../assets/home/child.png") no-repeat 85% center;
 background-size:20px;
}
.baby_icon{
 background:#c9c9c9 url("../assets/home/baby.png") no-repeat 85% center;
 background-size:20px;
}
/*按钮区域*/
.part-end-content{
  width: 95%;
  height: 50px;
  margin:0 auto;
  padding-top: 20px;
}
/*乘机人数量选择提示信息*/
.passenger-num-wraper{
  width: 100%;
  height:45px;
}
.mint-popup {
  width: 100%;
}
/* 首页模块入口 */
.module_wrap{
  position:relative;
  top:-630px;
  width: 100%;
  height: 240px;
  margin: 0 auto;
}
.module_entry_item{
  width:25%;
  height: 120px;
  float: left;
}
.module_entey_iterm_img{
  width: 100%;
  height: 90px;
  float: left;
}
.module_entey_iterm_name{
  width: 100%;
  height: 30px;
  line-height: 30px;
  float: left;
  text-align: center;
  font-size: 16px;
}
.mycua{
    background: url("../assets/home/main_my.png") no-repeat center center;
    background-size:60px;
}
.book{
    background: url("../assets/home/main_order.png") no-repeat center center;
    background-size:60px;
}
.hotel{
  background: url("../assets/home/hotel.png") no-repeat center center;
  background-size:60px;
}
.addService{
    background: url("../assets/home/main_increment.png") no-repeat center center;
    background-size:60px;
}
.dynamic{
    background: url("../assets/home/main_flight_dynamic.png") no-repeat center center;
    background-size:60px;
}
.insurance{
  background: url("../assets/home/insuranceIcon.png") no-repeat center center;
  background-size:60px;
}
.lovetravel{
    background: url("../assets/home/main_travel.png") no-repeat center center;
    background-size:60px;
}
.passlcon{
  background: url("../assets/home/main_passlcon.png") no-repeat center center;
  background-size:60px;
}
.contactUS{
  background: url("../assets/home/main_contactIcon.png") no-repeat center center;
  background-size:60px;
}
/*过渡效果*/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
