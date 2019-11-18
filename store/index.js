import Vue from 'vue'
import Vuex from 'vuex'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo,
    home
  },
  actions: {
    async nuxtServerInit({ commit }, { req, app }) {
      const { status, data: { province, city } } = await app.$axios('/geo/getPosition')
      if (status === 200) {
        commit('geo/setPosition', { city, province })
      } else {
        commit('geo/setPosition', {})
      }
      if (req.ctx.request.url === '/') {
        const { status, data: { menu } } = await app.$axios.get('geo/menu')
        commit('home/setMenu', status === 200 ? menu : {})
      }
      const { status: hotStatus, data: { result } } = await app.$axios.get('/search/hotPlace', {
        params: {
          city: app.store.state.geo.position.city.replace('市', '')
        }
      })
      commit('home/setHotPlace', hotStatus === 200 ? result : [])
    }
  }
})

export default store
