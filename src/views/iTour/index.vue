<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <!-- banner -->
    <div class="banner" :style="{height:windowWith+'px'}">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="../../assets/itour/banner/banner_1.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/itour/banner/banner_2.jpg" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../assets/itour/banner/banner_3.jpg" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 模块入口 -->
    <div class="iTour_modules_wrap">
      <div class="iTour_modules_item" v-for="item in iTour_modules">
        <div class="iTour_modules_IMG" :class="item.moduleClassName">

        </div>
        <div class="iTour_modules_info">
          {{item.moduleName}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {getWindowWith} from '../../js/common.js'
export default {
  data(){
    return{
      iTour_modules:[{
        moduleClassName:'termini',
        moduleName:'目的地推荐'
      },
      {
        moduleClassName:'travelNote',
        moduleName:'精彩游记'
      },
      {
        moduleClassName:'travelWay',
        moduleName:'旅游攻略'
      },
      {
        moduleClassName:'travelPro',
        moduleName:'产品推荐'
      }]
    }
  },
  computed:{
    windowWith:function(){
      return getWindowWith().windowWidth/2.7;
    },
  },
  created(){

  }
}
</script>

<style lang="less" scoped>
.banner{
  width: 100%;
}
.mint-swipe-item img{
  width: 100%;
  height: 150px;
}
.iTour_modules_wrap{
    width: 100%;
    height: 130px;
    margin-top: 10px;
    border-bottom: 2px solid #ececec;
    .iTour_modules_item{
      width: 25%;
      height: 120px;
      float: left;
      .iTour_modules_IMG{
        width: 100%;
        height: 90px;
      }
      .iTour_modules_info{
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
}
.termini{
  background: url("../../assets/itour/termini.png") no-repeat center center;
  background-size: 70px;
}
.travelNote{
  background: url("../../assets/itour/travelNote.png") no-repeat center center;
  background-size: 70px;
}
.travelWay{
  background: url("../../assets/itour/travelWay.png") no-repeat center center;
  background-size: 70px;
}
.travelPro{
  background: url("../../assets/itour/travelPro.png") no-repeat center center;
  background-size: 70px;
}
</style>
