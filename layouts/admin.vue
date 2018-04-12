<template>
  <v-app light>
    <navigation></navigation>
    <toolbar></toolbar>
    <main>
      <v-content>
        <v-container fluid grid-list-md>
          <nuxt />
        </v-container>
      </v-content>
    </main>
  </v-app>
</template>

<style>
</style>

<script>
import Navigation from '@/components/admin/Navigation'
import Toolbar from '@/components/admin/Toolbar'

export default {
  name: 'admin-layout',
  components: {
    Navigation,
    Toolbar
  }
}
</script>
