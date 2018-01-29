<template>
    <v-card>
        <v-card-title column>
            <v-layout row justify-center>
                <div class="headline">Social Media</div>
            </v-layout>
        </v-card-title>
        <v-layout row justify-space-around>
            <v-layout column align-center >
                <v-icon>fa fa-twitter</v-icon> 
                <span>egolessDev</span>
            </v-layout>
            <v-layout column align-center>
                <v-icon>fa fa-github</v-icon> 
                <span>briankoech</span>
            </v-layout>
            <v-layout column align-center>
                <v-icon>fa fa-linkedin</v-icon> 
                <span>briankoech</span>
            </v-layout>
            <v-layout column align-center>
                <v-icon>fa fa-facebook</v-icon> 
                <span>briankoech</span>
            </v-layout>
        </v-layout>
    </v-card>

</template>

<style scoped lang="scss">
.card {
    margin-bottom: 1em;
}
</style>
<script>
export default {}
</script>
