<template lang="html">
<div class="homePageContent">
  <!-- banner区域 -->
  <div class="banner">
    <mt-swipe :auto="4000" :showIndicators="false" prevent>
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
            <div class="tabs_wrap_item single" :class="{cur:!isMultiple}" data-flightType="single" @click="flightTypeClcik">单程</div>
            <div class="tabs_wrap_item multiple" :class="{cur:isMultiple}" data-flightType="multiple" @click="flightTypeClcik">往返</div>
        </div>
        <!-- 出发到达信息 -->
        <div class="flight_choose_wrap">
            <div class="flight_airport_date_wrap">
                    <div class="flight_airport_date_wrap_item" >
                        <div class="item_name"> 出发城市 </div>
                        <router-link :to="{ path: '/airportList', query: { type: 'orgCity', fromPath:this.$route.path }}">
                          <div class="item_val item_airport_val textCenter"> {{flightDetails.orgCityZh}}</div>
                        </router-link>
                    </div>
                <div class="flight_airport_date_wrap_item">
                    <div class="item_name"> 出发日期 </div>
                    <router-link :to="{ path: '/calendar', query: { type: 'orgDate', fromPath:this.$route.path }}">
                      <div class="item_val item_date_val textCenter"> {{flightDetails.orgDate}} </div>
                    </router-link>
                </div>
            </div>
            <div class="change_airport_wrap" v-on:click="changeOrgDst"></div>
            <div class="flight_airport_date_wrap">
                <div class="flight_airport_date_wrap_item">
                    <div class="item_name textRight"> 到达城市 </div>
                    <router-link :to="{ path: '/airportList', query: { type: 'dstCity', fromPath:this.$route.path }}">
                    <div class="item_val item_airport_val textCenter"> {{flightDetails.dstCityZh}} </div>
                    </router-link>
                </div>
                <transition name="fade">
                  <div class="flight_airport_date_wrap_item" v-show="isMultiple">
                      <div class="item_name textRight"> 到达日期 </div>
                      <router-link :to="{ path: '/calendar', query: { type: 'dstDate', fromPath:this.$route.path }}">
                        <div class="item_val item_date_val textCenter"> {{flightDetails.dstDate}} </div>
                      </router-link>
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
              <div class="passenger_count_val adult_icon" @click="popup">{{passengerNum.adultNum}}</div>
          </div>
          <div class="passenger_count_item">
              <div class="passenger_count_name">儿童</div>
              <div class="passenger_count_val child_icon" @click="popup">{{passengerNum.childNum}}</div>
          </div>
          <div class="passenger_count_item">
              <div class="passenger_count_name">婴儿</div>
              <div class="passenger_count_val baby_icon" @click="popup">{{passengerNum.babyNum}}</div>
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
    <div class="module_entry_item" v-for="item in moduleEntry">
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

Vue.component(Button.name, Button);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);

