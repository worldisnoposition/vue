// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import CityCheckBox from './components/CityCheckBox'
import EchartDemo from './components/EchartDemo'
import echarts from 'echarts'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#city',
  router,
  components: { CityCheckBox },
  template: '<CityCheckBox/>'
})

Vue.prototype.$echarts = echarts
new Vue({
  el: '#myChart',
  router,
  components: { EchartDemo },
  template: '<EchartDemo/>'
})

