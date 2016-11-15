<template>
	<mt-header fixed title="xxx">
		<router-link to="/" slot="left">
			<mt-button icon="back">返回</mt-button>
		</router-link>
		<mt-button icon="more" slot="right"></mt-button>
	</mt-header>
</template>
<script>
	import Vue from 'vue';
	import Header from 'mint-ui/lib/Header';
	Vue.component(Header.name, Header);
	export default{

	}
</script>
