import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaults: {
      dimensions: {
        height: '700px',
        width: '100%'
      }
    }
  },
  getters: {
    getDimensions (state) {
      return state.defaults.dimensions
    }
  },
  mutations: {
    setWidth (state, width) {
      state.defaults.dimensions.width = width
    }
  },
  actions: {
    setWidth (context, width) {
      context.commit('setWidth', width)
    }
  }
})
