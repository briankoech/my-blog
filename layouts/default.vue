<template>
  <v-app>
      <!--navigation-->
      <v-toolbar app fixed>
        <v-container>
          <v-layout row justify-center>
            <router-link class="nav-link" to="/">
              <v-btn flat>
                Egoless Developer
              </v-btn>
            </router-link>

            <v-spacer></v-spacer>
            <v-toolbar-items>
              <router-link class="nav-link" to="blog">
                <v-btn flat>
                    Blog
                </v-btn>
              </router-link>
            </v-toolbar-items>
          </v-layout>
        </v-container>
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

    .container {
      margin: 0 auto;
    }

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
