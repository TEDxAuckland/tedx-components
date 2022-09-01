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
    <div
      class="event-card-small-text"
      :style="{
        'bottom': multiplier * 10 + 'px',
        'left': multiplier * 15 + 'px',
        'right': multiplier * 15 + 'px',
      }"
    >
      <div 
        class="event-card-small__header" 
        v-html="`${item.title}`"
        :style="{
          // TODO: here and in other places, use rem or em like Anthony told 
          'font-size': multiplier * 17.3 + 'px',
        }"
      ></div>
      <div 
        class="event-card-small__desc" 
        v-html="`${item.raw_content.slice(0, 100)}...`"
        :style="{
          'font-size': multiplier * 12 + 'px',
          'margin-bottom': multiplier * 8 + 'px',
        }"

      ></div>
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
    },
    multiplier() {
      return this.width / 217.5;
    },
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
  color: white;
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
}

.event-card-small__desc {
}
</style>