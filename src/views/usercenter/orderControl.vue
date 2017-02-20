<template lang="html">
  <div class="MARGIN-TOP-40-PX entryModuleWrap">
    <component-orderControl-Item v-for="item in moduleArr" :order-type="item.name" :moduleClassName="item.className" :toPath="item.path"></component-orderControl-Item>
  </div>
</template>

<script>
import orderControlItem from '../../components/orderControlItem'
export default {
  data(){
    return {
      moduleArr:[
        {
          name:'机票订单',
          className:'flightOrder',
          path:'/user/orderControl/flightOrder'
        },
        {
          name:'增值服务订单',
          className:'addServiceOrder',
          path:'/user/orderControl/addServiceOrder'
        },
        {
          name:'年票订单',
          className:'annualTicket',
          path:'/user/orderControl/annualOrder'
        },
        {
          name:'酒店订单',
          className:'hotelOrder',
          path:'/user/orderControl/hotelOrder'
        },
        {
          name:'保险订单',
          className:'safeOrder',
          path:'/user/orderControl/safeOrder'
        },
      ]
    }
  },
  components:{
    'component-orderControl-Item':orderControlItem
  }
}
</script>

<style lang="less" scoped>
.entryModuleWrap{
  margin-top: 60px;
}
</style>
