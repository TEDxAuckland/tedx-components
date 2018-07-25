<template>
  <ul class="social-block">
    <li class="social-block__title">Links</li>

    <li class="social-block__link">
      <a :href="person.website_url" target="_blank">
        {{ person.website_url }}
      </a>
    </li>

    <li class="social-block__link">
      <a :href="person.medium_url" target="_blank">
        {{ person.medium_url }}
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  props: ['person'],
}
</script>

<style lang="scss">
</style>
