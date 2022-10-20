<template>
  <div>
    <!-- <EventCardBig
      v-if="item.event_listing.is_highlighted"
      :item="item"
      :width="width"
      :height="height"
      :host="host"
    /> -->
    <EventCardSmall 
      :item="item"
      :width="width"
      :height="height"
      :host="host"
    />
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
      return this.item.event_listing.is_highlighted ? this.cellSize * 3 + this.gap * 2 : this.cellSize * 2 + this.gap;
    },
    height() {
      return this.item.event_listing.is_highlighted ? this.cellSize * 3 + this.gap * 2 : this.cellSize * 2 + this.gap;
    }
  }
}

</script>

<style scoped>
</style>
