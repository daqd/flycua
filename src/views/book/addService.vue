<template lang="html">
<div class="">
  <!-- 行李 -->
  <addService-item-component>
    <span slot="addServiceIMG" class="luggageIcon"></span>
    <span slot="addServiceName">我要托运</span>
    <span slot="addServiceInfo">线上购买托运行李，享超值折扣。</span>
  </addService-item-component>

  <!-- 餐食 -->
  <addService-item-component>
    <span slot="addServiceIMG" class="foodIcon"></span>
    <span slot="addServiceName">我要选餐</span>
    <span slot="addServiceInfo">部分航班未开放预订。</span>
  </addService-item-component>

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
  border-top: 1px solid #c9c9c9;
  border-bottom: 1px solid #c9c9c9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .addServiceIcon{
    flex:1;
    height: 100px;
  }
  .addServiceInfo{
    height: 75px;
    flex:2;
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
}
.luggageIcon{
  display: block;
  width: 100%;
  height: 100%;
  background: url("../../assets/book/luggageIcon.png") no-repeat center center;
  background-size: 70px;
}
.foodIcon{
  &:extend(.luggageIcon);
  background: url("../../assets/book/eatIcon.png") no-repeat center center;
  background-size: 70px;
}
</style>
