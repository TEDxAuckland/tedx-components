<template>
  <div class="talk-container" ref="container">

    <template v-for="(video, index) in collectionVideos">

      <VideoCard
        class="talk-card"
        :video="video"
        :youtube-data="videosJson"
        :people="people"
        :active="activeIndex === index"
        :ref="'cards'"
        :key="'vc-' + video.id"
      />

      <expanded-preview
        v-if="index === expandingPreviewIndex && activeCard"
        :key="'xp-' + video.id"
        :speaker="activeCard"
      />
    </template>

  </div>
</template>

<script>
import VideoCard from './VideoCard'
import SrcsetImg from '../components/SrcsetImg'

export default {

  props: {
    playlistId: String,
    playlistJson: Object,
    videosCollection: Array,
    videosJson: Object,
    people: Array
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
