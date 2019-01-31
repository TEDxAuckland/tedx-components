<template>

  <div
    :class="[{ 'video-card--active': active }, 'vd-' + video.id]"
    @click="[toggleCard(index), scrollToCard()]"
    >
    <div class="talk-card__link">

      <div
        v-if="video.images !== null"
        class="talk-card__image-container">
        <div class="talk-card__play-button">&nbsp;</div>
          <srcset-img
                      :path="video.images[0].image"
                      class="talk-card__image"
                      :widths="[200, 300, 600, 900]"
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
        <img class="talk-card__image"
             :src="youtubeVideo.thumbnail_url.medium"
             :srcset="`${youtubeVideo.thumbnail_url.medium} 320w,
                       ${youtubeVideo.thumbnail_url.high} 480w,
                       ${youtubeVideo.thumbnail_url.standard} 640w,
                       ${youtubeVideo.thumbnail_url.maxres} 1280w`"
             sizes="(max-width: 1200px) 33.33vw,
                    (max-width: 900px) 50vw,
                    (max-width: 600px) 100vw,
                    400px"
             :alt="`${youtubeVideo.title} video`"/>
      </div>


      <a :href="video.url" class="caption">
        <h4 class="caption__title">{{ video.title }}: <template v-if="person">{{ person.name }}</template></h4>
      </a>
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
    people: Array
  },

  data() {
    return {
    }
  },

  computed: {
    youtubeVideo() {
      return this.youtubeData[this.video.youtubeVideoId]
    },
    person() {
      return this.people.find( person => person.youtube_video_id == this.video.youtubeVideoId )
    },
  },

  components: {
    SrcsetImg
  }
}
</script>

<style lang="scss">
  @import '../assets/css/jekyll.css';
</style>
