const state = {
  user: null,
};
const getters = {
  user(state) {
    return state.user;
  },
};
const mutations = {
  updateUser(state, payload) {
    state.user = payload;
  },
  logout(state) {
    state.user = null;
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
