import {
  BACK_PATH,
  HEADER_TIT,

} from './mutation-types'

const mutations = {
  //设置返回路径
  [BACK_PATH] (state, path) {
    state.backPath = path
  },
  //设置顶部tit
  [HEADER_TIT] (state, tit) {
    state.headerTit = tit
  },
}


export default mutations;
