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
import axios from 'axios'
import VideoCard from '@/components/VideoCard'
import SrcsetImg from '../components/SrcsetImg'

export default {

  props: {
    playlistId: String,
  },

  created() {
    let self = this
    axios.get('/youtube_playlist_data.json')
    .then(function(res) {
      self.playlistJson = res.data
    })
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
      videosCollection: [],
      playlistJson: {}
    }
  },

  computed: {
    playlist() {
      return this.playlistJson[this.playlistId]
    },
    videoIds() {
      return Object.values(this.playlist).map( item => item.video_id)
    },
    collectionVideos() {
      return this.videosCollection.filter(video => this.videoIds.includes(video.youtubeVideoId))
    }
  },

  components: {
    VideoCard,
    SrcsetImg
  }
}
</script>

<style lang="scss">
  @import '../assets/css/jekyll.css';
</style>
