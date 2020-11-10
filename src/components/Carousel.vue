<template>
  <div class="carousel">
    <hooper infiniteScroll autoPlay playSpeed="5000" transition="1000" :wheelControl="false">
      <slide v-for="image in images" :key="image">
        <img class="carousel__img" :src="image">
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <!-- <hooper-progress slot="hooper-addons"></hooper-progress> -->
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>
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
  .hooper {
    height: unset;
  }
  img {
    width: 100%;
  }
</style>
