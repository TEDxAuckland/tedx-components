<template>
  <div class="events-snake-grid__container">
    <canvas
      ref="canvas" 
      :width="canvasWidth * pixelDensity"
      :height="canvasHeight * pixelDensity"
      :style="{
        'position': 'absolute',
        'width': canvasWidth + 'px',
        'height': canvasHeight + 'px',
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
          'grid-area': `item-${item.id.replace(/\//g, '-')}`
        }"
      >
        <slot :item="item" :cellSize="cellSize" :gap="gap"></slot>
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
    this.drawCanvas()
  },
  methods: {
    clearCanvas() {
      clearCanvasSnake({ canvas: this.$refs.canvas });
    },
    drawCanvas() {
      const canvas = this.$refs.canvas
      const history = this.template.history
      const {cellSize, columns, gap, pixelDensity} = this
      drawCanvasSnake({ 
        canvas, 
        cellSize,
        columns, 
        gap,
        pixelDensity,
        history 
      });
    },
    redrawCanvas() {
      this.clearCanvas()
      this.drawCanvas()
    }
  },
  updated() {
    this.redrawCanvas()
  },
  beforeDestroy() {
    this.clearCanvas()
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
    },
    pixelDensity() {
      return window.devicePixelRatio;
    },
    canvasWidth() {
      return this.cellSize * this.columns + this.gap * (this.columns - 1)
    },
    canvasHeight() {
      return this.cellSize * this.template.areas.length + this.gap * (this.template.areas.length - 1)
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
