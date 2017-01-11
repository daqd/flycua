// ---------------------------------- 禁止按需加载的组件  -----------------------------------------------------//
//机场列表
import airportList from './components/airportList'
//日历控件
import calendar from './components/calendar'
//首页
import home from './views/home'
//登录页
import loginPage from './views/login/login'
// 机票查询页
import flightQuery from './views/book/flightQuery'
// ---------------------------------- 禁止按需加载的组件结束  -----------------------------------------------------//

  export default [
  //重定向
  {
    path: '/', redirect: '/home'
  },
  // 首页
  {
    path: '/home',
    component:home,
    name:"中国联航"
  },
  // 城市列表组件
  {
    path: '/airportList',
    component: airportList,
    name:"城市选择"
  },
  // 日历组件
  {
    path:'/calendar',
    component: calendar,
    name:'日期选择'
  },

  //-------------------------------------------------预订流程-------------------------------------------------//

  // 航班查询
  {
    path: '/book/flightQuery',
    component: resolve => {
            require(['./views/book/flightQuery.vue'], resolve)
        },
    name:'航班查询'
  },
  // 航班查询列表
  {
    path: '/book/flightList',
    component: resolve => {
            require(['./views/book/flightList.vue'], resolve)
        },
    name:"航班列表"
  },
  // 订单填写
  {
    path: '/book/bookFillInOrder',
    component: resolve => {
            require(['./views/book/fillInOrder.vue'], resolve)
        },
    name:"订单填写"
  },
  // 增值服务页
  {
    path:'/book/bookAddService',
    component: resolve => {
            require(['./views/book/addService.vue'], resolve)
        },
    name:"增值服务"
  },
  // 行李托运
  {
    path:'/book/bookAddServiceLuggage',
    component: resolve => {
            require(['./views/book/luggage.vue'], resolve)
        },
    name:"我要托运"
  },
  // 选餐
  {
    path:'/book/bookAddServiceFood',
    component: resolve => {
            require(['./views/book/food.vue'], resolve)
        },
    name:"我要选餐"
  },
  // 订单确认
  {
    path:'/book/bookOrderConfirm',
    component: resolve => {
            require(['./views/book/orderConfirm.vue'], resolve)
        },
    name:"订单确认"
  },

  //------------------------------------------我的联航会员中心-------------------------------------------------//
  // 会员中心首页
  {
    path:'/user/usercenter',
    component: resolve => {
            require(['./views/usercenter/index.vue'], resolve)
        },
    name:"尊敬的会员"
  },
  // 订单管理
  {
    path:'/user/orderControl',
    component: resolve => {
            require(['./views/usercenter/orderControl.vue'], resolve)
        },
    name:"订单管理"
  },
  // 机票订单管理
  {
    path:'/user/orderControl/flightOrder',
    component: resolve => {
            require(['./views/usercenter/orderManagement/flightOrder.vue'], resolve)
        },
    name:"机票订单"
  },
  // 增值服务订单管理
  {
    path:'/user/orderControl/addServiceOrder',
    component: resolve => {
            require(['./views/usercenter/orderManagement/addServiceOrder.vue'], resolve)
        },
    name:"增值服务订单"
  },
  // 年票订单管理
  {
    path:'/user/orderControl/annualOrder',
    component: resolve => {
            require(['./views/usercenter/orderManagement/annualTicketOrder.vue'], resolve)
        },
    name:"年票订单"
  },
  // 酒店订单管理
  {
    path:'/user/orderControl/hotelOrder',
    component: resolve => {
            require(['./views/usercenter/orderManagement/hotelOrder.vue'], resolve)
        },
    name:"酒店订单"
  },
  // 保险订单管理
  {
    path:'/user/orderControl/safeOrder',
    component: resolve => {
            require(['./views/usercenter/orderManagement/safeOrder.vue'], resolve)
        },
    name:"保险订单"
  },
  //不正常航班改期
  {
    path:'/user/irregularFlight',
    component: resolve => {
            require(['./views/usercenter/irregularFlight.vue'], resolve)
        },
    name:"不正常航班改期"
  },
  //查看所有红包
  {
    path:'/user/viewAllRedPaper',
    component: resolve => {
            require(['./views/usercenter/viewAllRedPaper.vue'], resolve)
        },
    name:"查看所有红包"
  },
  //查看个人信息
  {
    path:'/user/viewUserDetails',
    component: resolve => {
            require(['./views/usercenter/viewUserDetails.vue'], resolve)
        },
    name:'查看个人信息'
  },
  //修改登录密码
  {
    path:'/user/changeLoginPwd',
    component: resolve => {
            require(['./views/usercenter/changeLoginPwd.vue'], resolve)
        },
    name:'修改登录密码'
  },
  //常用乘机人
  {
    path:'/user/viewPassengers',
    component: resolve => {
            require(['./views/usercenter/viewPassengers.vue'], resolve)
        },
    name:'常用乘机人'
  },
  //常用地址
  {
    path:'/user/viewAddress',
    component: resolve => {
            require(['./views/usercenter/viewAddress.vue'], resolve)
        },
    name:'常用地址'
  },
  //------------------------------------------途家酒店模块------------------------------------------------//
  {
    path:'/tujia',
    component: resolve => {
            require(['./views/tujia/index.vue'], resolve)
        },
    name:'途家'
  },

  //------------------------------------------增值服务模块------------------------------------------------//
  {
    path:'/addService',
    component: resolve => {
            require(['./views/addService/index.vue'], resolve)
        },
    name:'增值服务购买'
  },

  //------------------------------------------年票模块------------------------------------------------//
  {
    path:'/annualTicket',
    component: resolve => {
            require(['./views/annualTicket/index.vue'], resolve)
        },
    name:'年票'
  },

  //------------------------------------------航班动态模块------------------------------------------------//
  {
    path:'/dynamic',
    component: resolve => {
            require(['./views/dynamic/index.vue'], resolve)
        },
    name:'航班动态'
  },

  //------------------------------------------保险专区模块------------------------------------------------//
  {
    path:'/insurance',
    component: resolve => {
            require(['./views/insurance/index.vue'], resolve)
        },
    name:'保险专区'
  },

  //------------------------------------------爱旅游模块------------------------------------------------//
  {
    path:'/iTour',
    component: resolve => {
            require(['./views/iTour/index.vue'], resolve)
        },
    name:'爱旅游'
  },

  //------------------------------------------关于我模块------------------------------------------------//
  {
    path:'/about',
    component: resolve => {
            require(['./views/about/index.vue'], resolve)
        },
    name:'关于我们'
  },  //------------------------------------------用户登录及注册-------------------------------------------------//

  // 用户登录
  {
    path:'/login',
    component:loginPage,
    name:"用户登录"
  },

  // 底部新闻
  {
    path:'/news',
    component: resolve => {
            require(['./views/news/index.vue'], resolve)
        },
    name:"新闻"
  },

  // 底部在线客服
  {
    path:'/onlineServer',
    component: resolve => {
            require(['./views/onlineServer/index.vue'], resolve)
        },
    name:"在线客服"
  },
];
