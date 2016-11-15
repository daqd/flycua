<template lang="html">
  <mt-tabbar fixed>
    <mt-tab-item id="首页">
      <img slot="icon" src="../assets/common/tab_home_normal.png">
      首页
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
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
