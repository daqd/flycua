<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <div class="banner">
      <div class="userInfo">
        <div class="userPic">

        </div>
        <div class="userName">
          米梦宇
        </div>
      </div>
    </div>
    <!-- 订单管理入口 -->
    <div class="enterOrderContrl" @click="toNextPage('/user/orderControl')">
      <mt-button type="default" size="large">&nbsp;订&nbsp;&nbsp;&nbsp;单&nbsp;&nbsp;&nbsp;管&nbsp;&nbsp;&nbsp;理&nbsp;
        <img slot="icon" src="../../assets/usercenter/userpage_plane.png" alt="">
      </mt-button>
    </div>
    <!-- 不正常航班改期入口 -->
    <div class="irregularFlight" @click="toNextPage('/user/irregularFlight')">
      <mt-button type="default" size="large">&nbsp;不正常航班改期
        <img slot="icon" src="../../assets/usercenter/irregular_flight.png" alt="">
      </mt-button>
    </div>

    <!-- 会员中心各个模块入口 -->
    <component-userCenter-Item :isRedPaper="true" :redPaperCount="12" :redPaperRMB="8888">
      <img slot="userCenterImg" src="../../assets/usercenter/redpaper.png" alt="">
      <span slot="userCenterName">我的红包</span>
      <div slot="userCenterBtn">
        <span @click="toNextPage('/user/viewAllRedPaper')"><mt-button type="danger">查看所有红包</mt-button></span>
      </div>
    </component-userCenter-Item>
    <component-userCenter-Item>
      <img slot="userCenterImg" src="../../assets/usercenter/personal_information.png" alt="">
      <span slot="userCenterName">个人信息</span>
      <div slot="userCenterBtn">
        <span @click="toNextPage('/user/viewUserDetails')"><mt-button type="danger">查看个人信息</mt-button></span>
        <span @click="toNextPage('/user/changeLoginPwd')"><mt-button type="danger">修改登录密码</mt-button></span>
      </div>
    </component-userCenter-Item>
    <component-userCenter-Item>
      <img slot="userCenterImg" src="../../assets/usercenter/Common_information.png" alt="">
      <span slot="userCenterName">常用信息</span>
      <div slot="userCenterBtn">
        <span @click="toNextPage('/user/viewPassengers')"><mt-button type="danger">常用乘机人</mt-button></span>
        <span @click="toNextPage('/user/viewAddress')"><mt-button type="danger">常用地址</mt-button></span>
      </div>
    </component-userCenter-Item>
  </div>
</template>

<script>
import userCenterItem from '../../components/userCenterItem';
export default {
  data(){
    return {

    }
  },
  components:{
    'component-userCenter-Item':userCenterItem,
  },
  methods:{
    toNextPage(toPath){
      this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
      this.$router.push({path:toPath});
    }
  }
}
</script>

<style lang="less" scoped>
.banner{
  width: 100%;
  height: 150px;
  background: url("../../assets/usercenter/background.jpg") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .userInfo{
    width:90px;
    height: 120px;
  }
  .userPic{
    width: 100%;
    height: 90px;
    background: url("../../assets/usercenter/userPic.png") no-repeat;
    background-size: cover;
  }
  .userName{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
.enterOrderContrl{
  width: 90%;
  height: 50px;
  margin: 10px auto;
  margin-top: 15px;
  .mint-button{
    background-color: #00ade7;
    color: #FFF;
    .mint-button-icon img{
        width: 20px;
        height: 20px;
    }
  }
}
.irregularFlight{
  width: 90%;
  height: 50px;
  margin: 0px auto;
  margin-bottom: 15px;
  .mint-button{
    background-color: #642F77;
    color: #FFF;
    .mint-button-icon img{
        width: 20px;
        height: 20px;
    }
  }
}

</style>
