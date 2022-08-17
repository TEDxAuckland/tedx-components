<template>
  <div class="event-card__container event-card__container--big">
    <img src="../../public/uploads/default-speaker-photo.jpg" alt="Avatar" id="event-image">
    <!-- <h1>BIG EVENT ID: <span v-html="item.id"></span></h1> -->
    <div class="event-card-big-text">
      <h1>June 2021</h1>
      <h2>[theme]</h2>
      <br/>
      <p>Baby description of what the event was. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do... </p>
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
  max-width: 350px;
  min-height: auto;
  /* margin: auto; */
  text-align: center;
  border: 0.5px solid grey;
  border-radius: 5px;
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
  font-size: 3vw;
}

.event-card-big-text h2 {
  font-size: 1.5vw;
}

.event-card-big-text p {
  font-size: 1vw;
}
</style>
