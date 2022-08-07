<template>
  <div id="app">

  <section>
    <button @click="isShown = !isShown">Toggle</button>
    <div v-if="isShown">
      <EventsSnakeGrid
        :items="items"
        lineColor="#ed3624"
        v-slot="{ item }"
      >
        <EventCardBig :item="item" v-if="item.isBig" />
        <EventCardSmall :item="item" v-if="!item.isBig" />
      </EventsSnakeGrid>
    </div>
  </section>

  </div>
</template>

<script>
import EventsSnakeGrid from '@/components/EventsSnakeGrid.vue'
import EventCardBig from './EventCardBig.vue';
import EventCardSmall from './EventCardSmall.vue';

const defaultItems = [
  { id: 1, title: "1", isBig: true },
  { id: 2, title: "2", isBig: false },
  { id: 3, title: "3", isBig: false },
  { id: 4, title: "4", isBig: false },
  { id: 5, title: "5", isBig: false },
  { id: 6, title: "6", isBig: true },
  { id: 7, title: "7", isBig: false },
  { id: 8, title: "8", isBig: false },
  { id: 9, title: "9", isBig: false },
  { id: 10, title: "10", isBig: false },
  { id: 11, title: "11", isBig: false },
  { id: 12, title: "12", isBig: false },
  { id: 13, title: "13", isBig: true },
  { id: 14, title: "14", isBig: false },
  { id: 15, title: "15", isBig: false },
];

export default {
  name: 'app',

  components: {
    EventsSnakeGrid,
    EventCardBig,
    EventCardSmall
},

  data() {
    return {
      items: defaultItems,
      baseUrl: process.env.BASE_URL,
      isShown: true,
    }
  },

  computed: {
  }
}

</script>

<style scoped>
</style>
