<template>
  <div class="animated-image">

    <img
      v-for="(image, index) in images"
      v-show="index == currentIndex"
      :src="image.src"
      :srcset="image.srcset"
      :sizes="image.sizes"
      :key="index"
      alt="Off Piste Animated Logo"
      class="off-piste__image">
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: "animated-image",
  props: ['images'],

  data() {
    return {
      currentIndex: 0,
      speedInput: "default",
      interval: 2000,
      intervalId: ""
    }
  },

  mounted() {
    // this.intervalId = setInterval( () => {
    //   this.currentIndex = this.nextIndex(this.currentIndex)
    // }, this.interval)
  },

  created () {
    window.addEventListener('scroll', _.throttle(this.advanceIndex, 40));
  },

  methods: {
    nextIndex() {
      if (this.currentIndex >= (this.images.length - 1)) {
        return 0
      } else {
        return this.currentIndex + 1
      }
    },

    advanceIndex() {
      this.currentIndex = this.nextIndex(this.currentIndex)
    },
  },
}
</script>

<style lang="scss">
</style>
