<template>
  <div class="talk-container" ref="container">

    <template v-for="(video, index) in collectionVideos">

      <VideoCardExp
        class="talk-card"
        :video="video"
        :youtube-data="videosJson"
        :people="people"
        :active="activeIndex === index"
        :key="'vc-' + video.id"
        @card-clicked="[toggleCard(index), scrollToCard()]"
        @card-mounted="setCardWidth"
      />

      <ExpandedPreviewVideo
        v-if="index === expandingPreviewIndex && activeCard"
        :key="'xp-' + video.id"
        :video="activeCard"
        :youtube-data="videosJson"
        :people="people"
      />
    </template>

  </div>
</template>

<script>
import VideoCardExp from '@/components/VideoCardExp'
import ExpandedPreviewVideo from '@/components/ExpandedPreviewVideo'
import SrcsetImg from '@/components/SrcsetImg'
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
      videosCollection: [],

      activeIndex: "",
      containerWidth: "",
      cardWidth: ""
    }
  },

  mounted() {
    this.containerWidth = this.$el.offsetWidth
    window.addEventListener('resize', this.handleResize)
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },

  computed: {
    collectionVideos() {
      return this.videosCollection.filter(video => this.videoNames.includes(video.id))
    },

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
      this.containerWidth = this.$el.offsetWidth
    },
    setCardWidth() {
      this.cardWidth = this.$children[0].$el.offsetWidth
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
          let elementClass =  `.vd-${this.activeCard.id}`
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
    VideoCardExp,
    ExpandedPreviewVideo,
    SrcsetImg
  }
}
</script>

<style lang="scss">
  @import '../assets/css/jekyll.css';
</style>
