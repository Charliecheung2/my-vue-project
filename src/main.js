//入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header, Tabbar, TabItem, Swipe, SwipeItem} from 'mint-ui'
import router from './router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource);

Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

import app from './App.vue'
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router
});
