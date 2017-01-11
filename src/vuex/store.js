import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//所有模块应用级状态
import base from './modules/base'
//预订流程应用级状态
import book from './modules/book'
//状态路由信息
import usercenter from './modules/usercenter'

export default new Vuex.Store({
    modules: {
        base,
        book,
        usercenter
    },
    strict: true
})
