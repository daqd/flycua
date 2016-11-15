<template>
  <div>
      <!-- header -->
      <mt-header fixed v-bind:title="pageName">
        <router-link to="/" slot="left">
          <mt-button icon="back">返回</mt-button>
        </router-link>
        <mt-button icon="home" slot="right"></mt-button>
      </mt-header>
      <!-- header结束 -->
    <div style="margin-top:40px;">
      <!-- 城市列表搜索组件 -->
      <mt-search
        cancel-text="取消"
        placeholder=" 北京/beijing/bj/NAY">
      </mt-search>
      <!-- 机场列表 -->
      <div class="airportListWraper" v-for="charItem in resAirportData">
        <div v-if="charItem.charList.length>0" class="airportItemIndex">
          {{charItem.char}}
        </div>

          <div class="airportItem" v-for="airportItem in charItem.charList" :data-cityCode="airportItem.cityCode">
            <router-link :to="{ path: toPath,query: { type: setType,airportZh:airportItem.airportName,airportCode:airportItem.cityCode}}" tag='span'>
              <div class="itemContent">
                {{airportItem.airportName}}
              </div>
            </router-link>
          </div>

      </div>

      <!-- 底部填充 -->
      <div class="airportItemIndex"></div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue';
  import { Search } from 'mint-ui';

  //模拟数据
  import airportData from '../mocks/airport.json';
  //console.log(airportData);

  Vue.component(Search.name, Search);
	export default{
    data(){
      return{
        pageName:'',
        resAirportData:'',
        toPath:'',
        setType:''
      }
    },
    beforeRouteEnter (to,from,next){
      next(vm=>{
        //设置返回类型
        vm.$data.setType = vm.$route.query.type;
      });
    },
    created:function(){
      this.$data.pageName = this.$route.name;

      //设置排序后的机场数据
      this.$data.resAirportData = this.resetAirportData(airportData);

      //设置返回路径
      this.$data.toPath = this.$route.query.fromPath;
    },
    methods:{

      // 重现排列拿到的机场数据
      resetAirportData(airportData){
        //创建基本数据结构
        var resAirportData = [];
        for(let i=0;i<26;i++){
          let obj = {char:String.fromCharCode((65+i)),charList:[]};
          resAirportData.push(obj);
        }
        for(let i=0;i<airportData.airports.length;i++){
          for(let m=0;m<resAirportData.length;m++){
            if(airportData.airports[i].headerChar==resAirportData[m].char){
              resAirportData[m].charList.push(airportData.airports[i]);
            }
          }
        }
        return resAirportData;
      },
    }
	}
</script>
<style>
.mint-search{
    height:auto !important;
}
.airportListWraper{
    width: 100%;
    height: auto;
}
.airportItemIndex{
    width: 98%;
    height: 50px;
    background: #e9e9e9;
    line-height: 50px;
    padding-left: 2%;
}
.airportItem{
    width: 98%;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #c9c9c9;
    padding-left: 2%;
}
</style>
