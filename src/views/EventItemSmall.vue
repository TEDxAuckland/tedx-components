<template>
  <div class="event-item__container">
    <h2>small event id: <span v-html="item.id"></span></h2>
  </div>
</template>

<script>
// TODO: rename to event card small
export default {
  name: 'event-item-small',

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
