<template>
  <div>
    Admin page
    <editor></editor>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
import Editor from '@/components/admin/Editor'

export default {
  name: 'admin-page',
  components: {
    Editor
  },
  data () {
    return {
      model: 'Edit Your Content Here!'
    }
  },
  asyncData (context) {
    return { name: 'Brian' }
  },
  methods: {
    setCommand (command) {
      // this.$refs.text.select()
      try {
        console.log('setComand', command)
        document.execCommand('formatBlock', false, command)
      } catch (e) {
        console.log(e)
      }
    }
  },
  layout: 'admin'
}
</script>
