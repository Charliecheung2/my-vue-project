//入口文件
import Vue from 'vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Vuex from 'vuex'

Vue.use(Vuex)
var cart=JSON.parse(localStorage.getItem('cart')||'[]')
var store = new Vuex.Store({
    state: {
        cart: cart,//商品对象

    },
    mutations: {
        addToCart(state, goodsinfo) {
            var flag = false

            state.cart.some(item => {
                    if (item.id == goodsinfo.id) {
                        item.count += parseInt(goodsinfo.count)
                        flag = true
                        return true
                    }
                }
            )
            if (!flag) {
                state.cart.push(goodsinfo)
            }
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    getters: {
        getAllCount(state){
            var c=0;
            state.cart.forEach(item=>{
                c+=item.count
            })
            return c;
        }
    }
})

import moment from 'moment'

Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)
})
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
/*import { Header, Tabbar, TabItem, Swipe, SwipeItem, Button, Lazyload} from 'mint-ui'*/
/*Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(Lazyload);*/
import MintUI from 'mint-ui'

Vue.use(MintUI)
import 'mint-ui/lib/style.css'
import router from './router.js'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.http.options.root = "http://120.77.181.41:3000"
Vue.http.options.emulateJSON = true;

import app from './App.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
});
