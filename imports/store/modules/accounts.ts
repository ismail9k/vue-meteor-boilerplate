import { MutationPayload } from 'vuex';

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
  user(state: State): null | User {
    return state.user;
  },
};
const mutations = {
  updateUser(state: State, payload: MutationPayload): void {
    state.user = payload;
  },
  logout(state: State): void {
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
