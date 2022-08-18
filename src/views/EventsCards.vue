<template>
  <div id="app">

  <section>
    <h1>Small card</h1>
    <SmallCard />
    <br/>
    <br/>
    <h1>Big card</h1>
    <BigCard />
  </section>

  </div>
</template>

<script>
import SmallCard from '@/views/EventCardSmall.vue'
import BigCard from '@/views/EventCardBig.vue'

export default {
  name: 'app',

  components: {
    SmallCard,
    BigCard,
  },

  data() {
    return {
      // imagePaths,
      }
  }
}

</script>