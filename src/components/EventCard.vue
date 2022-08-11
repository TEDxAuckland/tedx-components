<template>
  <div>
    <EventCardBig :item="item" v-if="item.isBig" />
    <EventCardSmall :item="item" v-if="!item.isBig" />
  </div>
</template>

<script>
import EventCardBig from '../views/EventCardBig';
import EventCardSmall from '../views/EventCardSmall';

export default {
  name: 'event-card',

  components: {
    EventCardBig,
    EventCardSmall
  },

  props: {
    item: {
      type: Object,
    }
  },

  data() {
    return {
    }
  },

  computed: {
  }
}

</script>

<style scoped>
</style>