// 引入底部组件
export default {
  data() {
      return {
        isMultiple:false,
        popupVisible:false,
        flightDetails:{
          orgCityZh:'北京南苑',
          orgCityCode:'BJS',
          dstCityZh:'广州佛山',
          dstCityCode:'FUO',
          orgDate:'',
          dstDate:''
        },
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
          passengerNum:{
            adultNum:1,
            childNum:0,
            babyNum:0
          },
          moduleEntry:[
            {
              moudleClassName:'mycua',
              moudleNameZH:'我的联行'
            },
            {
              moudleClassName:'book',
              moudleNameZH:'机票预订'
            },
            {
              moudleClassName:'lovetravel',
              moudleNameZH:'爱旅游'
            },
            {
              moudleClassName:'addService',
              moudleNameZH:'增值服务'
            },
            {
              moudleClassName:'passlcon',
              moudleNameZH:'优选年票'
            },
            {
              moudleClassName:'dynamic',
              moudleNameZH:'航班动态'
            },
            {
              moudleClassName:'contactUS',
              moudleNameZH:'联系我们'
            }
          ]
      };
    },
    beforeRouteEnter (to, from, next) {
      next(vm=>{
        //初始化出发到达城市,日期
        switch(to.query.type){
          case "orgCity":
            vm.$data.flightDetails.orgCityZh = to.query.airportZh;
            vm.$data.flightDetails.orgCityCode = to.query.airportCode;
          break;
          case "dstCity":
            vm.$data.flightDetails.dstCityZh = to.query.airportZh;
            vm.$data.flightDetails.dstCityCode = to.query.airportCode;
          break;
          case "orgDate":
            vm.$data.flightDetails.orgDate = to.query.calendarItem;
            vm.$data.flightDetails.dstDate = vm.getNextDay(to.query.calendarItem);
          break;
          case "dstDate":
            vm.$data.flightDetails.dstDate = to.query.calendarItem;
          break;
        }
        //初始化起始往返时间

      })
    },
    computed: {

    },
    ready() {

    },
    created(){
      //测试请求数据
      // this.$http.jsonp('http://m.flycua.com/h5/book/queryAirport.jsonp').then(function(response) {
      //     console.log(response);
      // }, function (response) {
      //     // error callback
      //     console.log("fail");
      // });

      //初始化出发日期为今天的日期
      this.$data.flightDetails.orgDate = this.getDay(0);
      //初始化到达日期为明天的日期
      this.$data.flightDetails.dstDate = this.getDay(1);
    },
    attached() {},
    methods: {
      //乘机人数量选择组件状态管理
      popup:function(){
        this.$data.popupVisible=!this.$data.popupVisible;
      },

      //乘机人数量选择
      onValuesChange:function(){
        this.$data.passengerNum.adultNum = arguments[1][0];
        this.$data.passengerNum.childNum = arguments[1][1];
        this.$data.passengerNum.babyNum = arguments[1][2];
      },

      //单程往返切换
      flightTypeClcik:function(event){
        if(event.srcElement.getAttribute("data-flightType")=='single'){
          this.$data.isMultiple=false;
        }else if(event.srcElement.getAttribute("data-flightType")=='multiple'){
          this.$data.isMultiple=true;
        }
      },

      //切换往返程信息
      changeOrgDst:function(){
        [this.$data.flightDetails.orgCityZh,this.$data.flightDetails.dstCityZh] = [this.$data.flightDetails.dstCityZh,this.$data.flightDetails.orgCityZh];
        [this.$data.flightDetails.orgCityCode,this.$data.flightDetails.dstCityCode] = [this.$data.flightDetails.dstCityCode,this.$data.flightDetails.orgCityCode];
      },

      //获取今天的日期
      getDay(day){
      	   var today = new Date();
      	   var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
      	   today.setTime(targetday_milliseconds);
      	   var tYear = today.getFullYear();
      	   var tMonth = today.getMonth();
      	   var tDate = today.getDate();
      	   tMonth = this.doHandleMonth(tMonth + 1);
      	   tDate = this.doHandleMonth(tDate);
      	   return tYear+"/"+tMonth+"/"+tDate;
      },

      doHandleMonth(month){
      	   var m = month;
      	   if(month.toString().length == 1){
      	      m = "0" + month;
      	   }
      	   return m;
      },
      //执行查询
      toDoSearch(){
        if(this.$data.flightDetails.orgCityCode == this.$data.flightDetails.dstCityCode){
          Toast('出发与到达城市不可相同！');
        }else{
          this.$router.push({path:'/book/flightList',query:{flightDetails:this.$data.flightDetails,passengerNum:this.$data.passengerNum}});
        };
      },
      //获取指定日期的后一天
      getNextDay(d){
        d = new Date(d);
        d = +d + 1000*60*60*24;
        d = new Date(d);
        var mon,
        	day;

        if((d.getMonth()-0+1)>=10){
        	mon = d.getMonth()-0+1;
        }else{
        	mon = "0"+(d.getMonth()-0+1);
        };

        if((d.getDate()-0)>=10){
        	day = d.getDate();
        }else{
        	day = "0"+d.getDate();
        };
        //return d;
        //格式化
        return d.getFullYear()+"/"+mon+"/"+day;
    }

    },
    components: {
    }
};
</script>

<style lang="css">
.homePageContent{
  height:810px;
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
.addService{
    background: url("../assets/home/main_increment.png") no-repeat center center;
    background-size:60px;
}
.dynamic{
    background: url("../assets/home/main_flight_dynamic.png") no-repeat center center;
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
