import { createStore } from 'vuex'
import {
  getPostsApi,
  createPostApi,
  deletePostApi
} from '@/api/requests'
import { encrypt, decrypt } from '@/helpers/encrypt'

export default createStore({
  state: {
    isRequest: false,
    messagesArr: [],
    name: ''
  },
  getters: {
    getIsRequest(state) {
      return state.isRequest
    },
    getMessagesArr(state) {
      return state.messagesArr
    }
  },
  mutations: {
    setName(state, payload) {
      state.name = payload
    },
    toggleisRequest(state, payload) {
      state.isRequest = payload
    },
    addMessage(state, payload) {
      // state.messagesArr.push(payload)
      state.messagesArr = [...state.messagesArr, { ...payload, text: decrypt(payload.text) }]
    },

    addPosts(state, payload) {
      state.messagesArr = payload.map(el => el.text = decrypt(el.text))
    },

  },
  actions: {
    setName({ commit }, payload) {
      commit('setName', payload)
    },
    addMessage({ commit, state }, payload) {
      commit('toggleisRequest', true)
      createPostApi({ text: encrypt(payload), username: state.name ? state.name : 'Аноним' })
        .then(res => {
          commit('addMessage', res.data)
          commit('toggleisRequest', false)
        })
        .catch(err => {
          console.log(err)
        })
    },

    getPosts({ commit }) {
      commit('toggleisRequest', true)
      getPostsApi()
        .then(res => {
          commit('addPosts', res.data)
          commit('toggleisRequest', false)
        })
        .catch(err => {
          console.log(err)
        })
    },

    deletePost({ commit, dispatch }, payload) {
      console.log(payload);
      commit('toggleisRequest', true)
      deletePostApi(payload)
        .then(res => {
          // state.isRequest = false
          dispatch('getPosts')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
})
