<template>
  <div id="app">

    <section id="speakers" class="section-bg-swirl">
      <div class="container">
        <h3 class="section-heading section-heading--speakers">speakers</h3>

        <div class="speakers">

          <expanding-preview v-for="speaker in speakers">

            <template slot="speakerCard">

              <div
                class="speaker-card"
                :class="[{ 'speaker-card--active': activeIndex === index }, 'sp-' + speaker.id]"
                :key="'sp-' + speaker.id"
                :ref="'speaker-cards'"
                @click="[toggleSpeaker(index), scrollToSpeaker()]"
                >
                <img class="speaker-card__image" :src="speaker.image" :alt="'picture of ' + speaker.name">

                <div class="speaker-card__caption">
                  {{ speaker.name }}
                </div>
              </div>

            </template>

            <template slot="expandedPreview">

            </template>

          </expanding-preview>

        </div>

      </div>
    </section>

  </div>
</template>

<script>
import ExpandingPreview from './compponents/ExpandingPreview.vue'

import speakerJson from './assets/json/people.json'
// var speakerNames = ["barbara-breen","ian-mccrae","lizzie-marvelly","jayne-bailey","cori-gonzalez-macuer","adrien-taylor","mike-moka","anna-coddington","toby-carr","james-bergin","vaughan-rowsell","grace-clapham--solonia-teodros","jess-holly-bates","samuel-gibson","georgia-lala","richard-aston","pani-farvid","sharad-paul","minnie-barragwanath","richard-little","david-harvey","matt-shirtcliffe","keith-ng","rory-steyn","modern-māori-quartet"]
var speakerNames = ["siouxsie-wiles", "grant-schofield", "riley--steve-hathaway", "steve-pointing", "hong-sheng-chiong", "tom-scott", "gavin-healy", "billie-jordan", "the-hip-op-eration-crew", "dale-pfeifer", "janette-searle", "sir-bob-harvey", "tame-iti", "max-cryer"]


export default {
  name: 'app',
  data() {
    return {
      speakerNames,
      speakerJson,
      speakers: this.speakerJson.filter(speaker => this.speakerNames.includes(speaker.id)),
    }
  },
  components: {
    ExpandingPreview,
  }
}



</script>

<style>
</style>
