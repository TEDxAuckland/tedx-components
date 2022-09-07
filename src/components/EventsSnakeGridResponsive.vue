<template>
  <EventsSnakeGrid
    :items="items"
    :lineColor="lineColor"
    :cellSize="(containerWidth - dynamicGap * 3) / 4"
    :gap="dynamicGap"
    v-slot="{ item, cellSize, gap }"
  >
    <EventCard
      :item="item"
      :cellSize="cellSize"
      :gap="gap" 
    />
  </EventsSnakeGrid>
</template>

<script>
import EventsSnakeGrid from '@/components/EventsSnakeGrid.vue'
import EventCard from '@/components/EventCard'

export default {
  name: 'events-snake-grid-responsive',

  components: {
    EventsSnakeGrid,
    EventCard
  },

  methods: {
    resized() {
      this.gridWidth = window.innerWidth
    }
  },
  mounted() {
    window.addEventListener("resize", this.resized);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resized);
  },
  props: {
    items: {
      type: Array,
    },
  },

  data() {
    return {
      gridWidth: window.innerWidth
    }
  },

  computed: {
    containerWidth() {
      return Math.min(this.gridWidth, 1200)
    },
    dynamicGap() {
      return this.containerWidth * 11 / 120
    },
    lineColor() {
      return '#ed3624'
    }
  }
}

</script>

<style scoped>
</style>
