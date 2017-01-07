<template lang="html">
  <div class="">
    <div class="fillDiv">

    </div>
    <mt-tabbar fixed  :selected.sync="selected">
        <mt-tab-item id="首页">
          <!-- <div @click="goToHomePage"> -->
            <img slot="icon" src="../assets/common/tab_home_normal.png">
            首页
          <!-- </div> -->
        </mt-tab-item>
      <mt-tab-item id="新闻">
        <img slot="icon" src="../assets/common/tab_news_normal.png">
        新闻
      </mt-tab-item>
      <mt-tab-item id="客服">
        <img slot="icon" src="../assets/common/tab_chat_normal.png">
        客服
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/common/tab_user_normal.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
</div>
</template>

<script>
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
      console.log("ccc");
    }
  },
  components: {}
};
</script>

<style lang="css">
.fillDiv{
  width: 100%;
  height: 55px;
  float: left;
}
</style>
