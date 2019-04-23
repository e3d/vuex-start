import Vue from 'vue'
import Vuex from 'vuex'
import counter from './modules/counter'
import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    counter,
    products
  },
  strict: debug  
})