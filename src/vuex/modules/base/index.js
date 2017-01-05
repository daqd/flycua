/**
 * Created by mimengyu on 16/12/19.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutation'

const state = {
  backPath:'',
  headerTit:'',
  loginStatus:false,
  token:''
}

export default{
  state,
  actions,
  getters,
  mutations
}
