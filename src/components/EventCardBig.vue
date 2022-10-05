<template>
  <a :href="item.url">
    <div
      class="event-card__container event-card__container--big card--outline"
      :style="{
        'max-width': width + 'px',
        'max-height': height + 'px',
      }"
    >
      <img
        alt="Avatar"
        class="event-image-big"
        :srcset="`${getResizedImage(200)} 200w, ${getResizedImage(300)} 300w, ${getResizedImage(600)} 600w, ${getResizedImage(900)} 900w`"
        :src="addHost(item.event_listing.image)"
        :style="{
          'height': (height * 2 / 3) + 'px',
        }"
      />
      <div
        class="event-card-big-text"
        :style="{
          'height': (height * 1 / 3) + 'px',
          'padding-top': (multiplier * 6) + 'px',
          'padding-right': (multiplier * 16) + 'px',
          'padding-bottom': (multiplier * 20) + 'px',
          'padding-left': (multiplier * 16) + 'px',
        }"
      >
        <div>
          <div 
            class="event-card-big__header" 
            v-html="`${item.title}`"
            :style="{
              'font-size': (width / 545 * 25.95) + 'px',
            }"
          ></div>
          <div
            class="event-card-big__header-small" 
            v-html="dateTitle"
            :style="{
              'font-size': (width / 545 * 15.12) + 'px',
            }"
          ></div>
        </div>
        <div 
          class="event-card-big__desc" 
          v-html="item.event_listing.description"
          :style="{
            'font-size': (width / 545 * 12) + 'px',
            'margin-bottom': multiplier * 8 + 'px',
          }"
        ></div>
      </div>
    </div>
  </a>
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
    host: {
      type: String,
    },
  },

  methods: {
    addHost(imageSrc) {
      return `${this.host}${imageSrc}`;
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
      return this.width / 545;
    },
  }
}
</script>

<style scoped>
.event-card__container--big {
  text-align: center;
}

.event-image-big {
  width: 100%;
  object-position: center center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: block;
  object-fit: cover;
}

.event-card-big-text {
  padding: 6px 16px;
  padding-bottom: 20px;
  text-align: left;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.event-card-big__header {
  display: block;
  margin: 0;
}
.event-card-big__header-small {
  display: block;
  margin:0;
}

.event-card-big__desc {
}
</style>
