<template>
  <EventCardSquare 
    :item="item"
    :width="width"
    :height="height"
    :host="host"
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
    }
  },

  data() {
    return {
    }
  },

  computed: {
    width() {
      const { cellSize, gap } = this;
      const { is_highlighted } = this.item.event_listing;
      return is_highlighted ? cellSize * 3 + gap * 2 : cellSize * 2 + gap;
    },
    height() {
      const { cellSize, gap } = this;
      const { is_highlighted } = this.item.event_listing;
      return is_highlighted ? cellSize * 3 + gap * 2 : cellSize * 2 + gap;
    }
  }
}
</script>

<style scoped>
</style>
