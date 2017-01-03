// ---------------------------------- 基础组件  -----------------------------------------------------//
import airportList from './components/airportList'

import calendar from './components/calendar'

// ---------------------------------- H5首页 -----------------------------------------------------//
import home from './views/home'

// ---------------------------------- 机票预订模块 --------------------------------------------------//

// 机票查询页
import flightQuery from './views/book/flightQuery'
// 航班列表页
import flightList from './views/book/flightList'
// 订单填写页
import fillInOrder from './views/book/fillInOrder'
// 增值服务页
import addService from './views/book/addService'

  export default [
  {
    path: '/', redirect: '/index'
  },
  {
    path: '/index', component: home,name:"首页"
  },
  {
    path: '/airportList', component: airportList,name:"城市选择"
  },
  {
    path:'/calendar',component:calendar,name:'日期选择'
  },
  {
    path: '/book', component: flightQuery
  },
  {
    path: '/book/flightList', component: flightList,name:"航班列表"
  },
  {
    path: '/book/bookFillInOrder', component: fillInOrder,name:"订单填写"
  },
  {
    path:'/book/bookAddService',component:addService,name:"增值服务"
  }
];
