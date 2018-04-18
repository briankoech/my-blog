<template>
    <div class="social">
        <v-layout row justify-start>
            <h3>Follow Me!</h3>
        </v-layout>
        <v-layout row justify-start class="social-media">
          <v-tooltip top>
              <v-icon slot="activator">fa fa-twitter</v-icon> 
              <span>egolessDev</span>
          </v-tooltip>
          <v-tooltip top column align-start>
              <v-icon slot="activator">fa fa-github</v-icon> 
              <span>briankoech</span>
          </v-tooltip>
          <v-tooltip top column align-start>
              <v-icon slot="activator">fa fa-linkedin</v-icon> 
              <span>briankoech</span>
          </v-tooltip>
          <v-tooltip top column align-start>
              <v-icon slot="activator">fa fa-facebook</v-icon> 
              <span>briankoech</span>
          </v-tooltip>
        </v-layout>
    </div>

</template>

<style scoped lang="scss">
.social {
    margin-bottom: 1em;

    h3 {
      color: #d24241;
      font-size: 2rem;
      margin-bottom: .5em;
    }

    .sociial-icon {
      width: 50px;
      height: 50px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 10px;
    }

    i {
      width: 40px;
      height: 40px;
      margin: 10px 10px 10px 0;
      color: #fff;
    }
    .fa-twitter {
      background: #55ACEE;
    }

    .fa-linkedin {
      background: #007bb5;
    }

    .fa-github {
      background: #555555;
    }

    .fa-facebook {
      background: #3B5998;
    }
}
</style>
<script>
export default {}
</script>
