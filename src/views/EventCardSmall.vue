<template>
  <div class="event-card__container event-card__container--small anim--lift-up card--outline">
    <img v-bind:src="'http://127.0.0.1:4000'+item.image" alt="Avatar" id="event-image">
    <div class="event-card-small-text">
      <h1 v-html="item.title"></h1>
      <h2 v-html="item.short_title"></h2>
      <br/>
      <p v-html="`${item.content.slice(0, 100)}...`"></p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'event-card-small',
  props: {
    item: {
      type: Object,
    }
  },

}
</script>

<style>

.event-card__container--small {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  max-width: 320px;
  max-height: 320px; 
  position: relative;
  /* margin: auto; */
}

#event-image {
  width: 100%;
  position: relative;
}

.event-card-small-text {
  position: absolute;
  text-align: left;
  bottom: 10px;
  left: 15px;
  right: 15px;
  color: white;
}

.event-card-small-text h1 {
  margin: 0;
  font-size: 2vh;
}

/* .event-card-small-text h2 {
  font-size: 1vh;
}

.event-card-small-text p {
  font-size: 0.8vh;
} */
</style>