<template lang="html">
  <div class="">
    <!-- 航班信息 -->
    <div class="flightInfoWrap">
      <!-- 座位类别 -->
      <div class="flightInfoSeatType">
        <div class="flightInfoSeatType-item">大</div>
        <div class="flightInfoSeatType-item">众</div>
        <div class="flightInfoSeatType-item">游</div>
      </div>
      <!-- 航班信息 -->
      <div class="flightInfoDetail">
        <div class="flightDetailsItem">
          <div class="flightInfoSeatType-item">KN5929</div>
          <div class="flightInfoSeatType-item setMainColor">北京南苑</div>
          <div class="flightInfoSeatType-item">18:05</div>
        </div>
        <div class="flightDetailsItem">
          <div class="flightInfoSeatType-item setContentBottom">经停</div>
          <div class="flightInfoSeatType-item setMainColor lineIcon"></div>
          <div class="flightInfoSeatType-item setContentTop">舟山</div>
        </div>
        <div class="flightDetailsItem">
          <div class="flightInfoSeatType-item">73U</div>
          <div class="flightInfoSeatType-item setMainColor">广东佛山</div>
          <div class="flightInfoSeatType-item">23:05</div>
        </div>
        <div class="flightDetailsItem">
          <div class="flightInfoSeatType-item">2017-01-04</div>
          <div class="flightInfoSeatType-item">星期三</div>
          <div class="flightInfoSeatType-item setMainColor">退改规则</div>
        </div>
      </div>

    </div>

    <!-- 乘机人选择 -->
    <mt-cell title="乘机人选择（您可选择1个成人）">
        <div @click="showPsg" class="showPsgIcon"></div>
    </mt-cell>

    <!-- 联系人信息 -->
    <mt-cell title="联系人信息"></mt-cell>

    <!-- 联系人姓名 -->
    <mt-field label="姓名" placeholder="请输入姓名"></mt-field>
    <!-- 手机号码 -->
    <mt-field label="手机号码" placeholder="请输入手机号码" type="tel"></mt-field>

    <!-- 行程单信息 -->
    <mt-cell title="我要邮寄行程单 需支付20元">
        <mt-switch v-model="value"></mt-switch>
    </mt-cell>
    <!-- 联系人姓名 -->
    <mt-field label="姓名" placeholder="请输入姓名"></mt-field>
    <!-- 手机号码 -->
    <mt-field label="手机号码" placeholder="请输入手机号码" type="tel"></mt-field>
    <!-- 邮政编码 -->
    <mt-field label="邮政编码" placeholder="请输入邮政编码"></mt-field>

    <!-- 保险选择 -->
    <mt-cell title="保险选择（限支付宝支付）"></mt-cell>
    <mt-cell title="航空意外险">
      <mt-switch v-model="value"></mt-switch>
    </mt-cell>

    <!-- 旅客须知 -->
    <mt-cell title="我已阅读旅客须知、认可保险条款">
      <mt-switch v-model="value"></mt-switch>
    </mt-cell>
    <!-- 预订按钮 -->
    <div class="nextBtnWrap">
      <mt-button type="danger" size="large">下一步</mt-button>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import { Cell,Toast,Field,Switch,Radio} from 'mint-ui';
Vue.component(Cell.name, Cell);
Vue.component(Field.name, Field);
Vue.component(Switch.name, Switch);
Vue.component(Radio.name, Radio);

export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  created:function(){
        this.$data.pageName = this.$route.name;
  },
  attached() {},
  methods: {
    showPsg(){
      Toast('显示乘机人待开发');
    }
  },
  components: {}
};
</script>

<style lang="less">
@import "../../css/common.less";
  /** 可供继承的样式 **/
  .flightDetailsItemBase{
    height: 120px;
    display: flex;
    flex-direction: column;
    color: #FFF;
    font-size: 20px;
  }
  /** 设置航班icon **/
  .lineIcon{
    background:url("../../assets/book/arrow.png") no-repeat center center;
    background-size: 80px;
  }
  /**航班信息**/
  .flightInfoWrap{
    display: flex;
    width: 100%;
    height: 120px;
    background: @grayColor;

    /** 左侧航班类型 **/
    .flightInfoSeatType{
      width: 15%;
      height: 120px;
      display: flex;
      flex-direction: column;
      background: #a1cb3b;
      color: #FFF;
      font-size: 20px;

      .flightInfoSeatType-item{
        display: flex;
        width: 100%;
        height: 33%;
        justify-content: center;
        align-items: center;
      }
    }
    /** 右侧航班信息 **/
    .flightInfoDetail{
      display: flex;
      width: 85%;
      height: 120px;

      .flightDetailsItem{
        &:extend(.flightDetailsItemBase);
        font-size: 16px;
        width: 25%;
        text-align: center;
        .flightInfoSeatType-item{
          display: flex;
          height: 33%;
          align-items: center;
          justify-content: center;
          color: @fontColor;
        }
      }
    }
  }
  .showPsgIcon{
      width: 40px;
      height: 40px;
      background: url("../../assets/book/nav.png") no-repeat center center;
      background-size: 25px;
  }
  .nextBtnWrap{
    width: 90%;;
    margin: 15px auto;
  }
</style>
