import { createStore } from 'vuex';

export default createStore({
  state: {
    server: {
      // requestUri: 'http://127.0.0.1:3000/api/v1',
      requestUri: 'https://tourist-ms.herokuapp.com/api/v1',
    },
    accessToken: localStorage.getItem('access_token') || null,
    user: JSON.parse(localStorage.getItem('user')) || null,
  },

  getters: {
    isLoggedIn(state) {
      if (state.accessToken !== null && state.accessToken !== 'loggedout') {
        return true;
      } else {
        return false;
      }
    },
  },

  mutations: {
    // Authentication mutations
    login(state, payload) {
      localStorage.setItem('access_token', payload.accessToken);
      localStorage.setItem('user', JSON.stringify(payload.user));
      state.accessToken = payload.accessToken;
      state.user = payload.user;
    },
    logout(state) {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      state.accessToken = null;
      state.user = null;
    },
    removeUser(state) {
      state.user = null;
    },
    removeToken(state) {
      localStorage.removeItem('access_token');
      state.accessToken = null;
    },
    setToken(state, payload) {
      localStorage.setItem('access_token', payload.accessToken);
      state.accessToken = payload.accessToken;
    },
    updateUser(state, user) {
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },
  },

  actions: {},
  modules: {},
});
