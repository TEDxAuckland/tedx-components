<template>
  <div style="display: flex; justify-content: center;"> 
    <EventsSnakeGrid
      :items="items"
      :cellSize="cellSize"
      :gap="gap"
      :lineWidth="lineWidth"
      :columns="columns"
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
      const gapCount = this.columns - 1
      return (this.containerWidth - this.gap * gapCount) / this.columns
    },
    gap() {
      if (this.clientWidth <= 768) {
        return this.containerWidth * 11 / 120 / 4 * 3
      } else {
        return this.containerWidth * 11 / 120
      }
    },
    lineWidth() {
      if (this.clientWidth <= 768) {
        return this.containerWidth / 120 * 5
      } else {
        return this.containerWidth / 120 * 5
      }
    },
    columns() {
      if (this.clientWidth <= 768) {
        return 3
      } else {
        return 4
      }
    }
  }
}

</script>

<style scoped>
</style>
