import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import  './utils/request'
// import '@vant/touch-emulator'; //这个库会在桌面端自动将mouse事件转换成对应的touch事件，使得组件能够在桌面端使用。
// import VueTouch from 'vue-touch'  //左右滑动插件
import BScroll from 'better-scroll' //鼠标上下滚动插件
import { TweenLite } from 'gsap' //TweenMax动画库

import {post,get} from './utils/http'
import api from '@/api/index'
import Vant from 'vant';
import 'vant/lib/index.css';


import '@/assets/css/animate.css';
import '@/assets/fonts/iconfont.css';


Vue.config.productionTip = false;
Vue.prototype.$BScroll = BScroll;
Vue.prototype.$TweenLite = TweenLite;

Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$api = api;
// Vue.use(VueTouch,{name:'v-touch'});







Vue.use(Vant);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
