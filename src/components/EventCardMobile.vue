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
        :src="item.event_listing.image"
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
        >View Past Event</button>
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
        // TODO: re-grade everything to 364
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
    gap: 16px;
  }
  
  .event-card-mobile__header {
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin: 0;
    /* TODO: remove overwritten */
    font-weight: 600;
  }
  .event-card-mobile__header-small {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    /* TODO: remove overwritten */
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
  