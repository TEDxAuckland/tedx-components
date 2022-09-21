<template>
  <div style="display: flex; justify-content: center;"> 
    <EventsSnakeGrid
      :items="items"
      :cellSize="cellSize"
      :gap="dynamicGap"
      :lineWidth="dynamicLineWidth"
      v-slot="{ item, cellSize, gap }"
    >
      <EventCard
        :item="item"
        :cellSize="cellSize"
        :gap="gap" 
      />
    </EventsSnakeGrid>
</div>
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
      this.clientWidth = document.documentElement.clientWidth
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
      clientWidth: document.documentElement.clientWidth,
    }
  },

  computed: {
    containerWidth() {
      return Math.min(this.clientWidth * 0.98, 1200)
    },
    cellSize() {
      return (this.containerWidth - this.dynamicGap * 3) / 4
    },
    dynamicGap() {
      return this.containerWidth * 11 / 120
    },
    dynamicLineWidth() {
      return this.containerWidth / 120 * 5
    },
  }
}

</script>

<style scoped>
</style>
