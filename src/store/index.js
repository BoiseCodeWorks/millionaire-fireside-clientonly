import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let api = Axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async getQuestions({ commit, dispatch }) {
      try {
        let res = await api.get('questions')
        console.log("from getQuestions", res)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
