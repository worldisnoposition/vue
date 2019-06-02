<template>
  <div id='myChart' :style="{width: '600px', height: '400px'}"></div>
</template>

<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios, axios)
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    console.log('hello')
    Vue.axios.post('http://localhost:8080/echart/statistic', {params: {'fdsa': 'asdf'}})
      .then((res) => {
        this.drawLine(res.data)
      })
  },
  methods: {
    drawLine (data) {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      console.log(data)
      console.log(data.companyNames)
      console.log(data.jobNumbers)
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {
          trigger: 'axis'
        },
        grid: {
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: true,
            data: data.companyNames,
            axisLabel: {
              show: true,
              rotate: -15,
              interval: 0
            }
          }
        ],
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: data.jobNumbers
        }]
      })
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scopedApp>
</style>
