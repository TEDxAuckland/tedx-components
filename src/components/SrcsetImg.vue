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
      return this.widths.map( w => {
        let path = this.path.split(".")
        path.splice(-1, 0, `-${w}.`)
        return path.join("").replace("/uploads/", "/assets/resized/")
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
