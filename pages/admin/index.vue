<template>
  <div>
    Admin page
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'admin-page',
  asyncData (context) {
    return { name: 'Brian' }
  },
  layout: 'admin'
}
</script>
