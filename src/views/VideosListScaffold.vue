<template>
  <div id="app">

    <section class="section-bg-white">
      <div class="container">
        <h3 class="section-heading section-heading--speakers">videos</h3>

        <VideosList
          :videoNames="videoNames"
          :videosCollection="videosCollection"
          :videosJson="videosJson"
          :people="peopleJson"
        />

      </div>
    </section>

  </div>
</template>

<script>
import VideosList from '@/sections/VideosList'

import videosCollection from '@/assets/json/videos.json'
import videosJson from '@/assets/json/youtube_video_data.json'
import playlistJson from '@/assets/json/youtube_playlist_data.json'
import peopleJson from '@/assets/json/people.json'

var videoNames = [
  'from-suicidal-to-hopeful,-how-i-learnt-to-fight',
  'ihumātao',
  'the-narrative-origins-of-spaceflight', 
  'food-for-thought--tedxauckland-2018',
  'the-luckiest-boy-in-the-world',
  'the-hip-op-eration-crew',
  'tedxauckland-2016-foodstory',
  'find-a-cause-worth-dying-for',
  'fighting-blindness-with-$20-and-a-smart-phone'
]

export default {
  name: 'videos-expanding-preview-scaffold',
  data() {
    return {
      videoNames,
      videosCollection,
      videosJson,
      playlistJson,
      peopleJson
    }
  },
  components: {
    VideosList,
  }
}



</script>

<style>
  body: {
    background-color: #fff !important;
  }
</style>
