<template>
  <div id="app">

    <section class="section-bg-white">
      <div class="container">
        <h3 class="section-heading section-heading--speakers">videos</h3>

        <VideosPlaylist
          :playlistId="playlistId"
        />

      </div>
    </section>

  </div>
</template>

<script>
import VideosPlaylist from '@/sections/VideosPlaylist'

var playlistId = "PLcm2pIIAwlDutXJI4AWeUPpEmBZCIF2ry"

export default {
  name: 'videos-expanding-preview-scaffold',
  data() {
    return {
      playlistId,
    }
  },
  components: {
    VideosPlaylist,
  }
}



</script>

<style>
  body: {
    background-color: #fff !important;
  }
</style>
