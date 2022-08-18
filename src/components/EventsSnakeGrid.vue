<template>
  <div class="events-snake-grid__container">
    <canvas
      ref="canvas" 
      :width="cellSize * columns + gap * (columns - 1)"
      :height="cellSize * template.areas.length + gap * (template.areas.length - 1)"
      :style="{
        'position': 'absolute',
      }"
    ></canvas>
    <div
      class="events-snake-grid__grid" 
      :style="{ 
        'display': 'grid',
        'position': 'relative',
        'grid-template-areas': template.areas.join(' '),
        'grid-auto-columns': cellSize + 'px',
        'grid-auto-rows': cellSize + 'px',
        'gap': gap + 'px',
      }"
    >
      <div 
        :class="item.is_highlighted ? 'events-snake-grid__item events-snake-grid__item--big' : 'events-snake-grid__item'" 
        v-for="item in items" 
        :key="item.id" 
        :style="{
          'grid-area': `item-${item.id}`
        }"
      >
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { getAreas, generateGridHybrid, clearCanvasSnake, drawCanvasSnake } from './snakeGrid'

export default {
  name: "events-snake-grid",
  components: {
  },
  mounted() {
    const canvas = this.$refs.canvas
    const {cellSize, columns, gap, lineColor} = this
    const history = this.template.history
    drawCanvasSnake({ canvas, cellSize, columns, gap, lineColor, history });
  },
  beforeDestroy() {
    const canvas = this.$refs.canvas
    clearCanvasSnake({ canvas });
  },
  props: {
    items: {
      type: Array,
    },
    cellSize: {
      type: Number,
      default: 100,
    },
    columns: {
      type: Number,
      default: 4,
    },
    gap: {
      type: Number,
      default: 10,
    },
    lineColor: {
      type: String,
      default: '#000',
    },
  },
  data() {
    return {
    }
  },
  computed: {
    template() {
      const { history, grid } = generateGridHybrid(this.columns, this.items)
      const areas = getAreas(grid)
      return { history, areas }
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
.events-snake-grid__grid {
  color: black;
}
.events-snake-grid__item {
  background-color: lightGrey;
}
.events-snake-grid__item--big {
  background-color: grey;
}
</style>
