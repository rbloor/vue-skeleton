export default {
  namespaced: true,
  state: {
    user: null
  },
  getters: {
    user: (state) => state.user,
    authenticated: (state) => !!state.user
  },
  mutations: {},
  actions: {}
}
