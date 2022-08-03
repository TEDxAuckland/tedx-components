<template>

  <div class="events-snake-grid">
      <canvas
        ref="canvas" 
        v-width="cellSize * columns + gap * (columns - 1)"
        v-height="cellSize * template.areas.length + gap * (template.areas.length - 1)"
        :style="{
          'position': 'absolute',
          'z-index': -1,
        }"
      ></canvas>

    <div :style="{ 
      'grid-template-areas': template.areas.join(' '),
      'display': 'grid',
      'grid-auto-columns': cellSize + 'px',
      'grid-auto-rows': cellSize + 'px',
      'gap': gap + 'px'
    }">
    
      <div v-for="item in items" :key="item.id" :style="{
        'grid-area': `item-${item.id}`,
        'background-color': 'grey'
      }">
        {{ item.id }}
      </div>
    </div>
  </div>
</template>

<script>
import { getGridTemplate } from './eventsSnakeGrid'

export default {
  name: "carousel",
  components: {
  },
  props: {
    items: {
      type: Array,
    }
  },
  data() {
    return {
      cellSize: 100,
      columns: 4,
      gap: 10
    }
  },
  computed: {
    template() {
      return getGridTemplate(this.columns, this.items)
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
