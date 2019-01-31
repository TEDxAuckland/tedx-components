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

    </template>

  </div>
</template>

<script>
import VideoCard from '@/components/VideoCard'

export default {

  props: {
    videoNames: Array,
    videosCollection: Array,
    videosJson: Object,
    people: Array
  },

  data() {
    return {
      collectionVideos: this.videosCollection.filter(video => this.videoNames.includes(video.id)),
      activeIndex: "",
      containerWidth: "",
      cardWidth: ""
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
