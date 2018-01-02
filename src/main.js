// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

//之所以把Hls挂载window对象上，是因为当DPlayer.video.type='hls'时，new DPlayer()对象会用到此对象。
window.Hls = require('hls.js');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
