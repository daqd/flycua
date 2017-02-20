<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <!-- 起降城市/航班号选项卡切换 -->
    <div class="tabs_wrap">
        <div class="tabs_wrap_item single" :class="{cur:getAddserviceType=='order'}" @click="changeType('order')">订单购买</div>
        <div class="tabs_wrap_item multiple" :class="{cur:getAddserviceType=='hander'}" @click="changeType('hander')">手动购买</div>
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
    getAddserviceType: 'getAddserviceType',
  }),
  methods:{
    //切换航班动态查询类型
    changeType(type){
      this.$store.dispatch('changeAddServiceQueryType',type);
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
</style>
