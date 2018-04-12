import * as types from './types'
// import axios from 'axios'
import { Auth, GoogleProvider } from '../plugins/firebase-client-init'

export const state = () => ({
  authUser: null,
  loading: false,
  error: null
})

export const mutations = {
  [types.SET_USER] (state, user) {
    state.authUser = user
  },
  [types.SET_LOADING] (state, value) {
    state.loading = value
  },
  [types.SET_ERROR] (state, value) {
    state.error = value
  }
}

export const actions = {
  async [types.SIGN_IN_WITH_GOOGLE_POPUP] ({ commit, redirect, dispatch }) {
    commit(types.SET_LOADING, true)
    commit(types.SET_ERROR, null)
    try {
      const { user } = await Auth.signInWithPopup(GoogleProvider)
      const { email, displayName: name, uid, photoURL: picture } = user
      if (email !== 'brnkoech@gmail.com') {
        dispatch(types.SIGN_OUT)
        return false
      }
      commit(types.SET_USER, { email, name, uid, picture })
      commit(types.SET_LOADING, false)
      return true
    } catch (e) {
      commit(types.SET_LOADING, false)
      commit(types.SET_ERROR, e.code)
      return false
    }
  },

  async [types.SIGN_OUT] ({ commit }) {
    await Auth.signOut()
    commit(types.SET_USER, null)
    console.log(this)
    this.app.router.push('/')
  }
}
