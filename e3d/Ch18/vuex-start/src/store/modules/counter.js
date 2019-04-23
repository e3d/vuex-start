const state = {
  msg: 'e3d',
  count: 0
}

const getters = {}

const mutations = {
  increment: state => state.count++,
  decrement: state => state.count--
}

const actions = {
  increment ({ commit }) { commit('increment') },
  decrement ({ commit }) { commit('decrement') }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
