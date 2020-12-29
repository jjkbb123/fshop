import Vue from 'vue'
import VueRouter  from 'vue-router'

import Miste from '../pages/msite/MIste.vue'
import Order from '../pages/order/Order.vue'
import Profile from '../pages/profile/Profile.vue'
import Search from '../pages/search/Search.vue'
import Login from '../pages/login/login.vue'

Vue.use(VueRouter )

export default new VueRouter({
  routes: [
    { path: '/miste', component: Miste ,meta: { showNavbar:true }},//mete指当前路由可否显示该路由
    { path: '/order', component: Order },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search },
    { path: '/login', component: Login },
    { path: '/',redirect: '/miste', component: Miste },
  ]
})