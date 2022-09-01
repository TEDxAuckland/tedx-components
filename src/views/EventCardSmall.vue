<template>
  <div
    class="event-card__container event-card__container--small card--outline"
    :style="{
      'max-width': width + 'px',
      'max-height': height + 'px',
    }"
  >
    <img
      alt="Avatar"
      class="event-image-small"
      src="http://localhost:8080/assets/resized/default-speaker-photo-600.jpg"
      :style="{
        'width': width + 'px',
        'height': height + 'px',
      }"
    />
    <div class="event-image-small-shadow"></div>
    <div class="event-card-small-text">
      <div class="event-card-small__header" v-html="`${item.title}`"></div>
      <!-- <div class="event-card-small__header-small" v-html="date_title"></div> -->
      <!-- TODO: change to div -->
      <p v-html="`${item.raw_content.slice(0, 100)}...`"></p>
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
  computed: {
    date_title() {
      // TODO: switch to date-fns
      return new Date(this.item.start_date).toLocaleDateString('en-NZ', { year:"numeric", month:"long"});
    }
  }
}
</script>

<style>
.event-card__container--small {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  box-shadow: inset 0px -1009px 40px rgb(0 0 0 / 20%);
  position: relative;
}

.event-image-small {
  position: relative;
  object-fit: cover;
  object-position: left;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: block;
}
.event-image-small-shadow {
  position: absolute;
  width:100%;
  height:100%;
  box-shadow: inset 0px 1000px 8px 0px rgb(0 0 0 / 50%);
  top: 0;
}

.event-card-small-text {
  position: absolute;
  text-align: left;
  bottom: 10px;
  left: 15px;
  right: 15px;
  color: white;
}

.event-card-small-text p {
  font-size: 12px;
}

.event-card-small__header {
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin: 0.67em 0;
  margin: 0;
  font-size: 17.3px;
}

.event-card-small__header-small {
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
  margin: 0;
  font-size: 11.072000000000003px;
}
</style>