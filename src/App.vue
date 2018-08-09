<template>
  <div id="app">

    <section id="speakers" class="section-bg-swirl">
      <div class="container">
        <h3 class="section-heading section-heading--speakers">speakers</h3>

        <Speakers :speaker-names="speakerNames" :speaker-json="speakerJson" />

      </div>
    </section>

    <!-- <img src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  </div>
</template>

<script>
import HelloWorld from './sections/HelloWorld.vue'
import Speakers from './sections/Speakers.vue'

import speakerJson from './assets/json/people.json'
var speakerNames = ["andy-crowe--rui-peng","alexander-macdonald","angie-judge","anna-faber","cameron-sims","cather-simpson","chris-pemberton","david-razowsky","emeline-paat-dahlstrom","jahra-rager-wasasala","juliet-arnott","liam-malone","lisa-king","mai-chen","michael-corballis","nigel-parker","pete-bethune","sam-stubbs","shaveer-mirpuri","william-watson","yoseph-ayele"]
// var speakerNames = ["barbara-breen","ian-mccrae","lizzie-marvelly","jayne-bailey","cori-gonzalez-macuer","adrien-taylor","mike-moka","anna-coddington","toby-carr","james-bergin","vaughan-rowsell","grace-clapham--solonia-teodros","jess-holly-bates","samuel-gibson","georgia-lala","richard-aston","pani-farvid","sharad-paul","minnie-barragwanath","richard-little","david-harvey","matt-shirtcliffe","keith-ng","rory-steyn","modern-māori-quartet"]
// var speakerNames = ["siouxsie-wiles", "grant-schofield", "riley--steve-hathaway", "steve-pointing", "hong-sheng-chiong", "tom-scott", "gavin-healy", "billie-jordan", "the-hip-op-eration-crew", "dale-pfeifer", "janette-searle", "sir-bob-harvey", "tame-iti", "max-cryer"]


export default {
  name: 'app',
  data() {
    return {
      speakerNames,
      speakerJson
    }
  },
  components: {
    Speakers,
    HelloWorld
  }
}



</script>

<style>
</style>
