<template>
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
        :clientWidth="clientWidth"
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
        :clientWidth="clientWidth"
      />
    </div>
  </div>
</template>

<script>
import EventsSnakeGrid from '@/components/EventsSnakeGrid.vue'
import EventCardMobile from '@/components/EventCardMobile'
import EventCard from '@/components/EventCard'
import { throttle } from 'lodash'

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
    window.addEventListener("resize", throttle(this.resized, 200, { trailing: true }));
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
      return this.containerWidth * 11 / 120 / 12 * this.columns
    },
    lineWidth() {
      return 15
    },
    columns() {
      if (this.clientWidth < 750) {
        return 4
      } else {
        return 6
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
