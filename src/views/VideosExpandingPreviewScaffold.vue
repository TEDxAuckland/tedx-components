<template>
  <div id="app">

    <section>
      <div class="container">
        <h3 class="section-heading section-heading--speakers">videos</h3>

        <Videos :videoNames="videoNames" />

      </div>
    </section>

  </div>
</template>

<script>
import Videos from '@/sections/Videos'

var videoNames = [
  'from-suicidal-to-hopeful,-how-i-learnt-to-fight',
  'ihumātao',
  'the-narrative-origins-of-spaceflight',
  'food-for-thought--tedxauckland-2018',
  'the-luckiest-boy-in-the-world',
  'know-your-country',
  'zombie-attack',
  'the-hip-op-eration-crew',
  'tedxauckland-2016-foodstory',
  'find-a-cause-worth-dying-for',
  'fighting-blindness-with-$20-and-a-smart-phone'
]

export default {
  name: 'videos-expanding-preview-scaffold',
  data() {
    return {
      videoNames,
    }
  },
  components: {
    Videos,
  }
}

</script>

<style>
  body: {
    background-color: #fff !important;
  }
</style>
