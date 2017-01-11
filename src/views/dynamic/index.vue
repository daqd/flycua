<template lang="html">
  <div class="">
    <!-- 起降城市/航班号选项卡切换 -->
    <div class="tabs_wrap">
        <div class="tabs_wrap_item single" :class="{cur:getQueryType=='orgDst'}" @click="changeType('orgDst')">起降城市</div>
        <div class="tabs_wrap_item multiple" :class="{cur:getQueryType=='flightNo'}" @click="changeType('flightNo')">航班号</div>
    </div>
    <!-- 起降城市方式查询航班动态 -->
    <div class="_queryType_orgDstCity_wrap" v-show="getQueryType=='orgDst'">
      <div class="orgDstCity_select_wrap">
        <div class="orgDstCity_select_item">

        </div>
        <div class="orgDstCity_select_item">

        </div>
      </div>
      <!-- 日期选择 -->
      <div class="_queryType_date">

      </div>
    </div>

    <!-- 按照航班号查询 -->
    <div class="_queryType_flightNo_wrap" v-show="getQueryType=='flightNo'">
      <div class="item fillInFlightNo">

      </div>
      <div class="item fillInFlightNo">

      </div>
    </div>
    <!-- 查询按钮 -->
    <div class="dynamicBtn">
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

    }
  },
  computed: mapGetters({
    getQueryType: 'getQueryType',
  }),
  methods:{
    //切换航班动态查询类型
    changeType(type){
      this.$store.dispatch('changeDynamicQueryType',type);
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
      background: #505050;
    }
  }
  ._queryType_date{
    width: 100%;
    height: 48px;
    margin-top: 15px;
    background: #505050;
  }
}
._queryType_flightNo_wrap{
  &:extend(._queryType_orgDstCity_wrap);
  height: 130px;
  .item{
    width: 100%;
    height: 48px;
    background: #505050;
    margin-bottom: 15px;
  }
}
.dynamicBtn{
  width: 90%;
  height: auto;
  margin: 0 auto;
}
</style>
