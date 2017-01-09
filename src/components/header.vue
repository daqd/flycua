<template>
	<div>
		<mt-header fixed :title="getHeaderTit" v-if="getHeaderTit!='首页'">
			<div @click="goBack" slot="left">
				<mt-button icon="back">返回</mt-button>
			</div>
			<div slot="right" class="goHomeIcon" @click="goHome"></div>
		</mt-header>
		<div style="margin-top:40px;" v-if="getHeaderTit!='首页' && getHeaderTit!='航班查询'">
	</div>
</template>
<script>
	import Vue from 'vue';
	import { Header } from 'mint-ui';
	import { mapGetters } from 'vuex'
	Vue.component(Header.name, Header);

	export default{
		computed: mapGetters({
      getBackPath: 'getBackPath',
			getHeaderTit:'getHeaderTit'
    }),
		methods: {
			//返回路径
			goBack(){
				this.$store.dispatch('setPageChangeStatus','back'); //保存页面切换状态至全局
				this.$router.go(-1);
			},
			//回到首页
			goHome(){
				this.$store.dispatch('setPageChangeStatus','back'); //保存页面切换状态至全局
				this.$router.push({path:'/index'});
			}
		}
	}
</script scoped>
<style lang="less">
.mint-header{
  z-index: 9999 !important;
  background-color: #f63939 !important;
}
.goHomeIcon{
	width: 40px;
	height: 40px;
	float: right;
	background: url("../assets/common/headerHomeIcon.png") no-repeat right center;
	background-size: 20px;
}
</style>
