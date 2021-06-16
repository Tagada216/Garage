import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    garageName : "Garage Durant",
    tel : "01 59 59 59 59"
  },
  getters:{
    copyright: state => {
      return `Copyright 2021 ${state.garageName}`
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
