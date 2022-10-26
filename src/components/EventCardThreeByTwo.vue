<template>
  <a :href="item.url">
    <div
      class="event-card__container event-card__container--three-by-two card--outline"
      :style="{
        'max-width': width + 'px',
        'max-height': height + 'px',
      }"
    >
      <img
        alt="Avatar"
        class="event-image-three-by-two"
        :srcset="srcset"
        :src="addHost(item.event_listing.image)"
        :style="{
          'width': width + 'px',
          'height': (height * 2 / 3) + 'px',
        }"
      />
      <div
        class="event-card-three-by-two-text"
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
            class="event-card-three-by-two__header" 
            v-html="`${item.title}`"
            :style="{
              'font-size': (multiplier * 25.95) + 'px',
            }"
          ></div>
          <div
            class="event-card-three-by-two__header-small" 
            v-html="dateTitle"
            :style="{
              'font-size': (multiplier * 15.12) + 'px',
            }"
          ></div>
        </div>
        <div 
          class="event-card-three-by-two__desc" 
          v-html="item.event_listing.description"
          :style="{
            'font-size': (multiplier * 12) + 'px',
            'margin-bottom': multiplier * 8 + 'px',
          }"
        ></div>
      </div>
    </div>
  </a>
</template>

<script>
import { getSrcSet, addHost } from './responsiveImage'
import { format } from 'date-fns'

export default {
  name: 'event-card-three-by-two',

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
      return addHost(this.host, imageSrc);
    },
  },

  computed: {
    dateTitle() {
      return format(new Date(this.item.start_date), 'd MMMM yyyy')
    },
    multiplier() {
      return this.width / 545;
    },
    srcset() {
      const widths = [200, 300, 600, 900];
      return getSrcSet(this.host, this.item.event_listing.image, widths);
    }
  }
}
</script>

<style scoped>
.event-card__container--three-by-two {
  text-align: center;
}

.event-image-three-by-two {
  width: 100%;
  object-position: center center;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: block;
  object-fit: cover;
}

.event-card-three-by-two-text {
  padding: 6px 16px;
  padding-bottom: 20px;
  text-align: left;
  background-color: whitesmoke;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.event-card-three-by-two__header {
  display: block;
  margin: 0;
}
.event-card-three-by-two__header-small {
  display: block;
  margin:0;
}
</style>
