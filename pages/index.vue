<template>
    <div>
        <section class="tag-title-container">
            <v-container fluid class="container">
              <v-layout align-center justify-center column>
                <h1 class="tag-title">
                  The Egoless
                </h1>
                <h2>Developer</h2>
              </v-layout>
            </v-container>
        </section>
        <v-layout column align-center class="content-holder" text-lg-center>
            <v-flex xs10 md10 lg7>
                <About />
                <Proficiency />
                <v-layout column class="social" justify-start align-start>
                  <h3>Follow Me</h3>
                  <SocialMedia />
                </v-layout>
            </v-flex>
        </v-layout>
    </div>
</template>

<style lang="scss" scoped>
.tag-title-container {
  background: #a92a2a;
  padding: 2em 0;

  h1 {
    color: #fff;
    font-size: 8rem;
    text-align: center;
    font-family: -webkit-body;
  }
  h2 {
    font-size: 6rem;
    text-align: center;
    color: #fff;
    font-family: fantasy;
  }
}
.content-holder {
    position: relative;

    .social {
      h3 {
        color: #d24241;
        font-size: 2rem;
      } 
    }
}
</style>
<script>
import About from '../components/About'
import Proficiency from '../components/Proficiency'
import SocialMedia from '../components/SocialMedia'

export default {
  components: {
    About,
    Proficiency,
    SocialMedia
  }
}
</script>
