<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <div class="banner">

    </div>
    <div class="insuranceHot">

    </div>
    <div class="delay">

    </div>
    <div class="delay_Info">
      <span class="delay_focus">延误险</span>&nbsp;&nbsp;不在为取消/延误而发愁
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style lang="less" scoped>
.banner{
  width: 100%;
  height: 150px;
  background: url("../../assets/insurance/banner.png") no-repeat;
  background-size:cover;
}
.insuranceHot{
  width: 100%;
  height: 48px;
  background: url("../../assets/insurance/insuranceHot.png") no-repeat center center;
  background-size: 100px;
}
.delay{
  &:extend(.banner);
  background: url("../../assets/insurance/delay.png") no-repeat;
  background-size:cover;
}
.delay_Info{
  width: 90%;
  height: 30px;
  margin: 0 auto;
  display: flex;
  align-items:flex-end;
  color: #505050;
  .delay_focus{
    font-size: 18px;
  }
}
</style>
