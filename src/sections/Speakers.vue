<template>
  <div class="speakers" ref="speakers">

    <template v-for="(speaker, index) in speakers">

      <div
        class="speaker-card"
        :class="[{ 'speaker-card--active': activeIndex === index }, 'sp-' + speaker.id]"
        :key="'sp-' + speaker.id"
        :ref="'speaker-cards'"
        @click="[toggleSpeaker(index), scrollToSpeaker()]"
        >
        <srcset-img :path="speaker.image"
                    class="speaker-card__image"
                    :widths="[200, 300, 600, 900]"
                    sizes="(max-width: 1200px) 25vw,
                           (max-width: 900px) 33.33vw,
                           (max-width: 600px) 50vw,
                           300px"
                    :alt="'picture of ' + speaker.name" />

        <div class="speaker-card__caption">
          {{ speaker.name }}
        </div>
      </div>

      <expanded-preview
        v-if="index === expandingPreviewIndex && activeSpeaker"
        :key="'xp-' + speaker.id"
        :speaker="activeSpeaker"
      />
    </template>

  </div>
</template>

<script>
import ExpandedPreview from '../components/ExpandedPreview.vue'
import SrcsetImg from '../components/SrcsetImg.vue'

export default {

  props: ['speakerNames', 'speakerJson'],

  data() {
    return {
      speakers: this.speakerJson.filter(speaker => this.speakerNames.includes(speaker.id)),
      activeIndex: "",
      speakersWidth: "",
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
      return Math.round(this.speakersWidth / this.cardWidth)
    },
    activeRow() {
      if (!Number.isInteger(this.activeIndex)) {
        return 0
      } else {
        return Math.ceil((this.activeIndex + 1) / this.columns)
      }
    },
    totalRows() {
      return Math.ceil(this.speakers.length / this.columns)
    },
    expandingPreviewIndex() {
      if (this.activeRow === this.totalRows) {
        return this.speakers.length -1
      } else {
        return this.activeRow * this.columns -1
      }
    },
    activeSpeaker() {
      return this.speakers[this.activeIndex]
    }
  },

  methods: {
    handleResize() {
      this.setSpeakersWidth()
      this.setCardWidth()
    },
    setSpeakersWidth() {
      if (this.$refs["speakers"]) {
        this.speakersWidth = this.$refs["speakers"].offsetWidth
      } else {
        this.speakersWidth = 0
      }
    },
    setCardWidth() {
      if (this.$refs["speaker-cards"]) {
        this.cardWidth = this.$refs["speaker-cards"][0].offsetWidth
      } else {
        this.cardWidth = 0
      }
    },
    toggleSpeaker(index) {
      if (this.activeIndex === index) {
        this.activeIndex = null
      } else {
        this.activeIndex = index
      }
    },
    scrollToSpeaker() {
      this.$nextTick(() => {
        if (this.activeIndex) {
          let elementClass =  `.sp-${this.activeSpeaker.id}`
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
    ExpandedPreview,
    SrcsetImg
  }
}
</script>

<style lang="scss">
  @import '../assets/css/jekyll.css';

  .speaker-card {
    padding-top: 24.5%;
  }

</style>
