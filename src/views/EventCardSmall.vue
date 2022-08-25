<template>
  <div
    class="event-card__container event-card__container--small anim--lift-up card--outline"
    :style="{
      'max-width': width + 'px',
      'max-height': height + 'px',
    }"
  >
    <div
      alt="Avatar"
      id="event-image"
      :style="{
        'width': width + 'px',
        'height': height + 'px',
        'background-image': 'url(' + 'http://localhost:8080/assets/resized/default-speaker-photo-600.jpg)',
      }"
    ></div>
    <div class="event-card-small-text">
      <h1 v-html="`${item.title}`"></h1>
      <h2 v-html="item.short_title"></h2>
      <br/>
      <p v-html="`${item.content.slice(0, 100)}...`"></p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'event-card-small',
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

}
</script>

<style>

.event-card__container--small {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  box-shadow: inset 0px -1009px 40px rgb(0 0 0 / 20%);
  /* max-width: ${this.width};
  max-height: ${this.height};  */
  position: relative;
  /* margin: auto; */
}

#event-image {
  /* width: 100%; */
  position: relative;

  /* width: 320px;
  height: 320px; */
  object-fit: cover;
  object-position: left;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}

.event-card-small-text {
  position: absolute;
  text-align: left;
  bottom: 10px;
  left: 15px;
  right: 15px;
  color: white;
}

.event-card-small-text h1 {
  margin: 0;
  font-size: 2vh;
  /* mix-blend-mode: difference; */
}

.event-card-small-text h2 {
  margin: 0;
  font-size: 2vh;
  /* mix-blend-mode: difference; */
}
.event-card-small-text p {
  /* mix-blend-mode: difference; */
}

/* .event-card-small-text h2 {
  font-size: 1vh;
}

.event-card-small-text p {
  font-size: 0.8vh;
} */
</style>