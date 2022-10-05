<template>
  <a :href="item.url">
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
        :srcset="`${getResizedImage(200)} 200w, ${getResizedImage(300)} 300w, ${getResizedImage(600)} 600w, ${getResizedImage(900)} 900w`"
        :src="addHost(item.event_listing.image)"
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
          v-html="item.event_listing.description"
          :style="{
            'font-size': multiplier * 12 + 'px',
            'margin-bottom': multiplier * 8 + 'px',
          }"

        ></div>
      </div>
    </div>
  </a>
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
    host: {
      type: String,
    },
  },
  methods: {
    addHost(imageSrc) {
      return `${this.host}${imageSrc}`;
    },
    getResizedImage(width) {
      const image = this.item.event_listing.image;
      const imageName = image.replace(/^\/uploads\//, '').replace(/.jpg$/, '');
      return this.addHost(`/assets/resized/${imageName}-${width}.jpg`)
    }
  },
  computed: {
    dateTitle() {
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
  margin: 0;
}

.event-card-small__desc {
}
</style>