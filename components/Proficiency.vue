<template>
    <div class="proficiency">
        <v-layout row justify-start>
            <h3>Proficiency</h3>
        </v-layout>
        <v-layout class="pt-4 pr-4 pb-4 pl-0" row wrap justify-start>
            <img class="mr-5" src="/js.svg" alt="">
            <img class="mr-5" src="/angular.svg" alt="">
            <img class="mr-5" src="/vue.svg" alt="">
            <img class="mr-5" src="/react.svg" alt="">
            <img class="mr-5" src="/nodejs-icon.svg" alt="">
        </v-layout>
    </div>

</template>

<style scoped lang="scss">

.proficiency {
  margin-bottom: 1em;

  h3 {
      color: #d24241;
      font-size: 2rem;
  }

  img {
      height: 50px;
  }
}
</style>
<script>
export default {}
</script>
