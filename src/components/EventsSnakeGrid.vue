<template>

  <div class="events-snake-grid">
      <canvas
        ref="canvas" 
        :width="cellSize * columns + gap * (columns - 1)"
        :height="cellSize * template.areas.length + gap * (template.areas.length - 1)"
        :style="{
          'position': 'absolute',
        }"
      ></canvas>

    <div :style="{ 
      'display': 'grid',
      'position': 'relative',
      'grid-template-areas': template.areas.join(' '),
      'grid-auto-columns': cellSize + 'px',
      'grid-auto-rows': cellSize + 'px',
      'gap': gap + 'px',
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
import { getGridTemplate, clearCanvasSnake, drawCanvasSnake } from './eventsSnakeGrid'

export default {
  name: "carousel",
  components: {
  },
  mounted() {
    const canvas = this.$refs.canvas
    const {cellSize, columns, gap} = this
    const lineColor = '#000'
    const history = this.template.history
    drawCanvasSnake({ canvas, cellSize, columns, gap, lineColor, history });
    console.log('mounted canvas')
  },
  beforeDestroy() {
    const canvas = this.$refs.canvas
    clearCanvasSnake({ canvas });
    console.log('cleared canvas')
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
