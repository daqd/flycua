import {
    SET_MENU,
    SET_MENU_ACTIVE,
    BACK_PATH
} from '../mutation-types'

let state = {
    backPath: '', //返回路径

    /** 航班信息 **/
    flightType:'single',      //乘机类型：单程或往返 single/multiple
    orgCity:'',         //出发城市
    orgCityNo:'',       //出发城市三字码
    dstCity:'',         //到达城市
    dstCityNo:'',       //到达城市三字码
    orgDate:'',         //出发日期
    dstDate:'',         //到达日期

    /** 乘机人数量信息 **/
    passengerNum:{
      adult:1,
      child:0,
      baby:0
    }

}
const mutations = {
    [SET_MENU](state, index_nav) {
        state.index_nav = index_nav;
    },
    [BACK_PATH](state, _path) {
        //设置返回按钮跳转路径,router.afterEach设置
        state.backPath = { path: _path };
    }
}

export default {
    state,
    mutations
}
