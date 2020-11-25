import { MutationPayload } from "vuex";

type User = {
  [key: string]: any;
};
type State = {
  user: null | User;
};

const state: State = {
  user: null,
};
const getters = {
  user(state: State) {
    return state.user;
  },
};
const mutations = {
  updateUser(state: State, payload: MutationPayload) {
    state.user = payload;
  },
  logout(state: State) {
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
