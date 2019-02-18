<template>
  <img  :src="src"
        :srcset="srcset"
  />
</template>

<script>

export default {

  props: ['path', 'widths'],

  data() {
    return {
    }
  },

  computed: {

    paths() {
      return this.widths.map( widths => {
        let head = this.path.split(".")
        let tail = head.pop()
        return `${ head.join(".") }-${ widths }.${ tail }`.replace("/uploads/", "/assets/resized/")
      })
    },

    src() {
      return this.paths.first
    },

    srcset() {
      return this.paths.map( (p, i) => {
        return `${p} ${this.widths[i]}w`
      })
    }
  }
}
</script>

<style lang="scss">
</style>
