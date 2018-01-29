<template>
    <div>
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">
                    </h1>
                    <h2 class="subtitle">
                    </h2>
                </div>
            </div>
        </section>
        <v-layout column align-center class="content-holder" text-lg-center>
            <v-flex xs md8 lg5>
                <About />
                <Proficiency />
                <SocialMedia />
            </v-flex>
        </v-layout>
    </div>
</template>

<style lang="scss" scoped>
.content-holder {
    position: relative;
    top: -12em;
}
</style>
<script>
import About from '../components/About'
import Proficiency from '../components/Proficiency'
import SocialMedia from '../components/SocialMedia'

export default {
  head: {
    title: 'Home'
  },
  components: {
    About,
    Proficiency,
    SocialMedia
  }
}
</script>
