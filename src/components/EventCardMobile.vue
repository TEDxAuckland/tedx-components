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
        :srcset="srcset"
        :src="src"
        :style="{
          'width': width + 'px',
          'height': (height * 2 / 3) + 'px',
          'object-position': objectPosition
        }"
      />
      <div
        class="event-card-mobile-text"
        :style="{
          'padding-top': (multiplier * 16) + 'px',
          'padding-right': (multiplier * 16) + 'px',
          'padding-bottom': (multiplier * 16) + 'px',
          'padding-left': (multiplier * 16) + 'px',
          gap: rem(adjustedMultiplier * 16),
        }"
      >
        <div 
          class="event-card-mobile__header" 
          v-html="`${item.title}`"
          :style="{
            'font-size': rem(adjustedMultiplier * 14),
            'line-height': 1,
          }"
        ></div>
        <div 
          class="event-card-mobile__desc" 
          :style="{
            'font-size': rem(adjustedMultiplier * 12),
            'line-height': 1,
          }"
        >
          <EventCardDescription :description="item.event_listing.description" />
        </div>
        <button
          class="event-card-mobile__cta"
          :style="{
            height: rem(adjustedMultiplier * 40),
            'font-size': rem(adjustedMultiplier * 12),
          }"
          v-html="viewPostCopy"
        ></button>
      </div>
    </div>
  </a>
</template>

<script>
import { getSrcSet, addHost } from './responsiveImage'
import { rem } from './rem'
import EventCardDescription from '@/components/EventCardDescription';

export default {
  name: 'event-card-mobile',

  components: {
    EventCardDescription,
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
    clientWidth: {
      type: Number,
    },
  },
  methods: {
    addHost(imageSrc) {
      return addHost(this.host, imageSrc);
    },
    rem(pixels) {
      return rem(pixels, this.clientWidth);
    }
  },
  computed: {
    multiplier() {
      return this.width / 364;
    },
    adjustedMultiplier() {
      return this.multiplier;
    },
    viewPostCopy() {
      return new Date() < new Date(this.item.start_date) ? 'View Event' : 'View Past Event';
    },
    srcset() {
      if (this.item.id === '/events/dining-in-the-dark') {
        return undefined
      }
      else {
        const widths = [200, 300, 600, 900];
        return getSrcSet(this.host, this.item.event_listing.image, widths);
      }
    },
    src() {
      if (this.item.id === '/events/dining-in-the-dark') {
        return addHost(this.host, '/uploads/in-the-dark-card-bg.gif')
      }
      else {
        return addHost(this.host, this.item.event_listing.image)
      }
    },
    objectPosition() {
      if (this.item.id === '/events/dining-in-the-dark') {
        return 'top center'
      }
      else {
        return 'center center'
      }
    }
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

.event-card-mobile__cta {
  border: none;
  color: #f44336;
  border: 1px solid #f44336;
  cursor: pointer;
  background: transparent;
}
.event-card-mobile__cta:active {
  color: white;
  background-color: #f44336;
}
</style>
