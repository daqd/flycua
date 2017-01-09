<template lang="html">
  <div class="">
    <div class="fillDiv">

    </div>
    <mt-tabbar fixed  :selected.sync="selected">
        <mt-tab-item id="首页">
          <!-- <div > -->
            <img slot="icon" @click="goToHomePage" src="../assets/common/tab_home_normal.png">
            <span>首页</span>
          <!-- </div> -->
        </mt-tab-item>
      <mt-tab-item id="新闻">
        <img slot="icon" @click="toNextPage('/news')" src="../assets/common/tab_news_normal.png">
        新闻
      </mt-tab-item>
      <mt-tab-item id="客服">
        <img slot="icon" @click="toNextPage('/onlineServer')" src="../assets/common/tab_chat_normal.png">
        客服
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" @click="toNextPage('/user/usercenter')" src="../assets/common/tab_user_normal.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
</div>
</template>

<script scoped>
import Vue from 'vue';
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
  data() {
    return {
      selected:'我的',
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {
    goToHomePage(){
      this.$store.dispatch('setPageChangeStatus','back'); //保存页面切换状态至全局
      this.$router.push({path:'/index'});
    },
    toNextPage(toPath){
      this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
      this.$router.push({path:toPath});
    }
  },
  components: {}
};
</script>

<style lang="css" scoped>
.fillDiv{
  width: 100%;
  height: 55px;
  float: left;
}
</style>
