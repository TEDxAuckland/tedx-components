<template>
  <div class="xp-content" v-html="parsedMarkdown"></div>
</template>

<script>
import marked from 'marked'

export default {
  props: ['markdown'],

  computed: {
    parsedMarkdown() {
      return marked(this.markdown, { sanitize: true })
    }
  }
}
</script>

<style lang="scss">
</style>
