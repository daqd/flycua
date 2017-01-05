import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Mint from 'mint-ui';
import scrollBehavior from './scrollBehavior';
import resource from 'vue-resource';
import { sync } from 'vuex-router-sync';
import store from 'store'

Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(resource);

const router = new VueRouter({
  routes,
  scrollBehavior
})

//配置全局钩子用来拦截非登录状态下的路由跳转
router.beforeEach((to, from, next) => {
  // let noNeedLoginPage = ['首页','航班列表','航班查询'];
  // if(noNeedLoginPage.indexOf(to.name)==-1 && !store.state.base.loginStatus){
  //   next({path:'/'});
  // }else{
  //   next();
  // }
})

//配置全局钩子，设置返回路径至全局状态管理backpath
router.afterEach((to, from) => {
  store.dispatch('setBackPath', from.path);
  store.dispatch('setHeaderTit', to.name);
})

sync(store, router);

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
