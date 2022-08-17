<template>
  <div class="event-card__container event-card__container--small">
    <img src="../../public/uploads/default-speaker-photo.jpg" alt="Avatar" id="event-image">
    <div class="event-card-small-text">
      <h1>May 2021</h1>
      <h2>[theme]</h2>
      <br/>
      <p>Baby description of what the event was. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do... </p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'event-card-small',
}
</script>

<style>

.event-card__container--small {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  max-width: 320px;
  max-height: 320px; 
  position: relative;
  /* margin: auto; */
  border: 0.5px solid grey;
  border-radius: 5px;
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
  font-size: 2vw;
}

.event-card-small-text h2 {
  font-size: 1vw;
}

.event-card-small-text p {
  font-size: 0.8vw;
}
</style>