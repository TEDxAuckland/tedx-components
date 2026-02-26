<template>
  <div id="app">

    <section>
      <div class="container">
        <h3 class="section-heading section-heading--speakers">videos</h3>

        <VideosPlaylist
          :playlistId="playlistId"
          :playlistJson="playlistJson"
          :videosJson="videosJson"
          :videosCollection="videosCollection"
          :people="peopleJson"
        />

      </div>
    </section>

  </div>
</template>

<script>
import VideosPlaylist from '@/sections/VideosPlaylist'

import videosCollection from '@/../public/videos.json'
import videosJson from '@/../public/youtube_video_data.json'
import playlistJson from '@/../public/youtube_playlist_data.json'
import peopleJson from '@/../public/people.json'

var playlistId = "PLcm2pIIAwlDutXJI4AWeUPpEmBZCIF2ry"

export default {
  name: 'videos-expanding-preview-scaffold',
  data() {
    return {
      playlistId,
      videosCollection,
      videosJson,
      playlistJson,
      peopleJson
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
