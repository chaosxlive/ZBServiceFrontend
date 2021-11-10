import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    name: null,
    refresh_token: null,
    access_token: null,
    isAuth: false,
  },
  mutations: {
    auth_login(state, {
      refresh_token,
      access_token
    }) {
      state.refresh_token = refresh_token
      state.access_token = access_token
      state.isAuth = true
      localStorage.setItem('refresh_token', refresh_token)
      localStorage.setItem('access_token', access_token)
    },
    auth_logout(state){
      state.refresh_token = null
      state.access_token = null
      state.isAuth = null
      localStorage.removeItem('refresh_token')
      localStorage.removeItem('access_token')
    }
  },
  actions: {
    auth_login({
      commit
    }, {
      app,
      url,
      username,
      password
    }) {
      var isAuth = app.$http
        .post(url, {
          username,
          password
        })
        .then(
          response => {
            if (response.status == 200) {
              commit('auth_login', {
                access_token: response.data.access,
                refresh_token: response.data.refresh
              })
              return true;
            }
            console.log(response);
            return false;
          },
          error => {
            
            console.log(error);
            return false
          }
        );
      return isAuth
    },
    auth_logout({
      commit
    }){
      commit('auth_logout')
    }
  },
  modules: {}
})