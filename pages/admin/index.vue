<template>
  <div>
    Admin page
    <froala :tag="'textarea'" :config="config" v-model="model"></froala>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>

export default {
  name: 'admin-page',
  data () {
    return {
      myHTML: '',
      config: {
        events: {
          'froalaEditor.initialized': function () {
            console.log('initialized')
          }
        }
      },
      model: 'Edit Your Content Here!'
    }
  },
  asyncData (context) {
    return { name: 'Brian' }
  },
  layout: 'admin'
}
</script>
