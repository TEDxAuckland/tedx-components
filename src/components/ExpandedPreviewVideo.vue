<template>
  <section class="full-width-section">
    <div class="expanded-preview__wrapper expanded-preview__wrapper--bg-white">
      <div class="container expanded-preview">

        <div v-if="video.youtubeVideoId" class="talks-expanded-preview__video-column">

          <template v-if="video.youtubeVideoId">
            <div class="talks-expanded-preview__iframe-wrapper">
              <iframe
                :src="'https://www.youtube-nocookie.com/embed/' + video.youtubeVideoId + '?rel=0&amp;showinfo=0'"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen>
              </iframe>
            </div>
          </template>
        </div>

        <div
          class="talks-expanded-preview__content"
          :class="{'talks-expanded-preview__content--full-width': !video.youtubeVideoId }"
          >
          <div class="talks-expanded-preview__header">
            <h1 class="person__title">{{ video.title }}</h1>
            <a :href="video.url" class="talks-expanded-preview__profile-link"> more info...</a>
          </div>
          <div class="xp-content">

            <markdown-renderer :markdown="video.content" />
          </div>

          <div v-if="person" class="talks-expanded-preview__social">
            <social-block-links :person="person" />
            <social-block-icons :person="person" />
          </div>
        </div>


      </div>
    </div>
  </section>
</template>

<script>
import MarkdownRenderer from './MarkdownRenderer.vue'
import SocialBlockLinks from './SocialBlockLinks.vue'
import SocialBlockIcons from './SocialBlockIcons.vue'

export default {
  props: {
    video: Object,
    youtubeData: Object,
    people: Array,
  },

  computed: {
    youtubeVideo() {
      return this.youtubeData[this.video.youtubeVideoId]
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
    MarkdownRenderer,
    SocialBlockLinks,
    SocialBlockIcons,
  }
}
</script>

<style lang="scss">
</style>
