<template>
  <a :href="item.url">
    <div
      class="event-card__container event-card__container--square card--outline"
      :style="{
        'max-width': width + 'px',
        'max-height': height + 'px',
      }"
    >
      <img
        alt="Avatar"
        class="event-image-square"
        :srcset="srcset"
        :src="src"
        :style="{
          'width': width + 'px',
          'height': height + 'px',
        }"
      />
      <div class="event-image-square-shadow"></div>
      <div
        class="event-card-square-text"
        :style="{
          'bottom': multiplier * 10 + 'px',
          'left': multiplier * 15 + 'px',
          'right': multiplier * 15 + 'px',
        }"
      >
        <div 
          class="event-card-square__header" 
          v-html="`${item.title}`"
          :style="{
            'font-size': rem(adjustedMultiplier * 17.3),
          }"
        ></div>
        <div 
          v-if="isHighlighted"
          class="event-card-square__desc" 
          v-html="item.event_listing.subtitle"
          :style="{
            'font-size': rem(adjustedMultiplier * 12),
            'margin-bottom': rem(adjustedMultiplier * 4),
          }"
        ></div>
        <div 
          class="event-card-square__desc" 
          v-if="item.event_listing.description"
          :style="{
            'font-size': rem(adjustedMultiplier * 12),
            'margin-bottom': rem(adjustedMultiplier * 8),
          }"
        >
          <EventCardDescription :description="item.event_listing.description" />
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import { getSrcSet, addHost } from './responsiveImage'
import { rem } from './rem'
import EventCardDescription from '@/components/EventCardDescription';

export default {
  name: 'event-card-square',

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
      return this.width / 217.5;
    },
    isHighlighted() {
      return this.item.event_listing.is_highlighted;
    },
    adjustedMultiplier() {
      return this.multiplier / (this.isHighlighted ? 3 : 2) * 2;
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
    }
  }
}
</script>

<style>
.event-card__container--square {
  transition: transform 0.2s, box-shadow 0.2s;
  position: relative;
  box-shadow: 0 0 0.4rem rgb(0 0 0 / 20%);
}
.event-card__container--square:hover {
  transform: translateY(-1rem);
  box-shadow: 0 1rem 1rem rgb(0 0 0 / 50%);
}

.event-image-square {
  position: relative;
  object-fit: cover;
  object-position: left;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  display: block;
}
.event-image-square-shadow {
  position: absolute;
  width:100%;
  height:100%;
  box-shadow: inset 0px 1000px 8px 0px rgb(0 0 0 / 25%);
  top: 0;
}

.event-card-square-text {
  position: absolute;
  text-align: left;
  color: white;
  text-shadow: 2px 2px 2px #000000;
}

.event-card-square__header {
  display: block;
  margin: 0;
}

</style>