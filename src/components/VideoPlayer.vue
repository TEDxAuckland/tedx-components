<template>
  <div>
    <button v-on:click="playVideo" class="talk-card__link"></button>
    <div class="video-player">

    </div>
  </div>
</template>

<script>

export default {
  name: "video-player",
  props: 'videoId',

  embedUrl(){
    return "https://www.youtube.com/embed/" + this.videoId + "?rel=0&amp;showinfo=0&amp;autoplay=1"
  },

  playVideo(){

  }
}

</script>

<style lang="scss">
</style>
