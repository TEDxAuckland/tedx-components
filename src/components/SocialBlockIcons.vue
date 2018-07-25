<template>
  <ul class="social-block">
    <li class="social-block__title">Social Media</li>

    <ul class="social-block__icon-row">

      <li v-if="person.twitter" class="social-block__icon">
        <a :href="person.twitter" target="_blank">
          <social-icon :icon="'Twitter'" />
        </a>
      </li>

      <li v-if="person.facebook" class="social-block__icon">
        <a :href="person.facebook" target="_blank">
          <social-icon :icon="'Facebook'" />
        </a>
      </li>

      <li v-if="person.google_plus" class="social-block__icon">
        <a :href="person.google_plus" target="_blank">
          <social-icon :icon="'Google Plus'" />
        </a>
      </li>

      <li v-if="person.github_username" class="social-block__icon">
        <a :href="person.github_username" target="_blank">
          <social-icon :icon="'Github'" />
        </a>
      </li>

      <li v-if="person.instagram" class="social-block__icon">
        <a :href="person.instagram" target="_blank">
          <social-icon :icon="'Instagram'" />
        </a>
      </li>

    </ul>
  </ul>


</template>

<script>
import SocialIcon from './SocialIcon.vue'

export default {
  props: ['person'],

  components: {
    SocialIcon
  }
}
</script>

<style lang="scss">
</style>
