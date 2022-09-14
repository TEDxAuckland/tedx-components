<template>
  <div>
    <EventCardBig :item="item" v-if="item.event_listing.is_highlighted" :width="width" :height="height" />
    <EventCardSmall :item="item" v-if="!item.event_listing.is_highlighted" :width="width" :height="height"  />
  </div>
</template>

<script>
import EventCardBig from '@/components/EventCardBig';
import EventCardSmall from '@/components/EventCardSmall';

export default {
  name: 'event-card',

  components: {
    EventCardBig,
    EventCardSmall
  },

  props: {
    item: {
      type: Object,
    },
    cellSize: {
      type: Number,
    },
    gap: {
      type: Number,
    }
  },

  data() {
    return {
    }
  },

  computed: {
    width() {
      return this.item.event_listing.is_highlighted ? this.cellSize * 2 + this.gap : this.cellSize;
    },
    height() {
      return this.item.event_listing.is_highlighted ? this.cellSize * 2 + this.gap : this.cellSize;
    }
  }
}

</script>

<style scoped>
</style>
