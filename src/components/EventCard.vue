<template>
  <EventCardSquare 
    :item="item"
    :width="width"
    :height="height"
    :host="host"
    :clientWidth="clientWidth"
  />
</template>

<script>
import EventCardSquare from '@/components/EventCardSquare';

export default {
  name: 'event-card',

  components: {
    EventCardSquare
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
    },
    host: {
      type: String,
    },
    clientWidth: {
      type: Number,
    },
  },

  computed: {
    width() {
      const { cellSize, gap } = this;
      const isHighlighted = this.item.event_listing.is_highlighted;
      return isHighlighted ? cellSize * 3 + gap * 2 : cellSize * 2 + gap;
    },
    height() {
      const { cellSize, gap } = this;
      const isHighlighted = this.item.event_listing.is_highlighted;
      return isHighlighted ? cellSize * 3 + gap * 2 : cellSize * 2 + gap;
    }
  }
}
</script>

<style scoped>
</style>
