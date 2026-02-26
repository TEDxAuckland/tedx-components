<template>
  <div id="app">

    <section>
      <div class="container">
        <h3 class="section-heading section-heading--speakers">videos</h3>

        <Videos
          :videoNames="videoNames"
          :videosJson="videosJson"
          :videosCollection="videosCollection"
          :people="peopleJson"
        />

      </div>
    </section>

  </div>
</template>

<script>
import Videos from '@/sections/Videos'

import videosJson from '@/../public/youtube_video_data.json'
import videosCollection from '@/../public/videos.json'
import peopleJson from '@/../public/people.json'

var videoNames = [
  'from-suicidal-to-hopeful,-how-i-learnt-to-fight',
  'finding-your-inner-weirdo',
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
      videosJson,
      videosCollection,
      peopleJson,
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
