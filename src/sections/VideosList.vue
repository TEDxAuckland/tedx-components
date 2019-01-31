<template>
  <div class="talk-container" ref="container">

    <template v-for="video in collectionVideos">

      <VideoCard
        class="talk-card"
        :video="video"
        :youtube-data="videosJson"
        :people="people"
        :ref="'cards'"
        :key="'vc-' + video.id"
      />

    </template>

  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard'
import axios from 'axios'

export default {

  props: {
    videoNames: Array,
  },

  created() {
    let self = this
    axios.get('/youtube_video_data.json')
      .then(function(res) {
        self.videosJson = res.data
      })
    axios.get('/people.json')
      .then(function(res) {
        self.people = res.data
      })
    axios.get('/videos.json')
      .then(function(res) {
        self.videosCollection = res.data
      })
  },

  data() {
    return {
      videosJson: {},
      people: [],
      videosCollection: []
    }
  },

  computed: {
    collectionVideos() {
      return this.videosCollection.filter(video => this.videoNames.includes(video.id))
    }
  },

  components: {
    VideoCard
  }
}
</script>

<style lang="scss">
  @import '../assets/css/jekyll.css';
</style>
