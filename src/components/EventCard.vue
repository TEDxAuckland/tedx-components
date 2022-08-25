<template>
  <div>
    <EventCardBig :item="item" v-if="item.is_highlighted" :width="width" :height="height" />
    <EventCardSmall :item="item" v-if="!item.is_highlighted" :width="width" :height="height"  />
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
      console.log('this.item',this.item)
      return this.item.is_highlighted ? this.cellSize * 2 + this.gap : this.cellSize;
    },
    height() {
      console.log('this.item',this.item)
      return this.item.is_highlighted ? this.cellSize * 2 + this.gap : this.cellSize;
    }
  }
}

</script>

<style scoped>
</style>
