<template>
  <Videos
    :videoNames="videoNames"
    :videosJson="videosJson"
    :videosCollection="videosCollection"
    :people="people"
  />
</template>

<script>
import Videos from '@/sections/Videos'

export default {

  props: {
    playlistId: String,
    playlistJson: Object,
    videosJson: Object,
    videosCollection: Array,
    people: Array
  },

  data() {
    return {
      playlist: this.playlistJson[this.playlistId]
    }
  },

  computed: {
    videoIds() {
      return Object.values(this.playlist).map( item => item.video_id)
    },
    collectionVideos() {
      return this.videosCollection.filter( video =>
        this.videoIds.includes(video.youtubeVideoId)
      ).sort( (a, b) => a.position - b.position )
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
