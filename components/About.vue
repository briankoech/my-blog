<template>
  <div class="about">
      <v-layout row justify-start>
          <h3>About Brian Koech</h3>
      </v-layout>
      <v-layout column class="about-text">
          <p>
          I am a Software Engineer based out of Nairobi, Kenya, currently working in an awesome Digital Signage company, <a href="https://roam.io" target="_blank">ROAM.IO</a>, based out of Dallas, Tx. I enjoy making myself useful by taking problems and turning them into beatiful User Interface designs - one line at a time.</p>
          <p>I am proficient in NodeJS, Angular 1.x, /([2,4,5])/g, VueJs, React, Laravel </p>
          <p>I love programming and always like learning new technologies. When I am not coding, I enjoy cold beer, or some nice Whisky on the Rocks - Thank God for Fermentation.</p>
      </v-layout>

  </div>
</template>
<style lang="scss" scoped>
.about {
  margin-top: 2rem;
  margin-bottom: 1em;
  text-align: start;

  h3 {
    color: #d24241;
    font-size: 2rem;
  }

  .about-text {
    p {
      line-height: 1.7em;
      font-size: 1.3em; 
    }
  }
}

</style>
<script>
export default {}
</script>
