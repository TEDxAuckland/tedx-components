<template>
  <div id="app">
    <section>
      <button @click="isShown = !isShown">Toggle</button>
      <div v-if="isShown">
        <EventsSnakeGridResponsive
          :items="items"
          host="http://localhost:4000"
        />
      </div>
    </section>
  </div>
</template>

<script>
import EventsSnakeGridResponsive from '@/components/EventsSnakeGridResponsive.vue'

const defaultItems = [
  {
    "id": "/events/jun-2022",
    "url": "/events/jun-2022/",
    "event_listing": {"is_highlighted":false,"description":"Lorem ipsum dolor sit amet","image":"/uploads/default-speaker-photo.jpg"},
    "title": "Together",
    "start_date": "2022-06-08 00:00:00 +1200"
  },
  {
    "id": "/events/may-2021",
    "url": "/events/may-2021/",
    "event_listing": {"is_highlighted":false,"description":"TEDxAkl MAY 2021: LIFE Central","image":"/uploads/ik-64.jpg"},
    "title": "MAY 2021",
    "start_date": "2021-05-22 00:00:00 +1200"
  },
  {
    "id": "/events/november-2020",
    "url": "/events/november-2020/",
    "event_listing": {"is_highlighted":false,"description":"TEDxAkl NOV 2020: Whoa! Studios","image":"/uploads/tr-770.jpg"},
    "title": "November 2020",
    "start_date": "2020-11-14 00:00:00 +1300"
  },
  {
    "id": "/events/tedxauckland-tūmanako",
    "url": "/events/tumanako/",
    "event_listing": {"is_highlighted":false,"description":"TEDxAkl NOV 2019: ASB Waterfront Theatre","image":"/uploads/georgia-s-wft-206.jpg"},
    "title": "tūmanako: Nov 2019",
    "start_date": "2019-11-16 00:00:00 +1300"
  },
  {
    "id": "/events/dining-in-the-dark",
    "url": "/events/08-2019/",
    "event_listing": {"is_highlighted":true, "subtitle": "Hello world!", "description":"Lorem ipsum dolor sit amet","image":"/uploads/default-speaker-photo.jpg"},
    "title": "IN THE DARK",
    "start_date": "2019-08-31 00:00:00 +1200"
  },
  {
    "id": "/events/tedxauckland-2019-05",
    "url": "/events/05-2019/",
    "event_listing": {"is_highlighted":false,"description":"TEDxAkl MAY 2019: Whoa! Studios","image":"/uploads/georgia-s-94-37988.jpg"},
    "title": "May 2019 event",
    "start_date": "2019-05-01 00:00:00 +1200"
  },
  {
    "id": "/events/tedxauckland-2018",
    "url": "/events/2018/",
    "event_listing": {"is_highlighted":false,"description":"TEDxAkl OCT 2018: Shed 10","image":"/uploads/ishan-kokulan-tedx18-fl-135.jpg"},
    "title": "2018 event",
    "start_date": "2018-10-13 00:00:00 +1300"
  },
  {
    "id": "/events/tedxauckland-2017",
    "url": "/events/2017/",
    "event_listing": {"is_highlighted":false,"description":"TEDxAkl DEC 2017: Aotea Centre","image":"/uploads/irra-lee-2593.jpg"},
    "title": "2017 event",
    "start_date": "2017-12-01 00:00:00 +1300"
  },
  {
    "id": "/events/tedxauckland-2016",
    "url": "/events/2016/",
    "event_listing": {"is_highlighted":false,"description":"TEDxAkl MAY 2016: Shed 10","image":"/uploads/camerontedxauckland-171.jpg"},
    "title": "2016 event",
    "start_date": "2016-05-05 00:00:00 +1200"
  },
  {
    "id": "/events/tedxauckland-2015",
    "url": "/events/2015/",
    "event_listing": {"is_highlighted":false,"description":"TEDxAkl MAY 2015: Victory Convention Centre","image":"/uploads/tom-powell-f90-58.jpg"},
    "title": "2015 event",
    "start_date": "2015-05-02 00:00:00 +1200"
  },
  {
    "id": "/events/tedxauckland-2014",
    "url": "/events/2014/",
    "event_listing": {"is_highlighted":false,"description":"TEDxAkl AUG 2014: Aotea Centre","image":"/uploads/0h2a1392-1.jpg"},
    "title": "2014 event",
    "start_date": "2014-08-16 00:00:00 +1200"
  },
  {
    "id": "/events/tedxauckland-2013",
    "url": "/events/2013/",
    "event_listing": {"is_highlighted":true, "subtitle": "Hello world!", "description":"TEDxAkl AUG 2013: Aotea Centre","image":"/uploads/georgia-s-77.jpg"},
    "title": "2013 event",
    "start_date": "2013-08-03 00:00:00 +1200"
  },
  {
    "id": "/events/tedxauckland-2012",
    "url": "/events/2012/",
    "event_listing": {"is_highlighted":true, "subtitle": "Hello world!", "description":"TEDxAkl 2012","image":"/uploads/default-speaker-photo.jpg"},
    "title": "2012 event",
    "start_date": "2012-10-06 00:00:00 +1300"
  },
  {
    "id": "/events/tedxauckland-2010",
    "url": "/events/2010/",
    "event_listing": {"is_highlighted":false,"description":"Lorem ipsum dolor sit amet","image":"/uploads/default-speaker-photo.jpg"},
    "title": "2010 event",
    "start_date": "2010-09-26 00:00:00 +1200"
  },
  {
    "id": "/events/tedxauckland-2009",
    "url": "/events/2009/",
    "event_listing": {"is_highlighted":false,"description":"Lorem ipsum dolor sit amet","image":"/uploads/default-speaker-photo.jpg"},
    "title": "2009 event",
    "start_date": "2009-11-05 00:00:00 +1300"
  }
]


export default {
  name: 'events-snake-grid-scaffold',

  components: {
    EventsSnakeGridResponsive,
  },

  methods: {
  },
  mounted() {
  },
  beforeDestroy() {
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
