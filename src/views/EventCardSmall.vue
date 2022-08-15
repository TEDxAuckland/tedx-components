<template>
  <div class="event-container">
    <div class="card-header">
      <h1>May 2021</h1>
      <h2>[theme]</h2>
      <br/>
      <h2>Baby description of what the event was. Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do... </h2>
    </div>
  </div>

</template>

<script>
export default {
  name: 'event-card-small',
}
</script>

<style>

.event-container {
  max-width: 320px;
  margin: 30px auto; /* to put in middle of page */
  max-height: 320px;
  padding: 30px;
  position: relative;

  border: 1px solid steelblue;
  border-radius: 5px;

  background-image: url("../../public/uploads/default-speaker-photo.jpg");
  background-size: 320px 320px;
}

.card-header {
  flex-direction: column;
  /* align-items: center; */
  padding-top: 50px;
  position: relative;
}

h1 {
  padding-bottom: 0%;
  color: white;
}

h2 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 10px;
  color: white;
}
</style>