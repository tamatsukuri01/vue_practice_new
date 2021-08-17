import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    //データを格納する場所。ゲッターを経由してコンポーネントに渡す場合もある
    drawer: false,
    addresses: []
  },
  mutations: {
    //アクションから受け取ったデータをステートに渡す
    toggleSideMenu(state) {
      state.drawer = !state.drawer
    },
    addAddress(state, address) {
      state.addresses.push(address)
    }
  },
  actions: {
    //コンポーネントからデータを取得する指示を受ける
    toggleSideMenu ( { commit }) {
      commit('toggleSideMenu')
    },
    addAddress ({ commit }, address) {
      commit('addAddress', address)
    }
  },
  modules: {
  }
})
