import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    //データを格納する場所。ゲッターを経由してコンポーネントに渡す場合もある
    login_user: null,
    drawer: false,
    addresses: []
  },
  mutations: {
    //アクションから受け取ったデータをステートに渡す
    setLoginUser (state, user) {
      state.login_user = user
    },
    deleteLoginUser(state) {
      state.login_user = null
    },
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    },
    addAddress(state, address) {
      state.addresses.push(address)
    }
  },
  actions: {
    //コンポーネントからデータを取得する指示を受ける
    setLoginUser ({ commit }, user) {
      commit('setLoginUser', user)
    },
    deleteLoginUser({ commit }) {
      commit('deleteLoginUser')
    },
    logout() {
      firebase.auth().signOut()
    },
    login () {
      const google_auth_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    toggleSideMenu ( { commit }) {
      commit('toggleSideMenu')
    },
    addAddress ({ commit }, address) {
      commit('addAddress', address)
    }
  },
  getters: {
    userName: state => state.login_user ? state.login_user.displayName : '',
    photoURL: state => state.login_user ? state.login_user.photoURL: ''
  },
  modules: {
  }
})
