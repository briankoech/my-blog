<template>
  <div>
   <div class="quill-editor" 
         v-model="content"
         v-quill:myQuillEditor="editorOption">
    </div>

    <div v-html="content"></div>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
  name: 'my-editor',
  data: () => ({
    content: '<h1>Edit here</h1>',
    editorOption: { /* quill options */ }
  }),
  methods: {
  }
}
</script>
