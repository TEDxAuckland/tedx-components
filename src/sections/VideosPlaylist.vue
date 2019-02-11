<template>
  <Videos :videoNames="videoNames" />
</template>

<script>
import Videos from '@/sections/Videos'
import axios from 'axios'

export default {

  props: {
    playlistId: String,
  },

  data() {
    return {
      videosCollection: [],
      playlist: []
    }
  },

  created() {
    let self = this
    axios.get('/youtube_playlist_data.json')
      .then(function(res) {
        self.playlist = res.data[self.playlistId]
      })
    axios.get('/videos.json')
      .then(function(res) {
        self.videosCollection = res.data
      })
  },

  computed: {
    videoIds() {
      return Object.values(this.playlist).map( item => item.video_id)
    },
    collectionVideos() {
      return this.videosCollection.filter(video => this.videoIds.includes(video.youtubeVideoId))
    },
    videoNames() {
      return this.collectionVideos.map( video => video.id )
    }
  },

  components: {
    Videos
  }
}
</script>

<style lang="scss">
  @import '../assets/css/jekyll.css';
</style>
