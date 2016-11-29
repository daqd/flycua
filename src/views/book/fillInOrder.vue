<template lang="html">
  <div class="">
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
    111111
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  created:function(){
        this.$data.pageName = this.$route.name;
  },
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="css">
</style>
