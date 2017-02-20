<template lang="html">
<div class="MARGIN-TOP-40-PX">
  <!-- 行李 -->
  <div @click="toLuggagePage">
    <addService-item-component>
      <span slot="addServiceIMG" class="luggageIcon"></span>
      <span slot="addServiceName">我要托运</span>
      <span slot="addServiceInfo">线上购买托运行李，享超值折扣。</span>
    </addService-item-component>
  </div>

  <!-- 餐食 -->
  <div @click="toFoodPage">
    <addService-item-component>
      <span slot="addServiceIMG" class="foodIcon"></span>
      <span slot="addServiceName">我要选餐</span>
      <span slot="addServiceInfo">部分航班未开放预订。</span>
    </addService-item-component>
  </div>

  <!-- 增值服务购买须知 -->
  <mt-cell title="我已阅读《增值服务购买须知》">
    <mt-switch v-model="value"></mt-switch>
  </mt-cell>

  <!-- 预订按钮 -->
  <div class="nextBtnWrap" @click="toOrderConfirmPage">
    <mt-button type="danger" size="large">下一步</mt-button>
  </div>

</div>
</template>

<script>
const addServiceItem = {
  template:'<div class="addServiceItem"><div class="addServiceIcon"><slot name="addServiceIMG">请在此处放置增值服务类型图标</slot></div><div class="addServiceInfo"><div class="addServiceInfoItem addServiceName"><slot name="addServiceName">增值服务名称</slot></div><div class="addServiceInfoItem addServiceInfo"><slot name="addServiceInfo">增值服务简介</slot></div></div><div class="buyBtn">购买</div></div>'
};
export default {
  data(){
    return{

    }
  },
  components: {
  // 增值服务Item
  'addService-item-component': addServiceItem
},
  methods:{
    //跳转至行李托运页
    toLuggagePage(){
      this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
      this.$router.push({path:'/book/bookAddServiceLuggage'});
    },
    //跳转至餐食购买页
    toFoodPage(){
      this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
      this.$router.push({path:'/book/bookAddServiceFood'});
    },
    //跳转至订单确认页
    toOrderConfirmPage(){
      this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
      this.$router.push({path:'/book/bookOrderConfirm'});
    }
  }
}
</script>

<style lang="less">
@import "../../css/common.less";
.addServiceItem{
  width: 100%;
  height: 100px;
  background: #fefefe;
  margin-bottom: 10px;
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.addServiceIcon{
  flex:1;
  height: 100px;
}
.addServiceInfo{
  height: 75px;
  flex:2;
}
.addServiceInfoItem{
  display: flex;
  width: 100%;
  height: 50%;
  align-items: center;
}
.addServiceName{
  font-size: 18px;
}
.addServiceInfo{
  font-size: 14px;
  line-height: 20px;
}
.nextBtnWrap{
    width: 90%;
    height: 50px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
}
.buyBtn{
  display: flex;
  flex:1;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  margin-right: 10px;
  margin-left: 5px;
  background: @mainColor;
  color: #FFF;
  border-radius: 8px;
}
.luggageIcon{
  display: block;
  width: 100%;
  height: 100%;
  background: url("../../assets/book/luggageIcon.png") no-repeat center center;
  background-size: 60px;
}
.foodIcon{
  &:extend(.luggageIcon);
  background: url("../../assets/book/eatIcon.png") no-repeat center center;
  background-size: 60px;
}
</style>
