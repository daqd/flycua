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

sync(store, router);

const app = new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
