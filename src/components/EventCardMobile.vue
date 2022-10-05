<template>
  <a :href="item.url">
    <div
      class="event-card__container event-card__container--mobile card--outline"
      :style="{
        'max-width': width + 'px',
      }"
    >
      <img
        alt="Avatar"
        class="event-card-mobile__image"
        :srcset="`${getResizedImage(200)} 200w, ${getResizedImage(300)} 300w, ${getResizedImage(600)} 600w, ${getResizedImage(900)} 900w`"
        :src="addHost(item.event_listing.image)"
        :style="{
          'height': (height * 2 / 3) + 'px',
        }"
      />
      <div
        class="event-card-mobile-text"
        :style="{
          'padding-top': (multiplier * 20 / 13.3578 * 16) + 'px',
          'padding-right': (multiplier * 20 / 13.3578 * 16) + 'px',
          'padding-bottom': (multiplier * 20 / 13.3578 * 16) + 'px',
          'padding-left': (multiplier * 20 / 13.3578 * 16) + 'px',
          gap: (width / 364 * 16) + 'px',
        }"
      >
        <div 
          class="event-card-mobile__header" 
          v-html="`${item.title}`"
          :style="{
            'font-size': (width / 545 * 20.961590611423) + 'px',
            'line-height': 1,
          }"
        ></div>
        <!-- TODO: does this need to show date fully, actually use dateTitle? -->
        <div 
          class="event-card-mobile__desc" 
          v-html="item.event_listing.description"
          :style="{
            'font-size': (width / 545 * 17.967030499034273) + 'px',
            'line-height': 1,
          }"
        ></div>
        <button
          class="event-card-mobile__cta"
          :style="{
            height: (width / 364 * 40 ) + 'px',
            'border-radius': (width / 364 * 4) + 'px',
            'font-size': (width / 364 * 12) + 'px',
          }"
          v-html="viewPostCopy"
        ></button>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'event-card-mobile',

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
  methods: {
    addHost(imageSrc) {
      return `http://localhost:4000${imageSrc}`;
    },
    // TODO: reduce code duplication between big/small/mobile cards
    getResizedImage(width) {
      const image = this.item.event_listing.image;
      const imageName = image.replace(/^\/uploads\//, '').replace(/.jpg$/, '');
      return this.addHost(`/assets/resized/${imageName}-${width}.jpg`)
    }
  },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
    }
  },

  computed: {
    dateTitle() {
      // TODO: switch to date-fns
      return new Date(this.item.start_date).toLocaleDateString('en-NZ', { year:"numeric", month:"long", day: 'numeric'});
    },
    multiplier() {
      // TODO: re-grade everything to 364
      return this.width / 545;
    },
    viewPostCopy() {
      return new Date() < new Date(this.item.start_date) ? 'View Event' : 'View Past Event';
    },
  }
}
</script>

<style scoped>
.event-card__container--mobile {
  text-align: center;
}

.event-card-mobile__image {
  width: 100%;
  object-position: center center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: block;
  object-fit: cover;
}

.event-card-mobile-text {
  text-align: left;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
}

.event-card-mobile__header {
  display: block;
  margin: 0;
  font-weight: 600;
}
.event-card-mobile__header-small {
  display: block;
  margin:0;
}

.event-card-mobile__desc {
}

.event-card-mobile__cta {
  border: none;
  color: #f44336;
  border: 1px solid #f44336;
  cursor: pointer;
}
.event-card-mobile__cta:active {
  color: white;
  background-color: #f44336;

}
</style>
