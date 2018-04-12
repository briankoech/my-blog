import * as types from './types'
// import axios from 'axios'
import { Auth, GoogleProvider } from '../plugins/firebase-client-init'

export const state = () => ({
  authUser: null,
  loading: false
})

export const mutations = {
  [types.SET_USER] (state, user) {
    state.authUser = user
  },
  [types.SET_LOADING] (state, value) {
    state.loading = value
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    console.log('server init', req.user)
    if (req.user) {
      commit(types.SET_USER, req.user)
    }
  },

  async [types.SIGN_IN_WITH_GOOGLE_POPUP] ({ commit, redirect }) {
    commit(types.SET_LOADING, true)
    try {
      const { user } = await Auth.signInWithPopup(GoogleProvider)
      const { email, displayName: name, uid, photoURL: picture } = user

      commit(types.SET_USER, { email, name, uid, picture })
      commit(types.SET_LOADING, false)
      return true
    } catch (e) {
      console.log(e)
      commit(types.SET_LOADING, false)
      return false
    }
  },

  async [types.SIGN_OUT] ({ commit }) {
    await Auth.signOut()
    commit(types.SET_USER, null)
  }
}
