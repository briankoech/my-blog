<template>
  <v-app>
      <!--navigation-->
      <v-toolbar app fixed>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>
                <router-link to="/blog">
                    Blog
                </router-link>
            </v-btn>
            <v-btn flat>
                <router-link to="/new">
                    Portfolio
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

<style lang="scss" scoped>
.toolbar {
  background: #a92a2a;
  color: #fff;

  .toolbar-content {
    background: #a92a2a;
    color: #fff;

    a {
      text-decoration: none;
      color: #fff;
    }
  }
}
</style>

<script>

</script>
