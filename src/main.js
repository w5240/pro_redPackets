// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//组件
import czbutton from './components/CZbutton.vue'

Vue.component('czbutton',czbutton);

Vue.config.productionTip = false;

// 引入 reset ·样式表
import '@/components/style/reset.css'

/* eslint-disable no-new */
function init(){
  new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
      App
    }
  })
}
init();

