import * as types from './types'

export const state = () => ({})

export const mutations = {}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.user) {
      console.log('settings user', req.user)
      commit(`admin/${types.SET_USER}`, req.user)
    }
  }
}
