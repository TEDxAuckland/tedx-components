<template>
    <a :href="item.url">
    <div
      class="event-card__container event-card__container--mobile card--outline"
      :style="{
        'max-width': width + 'px',
        'max-height': height + 'px',
      }"
    >
      <img
        alt="Avatar"
        class="event-card-mobile__image"
        :src="item.event_listing.image"
        :style="{
          'height': (height * 2 / 3) + 'px',
        }"
      />
      <div
        class="event-card-mobile-text"
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
            class="event-card-mobile__header" 
            v-html="`${item.title}`"
            :style="{
              'font-size': (width / 545 * 25.95) + 'px',
            }"
          ></div>
          <div
            class="event-card-mobile__header-small" 
            v-html="date_title"
            :style="{
              'font-size': (width / 545 * 15.12) + 'px',
            }"
          ></div>
        </div>
        <div 
          class="event-card-mobile__desc" 
          v-html="item.event_listing.description"
          :style="{
            'font-size': (width / 545 * 12) + 'px',
            'margin-bottom': multiplier * 8 + 'px',
          }"
        ></div>
        <button>View Past Event</button>
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
  
    data() {
      return {
        baseUrl: process.env.BASE_URL,
      }
    },
  
    computed: {
      date_title() {
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
    padding: 6px 16px;
    padding-bottom: 20px;
    text-align: left;
    background-color: whitesmoke;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .event-card-mobile__header {
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin: 0;
  }
  .event-card-mobile__header-small {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin:0;
  }
  
  .event-card-mobile__desc {
  }
  </style>
  