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
            // TODO: here and in other places, use rem or em like Anthony told 
            'font-size': adjustedMultiplier * 17.3 + 'px',
          }"
        ></div>
        <div 
          v-if="item.event_listing.is_highlighted"
          class="event-card-square__desc" 
          v-html="item.event_listing.subtitle"
          :style="{
            'font-size': adjustedMultiplier * 12 + 'px',
            'margin-bottom': adjustedMultiplier * 4 + 'px',
          }"
        ></div>
        <div 
          class="event-card-square__desc" 
          v-html="item.event_listing.description"
          :style="{
            'font-size': adjustedMultiplier * 12 + 'px',
            'margin-bottom': adjustedMultiplier * 8 + 'px',
          }"
        ></div>
      </div>
    </div>
  </a>
</template>

<script>
import { getSrcSet, addHost } from './responsiveImage'

export default {
  name: 'event-card-square',
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
    is_highlighted: {
      type: Boolean,
    },
  },
  methods: {
    addHost(imageSrc) {
      return addHost(this.host, imageSrc);
    },
  },
  computed: {
    multiplier() {
      return this.width / 217.5;
    },
    adjustedMultiplier() {
      const is_highlighted = this.item.event_listing.is_highlighted;
      return this.multiplier / (is_highlighted ? 3 : 2) * 2;
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
  transition: all 0.2s;
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
  box-shadow: inset 0px 1000px 8px 0px rgb(0 0 0 / 50%);
  top: 0;
}

.event-card-square-text {
  position: absolute;
  text-align: left;
  color: white;
}

.event-card-square__header {
  display: block;
  margin: 0;
}

</style>