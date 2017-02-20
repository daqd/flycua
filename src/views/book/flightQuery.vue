<template lang="html">
  <div class="">
    <!-- banner -->
    <div class="fq-banner">

    </div>
    <!-- 往返程选项卡切换 -->
    <div class="tabs_wrap">
        <div class="tabs_wrap_item single" :class="{cur:getFlightType=='single'}" @click="changeTypeToSingle">单程</div>
        <div class="tabs_wrap_item multiple" :class="{cur:getFlightType=='multiple'}" @click="changeTypeToMultiple">往返</div>
    </div>
    <!-- 提示信息 -->
    <div class="flightQueryPageTip">
      欢迎大家使用联航客户端
    </div>
    <!-- 航班查询区域 -->
    <div class="fq-search-wrap">
      <!-- 第一列图标 -->
      <div class="fq-search-item-wrap">
          <div class="fq-search-item">
            <div class="fq-search-item-icon orgCityIcon"></div>
            <div class="fq-search-item-name">起始地</div>
            <div class="fq-search-item-val" @click="toAirportListByOrgDst('org')"> {{getFlightDetails.orgCityZh}}</div>
          </div>
        <div class="fq-search-item">
          <div class="fq-search-item-icon dstCityIcon"></div>
          <div class="fq-search-item-name">目的地</div>
          <div class="fq-search-item-val" @click="toAirportListByOrgDst('dst')"> {{getFlightDetails.dstCityZh}} </div>
        </div>
        <div class="fq-search-item">
          <div class="fq-search-item-icon dateIcon"></div>
          <div class="fq-search-item-name">去程日期</div>
          <div class="fq-search-item-val" @click="toCalendarByOrgDst('org')"> {{getFlightDetails.orgDate}}</div>
        </div>
        <div class="fq-search-item"  v-show="getFlightType=='multiple'">
          <div class="fq-search-item-icon dateIcon"></div>
          <div class="fq-search-item-name">返程日期</div>
          <div class="fq-search-item-val" @click="toCalendarByOrgDst('dst')"> {{getFlightDetails.dstDate}} </div>
        </div>
      </div>
      <div class="fq-search-changeIcon" @click="changeOrgDst">

      </div>
    </div>
    <!-- 乘机人数量选择 -->
    <div class="part-between addTopBorder">
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
    <!-- 乘机人数量选择开始 -->
      <mt-popup v-model="popupVisible" position="bottom">
          <mt-picker :slots="passengerNumSelect" @change="onValuesChange"></mt-picker>
      </mt-popup>
    <!-- 乘机人数量选择结束 -->
  </div>
</template>

<script>
import Vue from 'vue';
import {Popup , Picker ,Toast } from 'mint-ui';
import {getDay,getNextDay} from '../../js/common';
import { mapGetters } from 'vuex'
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

},
methods:{
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
      this.$router.push({path:'/book/flightList'});
    };
  },
}
}
</script>

<style lang="less" scoped>
.headerTransparent{
  background-color: transparent !important;
  color: #505050;
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
.fq-banner{
  width: 100%;
  height: 200px;
  background: url("../../assets/book/flightQueryBac.jpg") no-repeat;
  background-size: cover;
}
.flightQueryPageTip{
  display: flex;
  box-sizing:border-box;
  width: 100%;
  height: 40px;
  background-color: #f1f0f0;
  border-bottom: 1px solid #ececec;
  align-items: center;
  padding-left: 10px;
}
.fq-search-wrap{
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 15px;
  align-items:flex-start;
  .fq-search-item-wrap{
    flex: 8;
    height: auto;
    .fq-search-item{
      display: flex;
      width: 100%;
      height: 50px;
      align-items: center;
      .fq-search-item-icon,.fq-search-item-name,.fq-search-item-value{
        display: flex;
      }
      .fq-search-item-icon{
        width: 90px;
        height: 100%;
      }
      .orgCityIcon{
        background: url("../../assets/book/OrgCity.png") no-repeat center center;
        background-size: 30px;
      }
      .dstCityIcon{
        background: url("../../assets/book/ReachCity.png") no-repeat center center;
        background-size: 30px;
      }
      .dateIcon{
        background: url("../../assets/book/StartDate.png") no-repeat center center;
        background-size: 30px;
      }
      .fq-search-item-name{
        width: 120px;
        height: 100%;
        justify-content:flex-start;
        align-items: center;
      }
      .fq-search-item-val{
        display: flex;
        align-items: center;
        width: 100%;
        border: 1px solid #ececec;
        height: 40px;
        border-radius: 4px;
        padding-left: 10px;
      }
    }
  }
  .fq-search-changeIcon{
    display: flex;
    width: 50px;
    height: 100px;
    background: url("../../assets/book/ChangeCity.png") no-repeat center center;
    background-size: 30px;
  }
}
/*乘机人数量选择*/
.part-between-content{
  width: 95%;
  height: 50px;
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
 background:#c9c9c9 url("../../assets/home/adult.png") no-repeat 85% center;
 background-size:20px;
}
.child_icon{
 background:#c9c9c9 url("../../assets/home/child.png") no-repeat 85% center;
 background-size:20px;
}
.baby_icon{
 background:#c9c9c9 url("../../assets/home/baby.png") no-repeat 85% center;
 background-size:20px;
}
.addTopBorder{
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    margin-top: 20px;
}
/*乘机人数量选择提示信息*/
.passenger-num-wraper{
  width: 100%;
  height:45px;
}
.mint-popup {
  width: 100%;
}
.part-end{
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
}
</style>
