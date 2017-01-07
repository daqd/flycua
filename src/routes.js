// ---------------------------------- 基础组件  -----------------------------------------------------//
import airportList from './components/airportList'

import calendar from './components/calendar'

// ---------------------------------- H5首页 -----------------------------------------------------//
import home from './views/home'

//-----------------------------------用户登录 ----------------------------------------------------//
import loginPage from './views/login/login'

// ---------------------------------- 机票预订模块 --------------------------------------------------//

// 机票查询页
import flightQuery from './views/book/flightQuery'
// 航班列表页
import flightList from './views/book/flightList'
// 订单填写页
import fillInOrder from './views/book/fillInOrder'
// 增值服务页
import addService from './views/book/addService'
//增值服务行李购买
import luggage from './views/book/luggage'
//增值服务餐食购买
import food from './views/book/food'
//订单确认
import orderConfirm from './views/book/orderConfirm'

// ---------------------------------- 会员中心模块 --------------------------------------------------//

//会员中心首页
import userCenterIndex from './views/usercenter/usercenter'



  export default [
  //重定向
  {
    path: '/', redirect: '/index'
  },
  // 首页
  {
    path: '/index', component: home,name:"首页"
  },
  // 城市列表组件
  {
    path: '/airportList', component: airportList,name:"城市选择"
  },
  // 日历组件
  {
    path:'/calendar',component:calendar,name:'日期选择'
  },

  //-------------------------------------------------预订流程-------------------------------------------------//

  // 航班查询
  {
    path: '/book/flightQuery', component: flightQuery,name:'航班查询'
  },
  // 航班查询列表
  {
    path: '/book/flightList', component: flightList,name:"航班列表"
  },
  // 订单填写
  {
    path: '/book/bookFillInOrder', component: fillInOrder,name:"订单填写"
  },
  // 增值服务页
  {
    path:'/book/bookAddService',component:addService,name:"增值服务"
  },
  // 行李托运
  {
    path:'/book/bookAddServiceLuggage',component:luggage,name:"我要托运"
  },
  // 选餐
  {
    path:'/book/bookAddServiceFood',component:food,name:"我要选餐"
  },
  // 订单确认
  {
    path:'/book/bookOrderConfirm',component:orderConfirm,name:"订单确认"
  },

  //------------------------------------------我的联航会员中心-------------------------------------------------//
  // 会员中心首页
  {
    path:'/user/index',component:userCenterIndex,name:"会员中心"
  },

  // 用户登录
  {
    path:'/login',component:loginPage,name:"用户登录"
  },
];
