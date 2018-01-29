<template>
    <v-card>
        <v-card-title justify-center>
            <v-layout row justify-center>
                <div class="headline">Proficiency</div>
            </v-layout>
        </v-card-title>
        <v-layout class="pt-0 pa-4" row wrap justify-space-around>
            <img src="/js-images/js.svg" alt="">
            <img src="/angular-images/angular.svg" alt="">
            <img src="/vue-images/vue.svg" alt="">
            <img src="/react-images/react.svg" alt="">
            <img src="/nodejs-images/nodejs-icon.svg" alt="">
        </v-layout>
    </v-card>

</template>

<style scoped lang="scss">

.card {
    margin-bottom: 1em;

    img {
        height: 50px;
    }
}
</style>
<script>
export default {}
</script>
