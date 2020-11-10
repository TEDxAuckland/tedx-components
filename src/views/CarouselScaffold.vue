<template>
  <div id="app">

  <section>
    <Carousel :images="imagePaths" />
  </section>

  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

var imagePaths = [
  "assets/1-THEME DESC - COVER150.png",
  "assets/2-MIND MAP150.png",
  "assets/3-INTRO150.png",
]

export default {
  name: 'app',

  components: {
    Carousel,
  },

  data() {
    return {
      imagePaths,
      baseUrl: process.env.BASE_URL
    }
  },

  computed: {
    images() {
      return this.imagePaths.map( (p) => {
        // return this.baseUrl + p
        return '/images/animation/' + p
      })
    }
  }
}



</script>

<style scoped>
  .off-piste__image {
    width: 500px;
    height: auto;
  }
  section {
    width: 512px;
    margin: 3rem auto;
  }
</style>
