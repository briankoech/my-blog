<template>
  <v-app>
      <!--navigation-->
      <v-toolbar app fixed>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <router-link class="nav-link" to="blog">
            <v-btn flat>
                Blog
            </v-btn>
          </router-link>
          <router-link class="nav-link" to="portfolio">
            <v-btn flat>
                Portfolio
            </v-btn>
          </router-link>
        </v-toolbar-items>
      </v-toolbar>
      <!--navigation-->
      
      <!--displays the page components-->
      <v-content>
          <v-container fluid class="pa-0">
            <nuxt />
          </v-container>
      </v-content>

      <v-footer fixed app>
        <span>Brian Koech &copy; 2017</span>
      </v-footer>
  </v-app>
</template>

<style lang="scss" scoped>
.toolbar {
  background: #a92a2a;
  color: #fff;

  .toolbar__content {
    background: #a92a2a;
    color: #fff;

    .nav-link {
      text-decoration: none;
      color: #fff;
      display: flex;

      button {
        flex: 1;
        color: #fff;
        height: auto;
        margin: 0;
      }
    }
  }
}
</style>

<script>

</script>
