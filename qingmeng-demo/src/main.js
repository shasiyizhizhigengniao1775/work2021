import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
//配置axios
Vue.use(VueAxios, axios)
// Vue.config.productionTip = false
//配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引入request拦截器
import './utils/request'

// Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.min.css'
//mixin全局混入
Vue.mixin({
  data() {
    return {}
  },
  methods: {
    getAbsPath(imagePath) {
      return process.env.VUE_APP_API_URL + "/" + imagePath;
    },
  }

})
//过滤器
Vue.filter('NumFormat', function (value) {
  value += "";
  if (!value) return "0.00";
  let intPart = Number(value).toFixed(0); //获取整数部分
  let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,"); //将整数部分逢三一断
  let floatPart = ".00"; //预定义小数部分
  let value2Array = value.split(".");
  //=2表示数据有小数位
  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString(); //拿到小数部分
    if (floatPart.length === 1) {
      //补0,实际上用不着
      return intPartFormat + "." + floatPart + "0";
    }
    return intPartFormat + "." + floatPart;
  }
  return intPartFormat + floatPart;
})
Vue.filter("dateFormat", function(date, fmt) {
  date = new Date(date);
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString(), // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(
        ret[1],
        ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0")
      );
    }
  }
  return fmt;
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
