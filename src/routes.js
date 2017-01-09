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
//订单管理
import orderControl from './views/usercenter/orderControl'
//增值服务订单管理
import _Manage_AddServiceOrder from './views/usercenter/orderManagement/addServiceOrder'
//年票订单管理
import _Manage_AnnualTicketOrder from './views/usercenter/orderManagement/annualTicketOrder'
//机票订单管理
import _Manage_FlightOrder from './views/usercenter/orderManagement/flightOrder'
//酒店订单管理
import _Manage_HotelOrder from './views/usercenter/orderManagement/hotelOrder'
//保险订单管理
import _Manage_SafeOrder from './views/usercenter/orderManagement/safeOrder'
//不正常改期
import irregularFlight from './views/usercenter/irregularFlight'
//查看所有红包
import viewAllRedPaper from './views/usercenter/viewAllRedPaper'
//查看个人信息
import viewUserDetails from './views/usercenter/viewUserDetails'
//修改登录密码
import changeLoginPwd from './views/usercenter/changeLoginPwd'
//常用乘机人
import viewPassengers from './views/usercenter/viewPassengers'
//常用地址
import viewAddress from './views/usercenter/viewAddress'


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
    path:'/user/usercenter',component:userCenterIndex,name:"尊敬的会员"
  },
  // 订单管理
  {
    path:'/user/orderControl',component:orderControl,name:"订单管理"
  },
  // 订单管理
  {
    path:'/user/orderControl',component:orderControl,name:"订单管理"
  },
  // 机票订单管理
  {
    path:'/user/orderControl/flightOrder',component:_Manage_FlightOrder,name:"机票订单"
  },
  // 增值服务订单管理
  {
    path:'/user/orderControl/addServiceOrder',component:_Manage_AddServiceOrder,name:"增值服务订单"
  },
  // 年票订单管理
  {
    path:'/user/orderControl/annualOrder',component:_Manage_AnnualTicketOrder,name:"年票订单"
  },
  // 酒店订单管理
  {
    path:'/user/orderControl/hotelOrder',component:_Manage_HotelOrder,name:"酒店订单"
  },
  // 保险订单管理
  {
    path:'/user/orderControl/safeOrder',component:_Manage_SafeOrder,name:"保险订单"
  },
  //不正常航班改期
  {
    path:'/user/irregularFlight',component:irregularFlight,name:"不正常航班改期"
  },
  //查看所有红包
  {
    path:'/user/viewAllRedPaper',component:viewAllRedPaper,name:"查看所有红包"
  },
  //查看个人信息
  {
    path:'/user/viewUserDetails',component:viewUserDetails,name:'查看个人信息'
  },
  //修改登录密码
  {
    path:'/user/changeLoginPwd',component:changeLoginPwd,name:'修改登录密码'
  },
  //常用乘机人
  {
    path:'/user/viewPassengers',component:viewPassengers,name:'常用乘机人'
  },
  //常用地址
  {
    path:'/user/viewAddress',component:viewAddress,name:'常用地址'
  },
  // 用户登录
  {
    path:'/login',component:loginPage,name:"用户登录"
  },
];
