<template>
  <div
    class="event-card__container event-card__container--big anim--lift-up card--outline"
    :style="{
      'max-width': width + 'px',
      'max-height': height + 'px',
    }"
  >
    <div
      alt="Avatar"
      id="event-image"
      :style="{
        'height': (height * 2 / 3) + 'px',
        'background-image': 'url(' + 'http://localhost:8080/assets/resized/pete-bethune_talk_1-900.jpg)',
      }"
    >
    </div>
    <div
      class="event-card-big-text"
      :style="{
        'height': (height * 1 / 3) + 'px',
      }"
    >
      <h1 v-html="`${item.title}`"></h1>
      <h2 v-html="item.short_title"></h2>
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
    },
    width: {
      type: Number,
    },
    height: {
      type: Number,
    },
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
  text-align: center;
}

#event-image {
  width: 100%;
  object-position: center center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.event-card-big-text {
  padding: 6px 16px;
  text-align: left;
  background-color: grey;
  color: white;
  height: 211.2px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.event-card-big-text h1 {
  margin: 0;
  font-size: 25.95px;
}

.event-card-big-text h2 {
  font-size: 23.625px;
}

.event-card-big-text p {
  font-size: 12px;
}
</style>
