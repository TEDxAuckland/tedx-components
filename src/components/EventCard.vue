<template>
  <div>
    <EventCardBig :item="item" v-if="item.is_highlighted" />
    <EventCardSmall :item="item" v-if="!item.is_highlighted" />
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
