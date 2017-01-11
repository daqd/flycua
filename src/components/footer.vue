<template lang="html">
  <div class="">
    <div class="fillDiv">

    </div>
    <mt-tabbar fixed>
        <mt-tab-item id="首页">
        <img slot="icon" v-if="getNowPath.indexOf('home')!=-1" @click="goToHomePage" src="../assets/common/tab_home_focus.png">
        <img slot="icon" v-else @click="goToHomePage" src="../assets/common/tab_home_normal.png">
        <span :class="{setMainColor : getNowPath.indexOf('home')!=-1}">首页</span>
        </mt-tab-item>
      <mt-tab-item id="新闻">
        <img slot="icon" v-if="getNowPath.indexOf('news')!=-1" @click="toNextPage('/news')" src="../assets/common/tab_news_focus.png">
        <img slot="icon" v-else @click="toNextPage('/news')" src="../assets/common/tab_news_normal.png">
        <span :class="{setMainColor : getNowPath.indexOf('news')!=-1}">新闻</span>
      </mt-tab-item>
      <mt-tab-item id="客服">
        <img slot="icon" v-if="getNowPath.indexOf('onlineServer')!=-1" @click="toNextPage('/onlineServer')" src="../assets/common/tab_chat_focus.png">
        <img slot="icon" v-else @click="toNextPage('/onlineServer')" src="../assets/common/tab_chat_normal.png">
        <span :class="{setMainColor : getNowPath.indexOf('onlineServer')!=-1}">客服</span>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" v-if="getNowPath.indexOf('usercenter')!=-1" @click="toNextPage('/user/usercenter')" src="../assets/common/tab_user_focus.png">
        <img slot="icon" v-else @click="toNextPage('/user/usercenter')" src="../assets/common/tab_user_normal.png">
        <span :class="{setMainColor : getNowPath.indexOf('usercenter')!=-1}">我的</span>
      </mt-tab-item>
    </mt-tabbar>
</div>
</template>

<script scoped>
import Vue from 'vue';
import { Tabbar, TabItem } from 'mint-ui';
import { mapGetters } from 'vuex'

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
  data() {
    return {

    };
  },
  computed: mapGetters({
    getNowPath: 'getNowPath',
  }),
  ready() {},
  attached() {},
  methods: {
    goToHomePage(){
      this.$store.dispatch('setPageChangeStatus','back'); //保存页面切换状态至全局
      this.$router.push({path:'/home'});
    },
    toNextPage(toPath){
      this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
      this.$router.push({path:toPath});
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
@import "../css/common.less";
.fillDiv{
  width: 100%;
  height: 55px;
  float: left;
}
</style>
