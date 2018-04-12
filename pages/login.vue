
<template>
  <v-layout>
    <v-flex text-xs-center xs12 sm6 offset-sm3>
      <div v-if="loading" class="loading">
        <v-progress-circular indeterminate :size="70" color="primary"></v-progress-circular>
        <h4>Loading...</h4>
      </div>
      <div v-else class="login">
        <v-btn class="signIn mb-2" primary @click.native="googleSignUpPopup">
          Admin Login
        </v-btn>
      </div>
    </v-flex>
     <v-snackbar
      :timeout="timeout"
      :bottom="true"
      v-model="error"
    >
      {{ error }}
    </v-snackbar>
  </v-layout>
</template>

<style>
</style>
<script>
import * as types from '@/store/types'

export default {
  layout: 'login',
  data: () => ({
    timeout: 4000
  }),
  computed: {
    loading () {
      return this.$store.state.admin.loading
    },
    error () {
      return this.$store.state.admin.error
    }
  },
  watch: { },
  methods: {
    async googleSignUpPopup () {
      const res = await this.$store.dispatch(`admin/${types.SIGN_IN_WITH_GOOGLE_POPUP}`)
      if (res) this.$router.push('admin')
    }
  }
}
</script>

