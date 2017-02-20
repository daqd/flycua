<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <!-- 起降城市/航班号选项卡切换 -->
    <div class="tabs_wrap">
        <div class="tabs_wrap_item single" :class="{cur:getQueryType=='orgDst'}" @click="changeType('orgDst')">起降城市</div>
        <div class="tabs_wrap_item multiple" :class="{cur:getQueryType=='flightNo'}" @click="changeType('flightNo')">航班号</div>
    </div>
    <!-- 起降城市方式查询航班动态 -->
    <div class="_queryType_orgDstCity_wrap" v-show="getQueryType=='orgDst'">
      <div class="orgDstCity_select_wrap">
        <div class="orgDstCity_select_item">
          <div class="select_item_icon">

          </div>
          <div class="select_item_info_wrap">
              <div class="cityType">
                出发城市
              </div>
              <div class="cityVal">
                北京南苑
              </div>
          </div>
        </div>
        <div class="orgDstCity_select_item">
          <div class="select_item_icon dstCityIcon">

          </div>
          <div class="select_item_info_wrap">
              <div class="cityType">
                到达城市
              </div>
              <div class="cityVal">
                广州佛山
              </div>
          </div>
        </div>
      </div>
      <!-- 日期选择 -->
      <div class="_queryType_date">
          <div class="_queryType_date_Icon">

          </div>
          <div class="_queryType_date_Info">
              航班日期：
          </div>
          <div class="_queryType_date_Input">
            2017-01-18
          </div>
          <div class="_queryType_date_Icon">

          </div>

      </div>
    </div>

    <!-- 按照航班号查询 -->
    <div class="_queryType_flightNo_wrap" v-show="getQueryType=='flightNo'">
      <div class="item fillInFlightNo">
        <div class="_queryType_date_Icon dstCityIcon">

        </div>
        <div class="_queryType_date_Info">
            航班号：
        </div>
        <div class="_queryType_date_Input">
          <input type="text" name="" value="" v-model="flightNo" placeholder="请输入航班号">
        </div>
      </div>
      <div class="item fillInFlightNo">
        <div class="_queryType_date_Icon">

        </div>
        <div class="_queryType_date_Info">
            航班日期：
        </div>
        <div class="_queryType_date_Input">
          2017-01-18
        </div>
      </div>
    </div>
    <!-- 查询按钮 -->
    <div class="dynamicBtn" @click="goToPage">
      <mt-button size="large" type="danger">查 询</mt-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { mapGetters } from 'vuex'
export default {
  data(){
    return{
      flightNo:''
    }
  },
  computed: mapGetters({
    getQueryType: 'getQueryType',
  }),
  methods:{
    //切换航班动态查询类型
    changeType(type){
      this.$store.dispatch('changeDynamicQueryType',type);
    },
    goToPage(){
      this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
      this.$router.push({path:'/dynamic/dynamicList'});
    }
  }
}
</script>

<style lang="less" scoped>
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
._queryType_orgDstCity_wrap{
  width: 90%;
  height: 170px;
  margin: 0 auto;
  margin-top: 20px;
  .orgDstCity_select_wrap{
    width: 100%;
    height: 80px;
    display: flex;
    justify-content:space-between;
    .orgDstCity_select_item{
      width: 48%;
      height: 80px;
      border: 1px solid #c9c9c9;
      border-radius: 8px;
      display: flex;
      .select_item_icon{
        width: 50px;
        height: 40px;
        background: url("../../assets/dynamic/dynamic_orgcity.png") no-repeat center;
        background-size: 20px;
      }
      .dstCityIcon{
        background: url("../../assets/dynamic/dynamic_dstcity.png") no-repeat center;
        background-size: 22px;
      }
      .select_item_info_wrap{
        width: 100%;
        height: 80px;
        .cityType{
            width: 100%;
            height: 30px;
            line-height: 30px;
            margin-top: 5px;
        }
        .cityVal{
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 18px;
        }
      }
    }
  }
  ._queryType_date{
    width: 100%;
    height: 48px;
    margin-top: 15px;
    border: 1px solid #c9c9c9;
    border-radius: 8px;
    display: flex;
    ._queryType_date_Icon{
      width: 48px;
      height: 48px;
      background: url("../../assets/dynamic/dateIcon.png") no-repeat center center;
      background-size: 20px;
    }
    ._queryType_date_Info{
        width: 90px;
        height: 48px;
        line-height: 48px;
    }
    ._queryType_date_Input{
      width: auto;
      flex: 1;
      height: 48px;
      line-height: 48px;
    }
  }
}
._queryType_flightNo_wrap{
  &:extend(._queryType_orgDstCity_wrap);
  height: 130px;
  .item{
    width: 100%;
    height: 48px;
    border: 1px solid #c9c9c9;
    border-radius: 8px;
    display: flex;
    margin-bottom: 15px;
    ._queryType_date_Icon{
      width: 48px;
      height: 48px;
      background: url("../../assets/dynamic/dateIcon.png") no-repeat center center;
      background-size: 20px;
    }
    .dstCityIcon{
      background: url("../../assets/dynamic/dynamic_dstcity.png") no-repeat center;
      background-size: 22px;
    }
    ._queryType_date_Info{
        width: 90px;
        height: 48px;
        line-height: 48px;
    }
    ._queryType_date_Input{
      width: auto;
      flex: 1;
      height: 48px;
      line-height: 48px;
      &>input{
          width: 95%;
          height: 35px;
          border-width: 0;
          outline: none;
          font-size: 14px;
      }
    }
  }
}
.dynamicBtn{
  width: 90%;
  height: auto;
  margin: 0 auto;
}
</style>
