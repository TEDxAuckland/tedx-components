<template>
  <!-- TODO: use 37.5em instead -->
  <div class="events-snake-grid__container events-snake-grid__container--desktop" v-if="clientWidth > 600"> 
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
        :host="host"
      />
    </EventsSnakeGrid>
  </div>
  <div class="events-snake-grid__container events-snake-grid__container--mobile" v-else> 
    <div v-for="item in items" :key="item.id" :style="{ width: mobileCardWidth + 'px'}">
      <EventCardMobile
        :item="item"
        :width="mobileCardWidth"
        :height="mobileCardWidth"
        :gap="0" 
        :host="host"
      />
    </div>
  </div>
</template>

<script>
import EventsSnakeGrid from '@/components/EventsSnakeGrid.vue'
import EventCardMobile from '@/components/EventCardMobile'
import EventCard from '@/components/EventCard'

export default {
  name: 'events-snake-grid-responsive',

  components: {
    EventsSnakeGrid,
    EventCardMobile,
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
    host: {
      type: String,
    }
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
    mobileCardWidth() {
      return this.clientWidth - 64
    },
    cellSize() {
      const gapCount = this.columns - 1
      return (this.containerWidth - this.gap * gapCount) / this.columns
    },
    gap() {
      return this.containerWidth * 11 / 120 / 4 * this.columns
    },
    lineWidth() {
      return this.cellSize
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
.events-snake-grid__container {
  display: flex; 
}

.events-snake-grid__container-desktop {
  justify-content: center;
}

.events-snake-grid__container--mobile {
  align-items: center;
  flex-direction: column;
  gap: 40px;
}
</style>
