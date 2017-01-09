<template lang="html">
  <div>
    <div class="controlItem" @click="toManagementPage(toPath)">
      <div class="controlIMG">
        <div :class="moduleClassName">

        </div>
      </div>
      <div class="controlInfo">
        {{orderType || '未定义'}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  props:['moduleClassName','orderType','toPath'],
  methods:{
    toManagementPage(toPath){
      this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
      this.$router.push({path:toPath});
    }
  }
}
</script>

<style lang="less" scoped>
.controlItem{
  width: 33%;
  height: 120px;
  float: left;
  margin-bottom:10px;
  .controlIMG{
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .controlInfo{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
.flightOrder{
  width: 80px;
  height: 80px;
  border-radius: 45px;
  background: #f8ca58 url("../assets/usercenter/ticketOrderByPhone.png") no-repeat center center;
  background-size: 40%;
}
.addServiceOrder{
  &:extend(.flightOrder);
  background: #8dd659 url("../assets/usercenter/addService.png") no-repeat center center;
  background-size: 40%;
}
.annualTicket{
  &:extend(.flightOrder);
  background: #6fa5eb url("../assets/usercenter/annualOrder.png") no-repeat center center;
  background-size: 65%;
}
.hotelOrder{
  &:extend(.flightOrder);
  background: #fba85e url("../assets/usercenter/hotel.png") no-repeat center center;
  background-size: 55%;
}
.safeOrder{
  &:extend(.flightOrder);
  background: #00a0e9 url("../assets/usercenter/insurance.png") no-repeat center center;
  background-size: 110%;
}
</style>
