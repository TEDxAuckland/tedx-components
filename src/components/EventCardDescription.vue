<template>
  <span>
    <span v-if="theme">
      <span v-if="location">
        <i v-html="theme"></i>
        <span> | </span>
        <span v-html="location"></span>
      </span>
      <span v-else>
        <span v-html="theme"></span>
      </span>
    </span>
    <span v-else>
      <span v-if="location">
        <span v-html="location"></span>
      </span>
      <span v-else>
        <!-- nothing -->
      </span>
    </span>
  </span>
</template>

<script>
export default {
  name: 'event-card-square',
  props: {
    description: {
      type: String,
    },
  },
  methods: {
  },
  computed: {
    desc_array() {
      return this.description.split('|');
    },
    theme() {
      return this.desc_array[0]
    },
    location() {
      return this.desc_array[1]
    },
  }
}
</script>

<style>
</style>