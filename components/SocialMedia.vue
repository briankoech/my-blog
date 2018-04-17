<template>
    <div class="social">
        <v-layout row justify-start>
            <h3>Social Media</h3>
        </v-layout>
        <v-layout row justify-start>
            <v-layout column align-start>
                <v-icon>fa fa-twitter</v-icon> 
                <span>egolessDev</span>
            </v-layout>
            <v-layout column align-start>
                <v-icon>fa fa-github</v-icon> 
                <span>briankoech</span>
            </v-layout>
            <v-layout column align-start>
                <v-icon>fa fa-linkedin</v-icon> 
                <span>briankoech</span>
            </v-layout>
            <v-layout column align-start>
                <v-icon>fa fa-facebook</v-icon> 
                <span>briankoech</span>
            </v-layout>
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
}
</style>
<script>
export default {}
</script>
