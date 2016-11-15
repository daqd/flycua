<template lang="html">
<div class="">
  <!-- 提示信息 -->
  <mt-popup v-model="popupVisible" position="top" pop-transition="popup-fade" modal="false">
    <div style="width:100%;height:auto;margin-top:40px;padding:10px 0">
        {{parameter}}
    </div>
  </mt-popup>
  <!-- header -->
  <mt-header fixed v-bind:title="pageName">
    <router-link to="/" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="home" slot="right"></mt-button>
  </mt-header>
  <!-- header结束 -->
  <div style="margin-top:40px;"></div>
  <!-- 内容区获取 -->

</div>
</template>

<script>
import Vue from 'vue';
export default {
  data() {
    return {
      pageName:'',
      popupVisible:true,
      parameter:''
    };
  },
  beforeRouteEnter (to, from, next) {
    next(vm=>{
      //获取上页的数据
      vm.$data.popupVisible=true;
      vm.$data.parameter = to.query;
      var Tip = setTimeout(function(){vm.$data.popupVisible=false},3000);
    })
  },
  computed: {},
  created:function(){
    this.$data.pageName = this.$route.name;
  },
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
