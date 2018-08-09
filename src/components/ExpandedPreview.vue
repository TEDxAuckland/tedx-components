<template>
  <section class="full-width-section">
    <div class="expanded-preview__wrapper">
      <div class="container expanded-preview">
        <div v-if="speaker.youtube_video_id" class="expanded-preview__video">
          <template v-if="speaker.youtube_video_id">
            <iframe
              :src="'https://www.youtube-nocookie.com/embed/' + speaker.youtube_video_id + '?rel=0&amp;showinfo=0'"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen>
            </iframe>
          </template>
        </div>
        <div
          class="expanded-preview__content"
          :class="{'expanded-preview__content--full-width': !speaker.youtube_video_id }"
          >
          <div class="expanded-preview__header">
            <h1 class="person__title">{{ speaker.name }}</h1>
            <a :href="speaker.url" class="expanded-preview__profile-link"> see profile...</a>
          </div>
          <div class="xp-content">

            <markdown-renderer :markdown="speaker.description_markdown" />
          </div>

          <div class="expanded-preview__social">
            <social-block-links :person="speaker" />
            <social-block-icons :person="speaker" />
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
  props: ['speaker'],

  components: {
    MarkdownRenderer,
    SocialBlockLinks,
    SocialBlockIcons,
  }
}
</script>

<style lang="scss">
</style>
