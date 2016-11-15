import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import Mint from 'mint-ui';
import scrollBehavior from './scrollBehavior';
import resource from 'vue-resource';
Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(resource);
const router = new VueRouter({
  routes,
  scrollBehavior
})

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
