<template>
  <div>
    <v-layout>
      <v-flex text-xs-center xs12 sm6 offset-sm3>
        <div v-if="loading" class="loading">
          <v-progress-circular indeterminate :size="70" color="primary"></v-progress-circular>
          <h4>Loading...</h4>
        </div>
        <div v-else class="login">
          <v-btn class="sign-in mb-2" primary @click.native="googleSignUpPopup">
            Admin Login
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<style>
.sign-in {
  color: #fff;
  background: red;
}
</style>

<script>
export default {
  name: 'login-page',
  computed: {
    loading () { return this.$store.state.loading }
  },
  asyncData () {},
  layout: 'login',
  methods: {
    googleSignUpPopup () {}
  }
}
</script>
