//设置返回路径
export const setBackPath = ({commit}, path) => {
  commit('BACK_PATH', path)
}

//设置顶部title
export const setHeaderTit = ({commit}, tit) => {
  commit('HEADER_TIT', tit)
}
