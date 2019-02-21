<template>
  <div id="app">

    <section id="speakers">
      <div class="container">
        <h3 class="section-heading section-heading--speakers">speakers</h3>

        <Speakers :speaker-names="speakerNames" :speaker-json="speakerJson" bg-white hide-names />

      </div>
    </section>

  </div>
</template>

<script>
import Speakers from '@/sections/Speakers.vue'

import speakerJson from '@/assets/json/people.json'
var speakerNames = ["andy-crowe--rui-peng","alexander-macdonald","angie-judge","anna-faber","cameron-sims","cather-simpson","chris-pemberton","david-razowsky","emeline-paat-dahlstrom","jahra-rager-wasasala","juliet-arnott","liam-malone","lisa-king","mai-chen","michael-corballis","nigel-parker","pete-bethune","sam-stubbs","shaveer-mirpuri","william-watson","yoseph-ayele"]

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
  }
}



</script>

<style>
  body: {
    background-color: #fff !important;
  }
</style>
