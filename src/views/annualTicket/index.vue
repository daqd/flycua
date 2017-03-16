<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <!-- banner -->
    <div class="banner"></div>
    <!-- 查询区域 -->
    <div class="queryWrap">
      <div class="queryName">
        行程
      </div>
      <div class="queryInput">
        北京
      </div>
      <div class="changeIcon">

      </div>
      <div class="queryInput">
        广州佛山
      </div>
    </div>
    <!-- 查询按钮 -->
    <div class="queryBtn" @click="toAnnualTicketList">
      <mt-button size="large" type="danger">查 询</mt-button>
    </div>
    <!-- 提示标题 -->
    <div class="tipTitle">
      <div class="tipTitleLeft setMainColor">
        年票特权
      </div>
      <div class="tipTitleRight">
        超级经济舱，商旅出行优选
      </div>
    </div>
    <!-- 提示内容 -->
    <div class="tipContent">
      <mt-cell><span slot="title" style="font-size:14px;">1、享受北京南苑、佛山机场贵宾室及贵宾安检通道</span></mt-cell>
      <mt-cell><span slot="title" style="font-size:14px;">2、享受前三排超级经济舱座位及相应服务；</span></mt-cell>
      <mt-cell><span slot="title" style="font-size:14px;">3、年票兑换使用时不受节假日限制；</span></mt-cell>
      <mt-cell><span slot="title" style="font-size:14px;">4、年票兑换时往返航段可以自由兑换；</span></mt-cell>
      <mt-cell><span slot="title" style="font-size:14px;">5、年票兑换时一个城市两个机场自由兑换；</span></mt-cell>
      <mt-cell><span slot="title" style="font-size:14px;">6、享受餐食服务，70分钟以内航程的航班除外；</span></mt-cell>
      <mt-cell><span slot="title" style="font-size:14px;">7、享受10公斤手携行李和30公斤托运行李额；</span></mt-cell>
      <mt-cell><span slot="title" style="font-size:14px;">8、本产品可以增加四名受益人共同使用年票；</span></mt-cell>
      <mt-cell><span slot="title" style="font-size:14px;">9、年票有效期自购买日起一年有效。</span></mt-cell>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    toAnnualTicketList(){
      this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
      this.$router.push({path: '/annualTicketList'});
    },
  }
}
</script>

<style lang="less" scoped>
@import "../../css/common.less";
.banner{
  width: 100%;
  height: 150px;
  background: url("../../assets/annualTicket/banner.jpg") no-repeat;
  background-size:cover;
}
.queryWrap{
  width: 90%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .queryName{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .queryInput{
    flex: 1;
    height: 40px;
    border:1px solid #c9c9c9;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .changeIcon{
    width: 50px;
    height: 50px;
    background: url("../../assets/common/addr_change.png") no-repeat center center;
    background-size: 30px;
  }
}
.queryBtn{
    width: 90%;
    height: 50px;
    margin: 0 auto;
    margin-top: 15px;
}
.tipTitle{
  width: 90%;
  height: 45px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  // border-bottom: 1px solid #e9e9e9;
  .tipTitleLeft{
    font-size: 18px;
  }
}
.tipContent{
    width: 90%;
    height: auto;
    margin: 0 auto;
    margin-bottom: 20px;
}
</style>
