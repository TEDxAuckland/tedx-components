<template>
  <div class="event-card__container event-card__container--big anim--lift-up card--outline">
    <img src="../../public/uploads/default-speaker-photo.jpg" alt="Avatar" id="event-image">
    <!-- <h1>BIG EVENT ID: <span v-html="item.id"></span></h1> -->
    <div class="event-card-big-text">
      <h1 v-html="item.title"></h1>
      <h2 v-html="item.short_title"></h2>
      <br/>
      <p v-html="`${item.content.slice(0, 100)}...`"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'event-card-big',

  components: {

  },

  props: {
    item: {
      type: Object,
    }
  },

  data() {
    return {
      baseUrl: process.env.BASE_URL,
    }
  },

  computed: {

  }
}

</script>

<style scoped>

.event-card__container--big {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  max-width: 640px;
  max-height: 640px;
  text-align: center;
  /* margin: auto; */
}

#event-image {
  vertical-align: middle;
  width: 100%;
}

.event-card-big-text {
  padding: 6px 16px;
  text-align: left;
  background-color: grey;
  color: white;
}

.event-card-big-text h1 {
  margin: 0;
  font-size: 3vh;
}

/* .event-card-big-text h2 {
  font-size: 1.5vh;
} */

/* .event-card-big-text p {
  font-size: 1vh;
} */
</style>
