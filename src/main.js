//入口文件
import Vue from 'vue'
import './lib/mui/css/mui.min.css'
import { Header, Tabbar, TabItem} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
import app from './App.vue'
var vm=new Vue({
  el:'#app',
  render:c=>c(app)
})
