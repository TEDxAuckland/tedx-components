<template>
  <div class="events-snake-grid__container">
    <canvas
      ref="canvas" 
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
  mounted() {
    // TODO: remove the visual viewport so my laptop doesn't lag
    // window.visualViewport.addEventListener('resize', this.resizeHandler);
    this.updatePixelRatio()
  },
  methods: {
    clearCanvas() {
      clearCanvasSnake({ canvas: this.$refs.canvas });
    },
    drawCanvas() {
      const canvas = this.$refs.canvas
      const history = this.template.history
      const {cellSize, columns, gap, lineWidth} = this
      const pixelDensity = window.devicePixelRatio * window.visualViewport.scale
      this.$refs.canvas.width = this.canvasWidth * pixelDensity
      this.$refs.canvas.height = this.canvasHeight * pixelDensity
      drawCanvasSnake({ 
        canvas, 
        cellSize,
        columns, 
        gap,
        pixelDensity,
        history,
        lineWidth
      });
    },
    considerRedrawCanvas() {
      const pixelDensity = window.devicePixelRatio * window.visualViewport.scale
      const newWidth = Math.floor(this.canvasWidth * pixelDensity);
      const newHeight = Math.floor(this.canvasHeight * pixelDensity);
      // FYI: this assumes items won't change after page load
      if (this.$refs.canvas.width !== newWidth || this.$refs.canvas.height !== newHeight) {
        this.drawCanvas()
      }
    },
    resizeHandler() {
      this.considerRedrawCanvas()
    },
    updatePixelRatio() {
      window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`)
        .addEventListener('change', this.updatePixelRatio, {once: true});
      this.considerRedrawCanvas()
    }
  },
  updated() {
    this.considerRedrawCanvas()
  },
  beforeDestroy() {
    // window.visualViewport.removeEventListener('resize', this.resizeHandler);
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
    lineWidth: {
      type: Number,
      default: 50,
    },
  },
  computed: {
    template() {
      const { history, grid } = generateGridHybrid(this.columns, this.items)
      const areas = getAreas(grid)
      return { history, areas }
    },
    pixelDensity() {
      return window.devicePixelRatio * window.visualViewport.scale
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
.events-snake-grid__container {
  display: flex;
}
</style>
