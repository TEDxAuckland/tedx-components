<template>
  <div class="carousel">
    snake grid goes here
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination
} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  name: "carousel",
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination
  },
  props: {
    images: {
      type: Array,
    }
  },
  data() {
    return {
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
