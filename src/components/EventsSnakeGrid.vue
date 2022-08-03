<template>
  <div class="carousel">
    snake grid goes here
    <!-- <pre class="content" v-html="template.areas.join(' ')"></pre> -->
    <div :style="{ 
      'grid-template-areas': template.areas.join(' '),
      'display': 'grid',
      'grid-auto-columns': 100 + 'px',
      'grid-auto-rows': 100 + 'px',
      'gap': 20 + 'px'
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
// import {
//   Hooper,
//   Slide,
//   Navigation as HooperNavigation,
//   Pagination as HooperPagination
// } from 'hooper'
// import 'hooper/dist/hooper.css'
import {getGridTemplate} from './eventsSnakeGrid'

export default {
  name: "carousel",
  components: {
    // Hooper,
    // Slide,
    // HooperNavigation,
    // HooperPagination
  },
  props: {
    items: {
      type: Array,
    }
  },
  data() {
    return {
    }
  },
  computed: {
    template() {
      return getGridTemplate(4, this.items)
    }
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
