import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedIdeas: [
      {
        imageUrl: require('../assets/cali.jpg'),
        id: '1',
        title: 'Ideas from California',
        date: new Date(),
        description: 'flying cars'
      },
      {
        imageUrl: require('../assets/ny.jpg'),
        id: '2',
        title: 'Ideas from NewYork',
        date: new Date(),
        description: 'flying bars'
      },
      {
        imageUrl: require('../assets/mars.jpg'),
        id: '3',
        title: 'Ideas from Mars',
        date: new Date(),
        description: 'flying pumblus'
      }
    ],
    users: null
  },
  mutations: {
    logIdea (state, payload) {
      state.loadedIdeas.push(payload)
    },
    setUser (state, payload) {
      state.users = payload
    }
  },
  actions: {
    logIdea ({commit}, payload) {
      const idea = {
        title: payload.title,
        abstract: payload.abstract,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'asdf'
      }
      // reach out to firebase
      commit('logIdea', idea)
    },
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const newUser = {
              id: user.uid,
              backedIdeas: []
            }
            commit('setuser', newUser)
          }
        )
        .catch(
          error => {
            console.log(error)
          }
        )
    }
  },
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
    },
    user (state) {
      return state.user
    }
  }
})
