import Vue from 'vue'

import App from './App.vue'
import router from './router/index'
import './css/mormalize.css'

import {
  Tabbar,
  TabbarItem,
  Grid, 
  GridItem,
  NavBar,
  Icon,
  List,
  PullRefresh,
  Cell,
  Search,
  Button,
  Card,
  Swipe,
  SwipeItem,
} from 'vant'

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(List);
Vue.use(PullRefresh);
Vue.use(Cell);
Vue.use(Search);
Vue.use(Button);
Vue.use(Card);
Vue.use(Swipe);
Vue.use(SwipeItem);


new Vue({
  el:'#app',
  render:h => h(App) ,
  router
})