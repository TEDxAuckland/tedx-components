<template>
  <div class="event-card__container event-card__container--big">
    <h1>BIG EVENT ID: <span v-html="item.id"></span></h1>
  </div>
</template>

<script>
export default {
  name: 'event-card-big',

  components: {
  },

  props: {
    item: {
      type: Object,
    }
  },

  data() {
    return {
      baseUrl: process.env.BASE_URL,
    }
  },

  computed: {
  }
}

</script>

<style scoped>
</style>
