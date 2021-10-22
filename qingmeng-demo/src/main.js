/*
 * @Description: 
 * @Autor: 夏晓雪
 * @Date: 2021-10-20 19:06:25
 * @LastEditors: 夏晓雪
 * @LastEditTime: 2021-10-22 10:53:42
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//配置axios
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
//配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入request拦截器
import './utils/request'

// Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
