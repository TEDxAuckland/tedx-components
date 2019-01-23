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
import ExpandedPreview from '../components/ExpandedPreview'
import SrcsetImg from '../components/SrcsetImg'

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

  mounted() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },

  computed: {
    columns() {
      return Math.round(this.containerWidth / this.cardWidth)
    },
    activeRow() {
      if (!Number.isInteger(this.activeIndex)) {
        return 0
      } else {
        return Math.ceil((this.activeIndex + 1) / this.columns)
      }
    },
    totalRows() {
      return Math.ceil(this.collectionVideos.length / this.columns)
    },
    expandingPreviewIndex() {
      if (this.activeRow === this.totalRows) {
        return this.collectionVideos.length -1
      } else {
        return this.activeRow * this.columns -1
      }
    },
    activeCard() {
      return this.collectionVideos[this.activeIndex]
    }
  },

  methods: {
    handleResize() {
      this.setContainerWidth()
      this.setCardWidth()
    },
    setContainerWidth() {
      if (this.$refs["container"]) {
        this.containerWidth = this.$refs["container"].offsetWidth
      } else {
        this.containerWidth = 0
      }
    },
    setCardWidth() {
      if (this.$refs["cards"]) {
        this.cardWidth = this.$refs["cards"][0].offsetWidth
      } else {
        this.cardWidth = 0
      }
    },
    toggleCard(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null
      } else {
        this.activeIndex = index
      }
    },
    scrollToCard() {
      this.$nextTick(() => {
        if (this.activeIndex) {
          let elementClass =  `.sp-${this.activeCard.id}`
          let speaker = this.$el.querySelector(elementClass)
          let scrollY = speaker.offsetTop - 50
          window.scrollTo({
            top: scrollY,
            behavior: "smooth"
          })
        }
      })
    }
  },

  components: {
    VideoCard,
    ExpandedPreview,
    SrcsetImg
  }
}
</script>

<style lang="scss">
  @import '../assets/css/jekyll.css';
</style>
