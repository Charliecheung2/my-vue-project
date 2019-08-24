//入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import moment from 'moment'
Vue.filter('dateFormat',function (dataStr, pattern="YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import { Header, Tabbar, TabItem, Swipe, SwipeItem, Button} from 'mint-ui'
import router from './router.js'
import VueResource from 'vue-resource'
Vue.use(VueResource);
Vue.http.options.root="http://120.77.181.41:3000"
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

import app from './App.vue'
var vm=new Vue({
  el:'#app',
  render:c=>c(app),
  router
});
