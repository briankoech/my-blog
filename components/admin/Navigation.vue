<template>
  <v-navigation-drawer fixed app>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            DASHBOARD
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    <v-list>
      <router-link v-for="(item, index) in navItems" :to="item.link" :key="index">
        <v-list-tile>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </router-link>
    </v-list>
  </v-navigation-drawer>
</template>


<style>
</style>

<script>
export default {
  name: 'navigation',
  data: () => ({
    navItems: [
      {
        title: 'About',
        icon: 'account_box',
        link: 'about'
      },
      {
        title: 'Posts',
        icon: 'chrome_reader_mode',
        link: 'posts'
      },
      {
        title: 'Proficiency',
        icon: 'favorite',
        link: '/'
      }
    ]
  })
}
</script>
