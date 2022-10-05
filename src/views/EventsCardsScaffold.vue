<template>
  <div id="app">

  <section>
    <h1>Small card</h1>
    <SmallCard :item="mockEventSmall" :width="320" :height="320" host="http://localhost:4000" />
    <br/>
    <br/>
    <h1>Big card</h1>
    <BigCard :item="mockEventBig" :width="640" :height="640" host="http://localhost:4000" />
  </section>

  </div>
</template>

<script>
import SmallCard from '@/components/EventCardSmall.vue'
import BigCard from '@/components/EventCardBig.vue'

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
    SmallCard,
    BigCard,
  },

  data() {
    return {
      mockEventSmall,
      mockEventBig,
    }
  }
}

</script>