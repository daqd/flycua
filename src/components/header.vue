<template>
	<div>
		<mt-header fixed :title="getHeaderTit" v-if="getHeaderTit!='首页'">
			<div @click="goBack" slot="left">
				<mt-button icon="back">返回</mt-button>
			</div>
			<mt-button icon="more" slot="right" @click="goBack"></mt-button>
		</mt-header>
		<div style="margin-top:40px;" v-if="getHeaderTit!='首页'">
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
				this.$router.go(-1);
			}
		}
	}
</script>
<style lang="css">
.mint-header{
  z-index: 9999 !important;
  background-color: #f63939 !important;
}
</style>
