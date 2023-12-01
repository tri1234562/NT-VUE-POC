import { createStore } from 'vuex';

export default createStore({
  state: {
    users: [],
  },
  mutations: {
    addUser(state, newUser) {
      state.users.push(newUser);
    },
  },
  actions: {
    signup({ commit }, newUser) {
      commit('addUser', newUser);
    },
  },
  getters: {
    getUsers: (state) => state.users
  },
});