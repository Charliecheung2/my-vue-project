import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import CartContainer from './components/tabbar/CartContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

var router = new VueRouter({
  routes: [
    {path:'/home', component: HomeContainer},
    {path:'/member', component: MemberContainer},
    {path:'/cart', component: CartContainer},
    {path:'/search', component: SearchContainer}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router
