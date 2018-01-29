<template>
  <v-app>
      <!--navigation-->
      <v-toolbar app fixed>
        <router-link to="/">
            <v-toolbar-title>
                Egoless Dev
            </v-toolbar-title>
        </router-link>
        <v-spacer></v-spacer>
        <v-toolabar-side-icon class="hidden-md-and-up"></v-toolabar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>
                <router-link to="/blog">
                    Blog
                </router-link>
            </v-btn>
            <v-btn flat>
                <router-link to="/new">
                    New
                </router-link>
            </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <!--navigation-->
      
      <!--displays the page components-->
      <v-content>
          <v-container fluid class="pa-0">
            <nuxt />
          </v-container>
      </v-content>
  </v-app>
</template>

<style>

</style>
