<template>
  <div id="app">

  <section>
    <h1>Small card</h1>
    <SmallCard/>
  </section>

  </div>
</template>

<script>
import SmallCard from '@/views/EventCardSmall.vue'

// var imagePaths = [{
//     "src": "/uploads/default-speaker-photo.jpg",
// }]

export default {
    name: 'app',

    components: {
        SmallCard,
    },

    data() {
        return {
            // imagePaths,
        }
    }
}

</script>