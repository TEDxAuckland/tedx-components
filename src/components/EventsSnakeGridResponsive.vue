<template>
  <!-- TODO: use 37.5em instead -->
  <div style="display: flex; justify-content: center;" v-if="clientWidth > 600"> 
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
  <div style="display: flex; align-items: center; flex-direction: column;" v-else> 
    <div v-for="item in items" :key="item.id">
      <EventCardBig
        :item="item"
        :cellSize="containerWidth/2"
        :gap="0" 
      />
    </div>
  </div>
</template>

<script>
import EventsSnakeGrid from '@/components/EventsSnakeGrid.vue'
import EventCardBig from '@/components/EventCardBig'
import EventCard from '@/components/EventCard'

export default {
  name: 'events-snake-grid-responsive',

  components: {
    EventsSnakeGrid,
    EventCardBig,
    EventCard,
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
      return this.containerWidth * 11 / 120 / 4 * this.columns
    },
    lineWidth() {
      return this.containerWidth / 120 * 5
    },
    columns() {
      // TODO: use 46.87em
      // TODO: use getComputedStyle(document.documentElement).fontSize? https://stackoverflow.com/questions/36532307/rem-px-in-javascript
      if (this.clientWidth < 750) {
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
