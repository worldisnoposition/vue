<template>
    <div>选择网站<br/>
      <input type='checkbox' class='input-checkbox'  @click='checkedAll()'>全选
      <div v-for='(webSite, index) in webSites' :key="index">
          <!--判断fruitIds是否包含当前fruit，fruitIds.indexOf(fruit.fruitId)返回包含fruit的下标, 若不包含则返回-1-->
         <input type='checkbox' :checked="webSiteIds.indexOf(webSite.id)>=0" name='checkboxinput' class='input-checkbox'
          @click='checkedOne(webSite.id)' >
         {{webSite.name}}
      </div>
      <input placeholder="请输入查询城市" v-model='cityName' @keyup.enter="addCity"/>
      <button value="add" @click="addCity">添加城市</button>
      <button value="clear" @click="resetCity">清空城市</button>
      <br/>
      <div v-for='(city, index) in cities' :key="index">
        <li>{{city}}</li>
      </div>
      <input placeholder="职位关键字" v-model='jobName' />
      <br/>
      <button :disabled="!webSites.length>0" value="open" @click="openWebPage()">开启爬取页面</button>
      <hr/>
    </div>
</template>
<script>

import bossCityList from '../assets/data/bossCityList.json'
import zhipinCityList from '../assets/data/zhilianCityList.json'

let bossCities = bossCityList
let zhilianCities = zhipinCityList

export default {
  name: 'CityCheckBox',
  data () {
    return {
      webSites: [
        {
          id: 1,
          name: 'Boss直聘',
          url: 'https://www.zhipin.com/job_detail/'
        },
        {
          id: 2,
          name: '智联招聘',
          url: 'https://sou.zhaopin.com'
        },
        {
          id: 3,
          name: '100offer',
          url: 'https://cn.100offer.com/job_positions'
        }
      ],
      webSiteIds: [],
      // 初始化全选按钮, 默认不选
      isWebSiteCheckedAll: false,
      cities: [],
      cityName: '',
      jobName: ''
    }
  },
  methods: {
    checkedOne (webSiteId) {
      let idIndex = this.webSiteIds.indexOf(webSiteId)
      if (idIndex >= 0) {
        // 如果已经包含了该id, 则去除(单选按钮由选中变为非选中状态)
        this.webSiteIds.splice(idIndex, 1)
      } else {
        // 选中该checkbox
        this.webSiteIds.push(webSiteId)
      }
    },
    checkedAll () {
      this.isWebSiteCheckedAll = !this.isWebSiteCheckedAll
      if (this.isWebSiteCheckedAll) {
        // 全选时
        this.webSiteIds = []
        this.webSites.forEach(function (webSite) {
          this.webSiteIds.push(webSite.webSiteId)
        }, this)
      } else {
        this.webSiteIds = []
      }
    },
    openWebPage () {
      this.webSites.forEach(function (webSite) {
        this.cities.forEach((item, index, array) => {
          let url, cityId
          switch (webSite.id) {
            case 1:
              cityId = bossCities[item]
              url = webSite.url + '?query=' + this.jobName + '&city=' + cityId + '&industry=&position='
              break
            case 2:
              cityId = zhilianCities[item]
              url = webSite.url + '?jl=' + cityId + '&kw=' + this.jobName + '&kt=3&sf=0&st=0'
              break
            case 3:
              url = webSite.url + '?jobName=' + this.jobName
              break
            default:
              alert('数据异常')
              console.error('数据异常' + webSite)
              url = null
          }
          console.log(url)
          if (url) {
            this.webSiteIds.indexOf(webSite.id) >= 0 ? window.open(url) : console.log('未选中' + webSite.name)
          }
        })
      }, this)
    },
    addCity () {
      this.cities.push(this.cityName)
      console.log(this.cities)
      this.cityName = ''
    },
    resetCity () {
      this.cities = []
    }
  }
}
</script>
