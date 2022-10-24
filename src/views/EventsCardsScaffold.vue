<template>
  <div id="app">

  <section>
    <h1>Square card</h1>
    <SquareCard :item="mockEventSmall" :width="320" :height="320" host="http://localhost:4000" />
    <br/>
    <br/>
    <h1>3x2 card</h1>
    <ThreeByTwoCard :item="mockEventBig" :width="640" :height="640" host="http://localhost:4000" />
  </section>

  </div>
</template>

<script>
import SquareCard from '@/components/EventCardSquare.vue'
import ThreeByTwoCard from '@/components/EventCardThreeByTwo.vue'

const mockEventSmall = {
  "id": "/events/november-2020",
  "url": "/events/november-2020/",
  "event_listing": {"is_highlighted":false,"description":"TEDxAkl NOV 2020: Whoa! Studios","image":"/uploads/tr-770.jpg"},
  "title": "November 2020",
  "start_date": "2020-11-14 00:00:00 +1300"
}

const mockEventBig = {
  "id": "/events/dining-in-the-dark",
  "url": "/events/08-2019/",
  "event_listing": {"is_highlighted":true,"description":"Lorem ipsum dolor sit amet","image":"/uploads/default-speaker-photo.jpg"},
  "title": "IN THE DARK",
  "start_date": "2019-08-31 00:00:00 +1200"
}

export default {
  name: 'app',

  components: {
    SquareCard,
    ThreeByTwoCard,
  },

  data() {
    return {
      mockEventSmall,
      mockEventBig,
    }
  }
}

</script>