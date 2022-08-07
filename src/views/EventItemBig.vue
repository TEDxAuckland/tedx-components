<template>
  <div class="event-item__container event-item__container--big">
    <h1>BIG EVENT ID: <span v-html="item.id"></span></h1>
  </div>
</template>

<script>
export default {
  name: 'event-item-big',

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
