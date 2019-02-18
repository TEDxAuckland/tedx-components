<template>
  <div
    :class="[{ 'video-card--active': active }, 'vd-' + video.id]"
    @click="$emit('card-clicked')"
    >
    <div class="talk-card__link">

      <div
        v-if="video.images !== null"
        class="talk-card__image-container">
        <div class="talk-card__play-button">&nbsp;</div>
          <srcset-img
                      :path="video.images[0].image"
                      class="talk-card__image"
                      :widths="[200, 300, 600, 900, 1200]"
                      sizes="(max-width: 1200px) 33.33vw,
                             (max-width: 900px) 50vw,
                             (max-width: 600px) 100vw,
                             400px"
                      :alt="' ' + video.name" />
      </div>


      <div
        v-else
        class="talk-card__image-container">
        <div class="talk-card__play-button">&nbsp;</div>
        <img v-if="youtubeVideo"
             class="talk-card__image"
             :src="youtubeVideo.thumbnail_url.medium"
             :srcset="youtubeVideoSrcset"
             sizes="(max-width: 1200px) 33.33vw,
                    (max-width: 900px) 50vw,
                    (max-width: 600px) 100vw,
                    400px"
             :alt="`${youtubeVideo.title} video`"/>
      </div>


      <div class="caption">
        <h4 class="caption__title">{{ video.title }}: <template v-if="person">{{ person.name }}</template></h4>
      </div>
    </div>
    <div
      v-if="active"
      class="talk-card__active-arrow">
      &nbsp;
    </div>
  </div>

</template>

<script>
import SrcsetImg from '../components/SrcsetImg.vue'

export default {

  props: {
    active: Boolean,
    video: Object,
    youtubeData: Object,
    people: Array,
  },

  data() {
    return {
    }
  },

  mounted() {
    this.$emit("card-mounted")
  },

  computed: {
    youtubeVideo() {
      return this.youtubeData[this.video.youtubeVideoId]
    },
    youtubeVideoSrcset() {
      let widths = ["120w", "320w", "480w", "640w", "1280w"]
      let urls = Object.values(this.youtubeVideo.thumbnail_url).filter( n => n)
      return urls.map( (url, index) => `${url} ${widths[index]}` ).join(", ")
    },
    person() {
      return this.people.find( person => person.youtube_video_id == this.video.youtubeVideoId )
    },
    videoURL() {
      if (this.youtubeVideo) {
        return `https://www.youtube.com/embed/${this.youtubeVideo.id}?rel=0&amp;showinfo=0&amp;autoplay=1`
      } else {
        return ''
      }
    }
  },

  components: {
    SrcsetImg
  }
}
</script>

<style lang="scss">
  @import '../assets/css/jekyll.css';
</style>
