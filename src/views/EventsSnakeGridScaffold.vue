<template>
  <div id="app">

  <section>
    <EventsSnakeGrid />
  </section>

  </div>
</template>

<script>
import EventsSnakeGrid from '@/components/EventsSnakeGrid.vue'

export default {
  name: 'app',

  components: {
    EventsSnakeGrid,
  },

  data() {
    return {
      baseUrl: process.env.BASE_URL
    }
  },

  computed: {
  }
}

</script>

<style scoped>
</style>
