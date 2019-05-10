import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DashBoard from '@/components/DashBoardFile'
import CityCheckBox from '@/components/CityCheckBox'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dash',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/city',
      name: 'CityCheckBox',
      component: CityCheckBox
    }
  ]
})