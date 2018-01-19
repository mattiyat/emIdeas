import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedIdeas: [
      {
        imageURL: require('../assets/cali.jpg'),
        id: '1',
        title: 'Ideas from California',
        date: '20018-7-18'
      },
      {
        imageURL: require('../assets/ny.jpg'),
        id: '2',
        title: 'Ideas from NewYork',
        date: '20018-7-13'
      },
      {
        imageURL: require('../assets/mars.jpg'),
        id: '3',
        title: 'Ideas from Mars',
        date: '20018-5-17'
      }
    ],
    users: {
      id: 'sfgsdfgasfg',
      registeredIdeas: ['awrresdf2234']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    // Load ideas and sort via date
    loadedIdeas (state) {
      return state.loadedIdeas.sort((ideaA, ideaB) => {
        return ideaA.date > ideaB.date
      })
    },
    featuredIdeas (state, getters) {
      return getters.loadedIdeas.slice(0, 5)
    },
    // Load a single Idea
    loadedIdea (state) {
      return (ideaId) => {
        return state.loadedIdeas.find((idea) => {
          return idea.id === ideaId
        })
      }
    }
  }
})