<template>
  <div id="app">

    <div style="height: 50rem;"></div>

    <AnimatedImage :images="imagePaths" />

    <div style="height: 100rem;"></div>

  </div>
</template>

<script>
import AnimatedImage from '@/components/AnimatedImage.vue'

var imagePaths = [{
  "src": "/uploads/off-piste-anim-01.jpg",
  "srcset": "/assets/resized/off-piste-anim-01-400.jpg 400w, /assets/resized/off-piste-anim-01-600.jpg 600w, /assets/resized/off-piste-anim-01-800.jpg 800w, /assets/resized/off-piste-anim-01-1200.jpg 1200w, /assets/resized/off-piste-anim-01-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-02.jpg",
  "srcset": "/assets/resized/off-piste-anim-02-400.jpg 400w, /assets/resized/off-piste-anim-02-600.jpg 600w, /assets/resized/off-piste-anim-02-800.jpg 800w, /assets/resized/off-piste-anim-02-1200.jpg 1200w, /assets/resized/off-piste-anim-02-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-03.jpg",
  "srcset": "/assets/resized/off-piste-anim-03-400.jpg 400w, /assets/resized/off-piste-anim-03-600.jpg 600w, /assets/resized/off-piste-anim-03-800.jpg 800w, /assets/resized/off-piste-anim-03-1200.jpg 1200w, /assets/resized/off-piste-anim-03-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-04.jpg",
  "srcset": "/assets/resized/off-piste-anim-04-400.jpg 400w, /assets/resized/off-piste-anim-04-600.jpg 600w, /assets/resized/off-piste-anim-04-800.jpg 800w, /assets/resized/off-piste-anim-04-1200.jpg 1200w, /assets/resized/off-piste-anim-04-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-05.jpg",
  "srcset": "/assets/resized/off-piste-anim-05-400.jpg 400w, /assets/resized/off-piste-anim-05-600.jpg 600w, /assets/resized/off-piste-anim-05-800.jpg 800w, /assets/resized/off-piste-anim-05-1200.jpg 1200w, /assets/resized/off-piste-anim-05-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-06.jpg",
  "srcset": "/assets/resized/off-piste-anim-06-400.jpg 400w, /assets/resized/off-piste-anim-06-600.jpg 600w, /assets/resized/off-piste-anim-06-800.jpg 800w, /assets/resized/off-piste-anim-06-1200.jpg 1200w, /assets/resized/off-piste-anim-06-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-07.jpg",
  "srcset": "/assets/resized/off-piste-anim-07-400.jpg 400w, /assets/resized/off-piste-anim-07-600.jpg 600w, /assets/resized/off-piste-anim-07-800.jpg 800w, /assets/resized/off-piste-anim-07-1200.jpg 1200w, /assets/resized/off-piste-anim-07-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-08.jpg",
  "srcset": "/assets/resized/off-piste-anim-08-400.jpg 400w, /assets/resized/off-piste-anim-08-600.jpg 600w, /assets/resized/off-piste-anim-08-800.jpg 800w, /assets/resized/off-piste-anim-08-1200.jpg 1200w, /assets/resized/off-piste-anim-08-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-09.jpg",
  "srcset": "/assets/resized/off-piste-anim-09-400.jpg 400w, /assets/resized/off-piste-anim-09-600.jpg 600w, /assets/resized/off-piste-anim-09-800.jpg 800w, /assets/resized/off-piste-anim-09-1200.jpg 1200w, /assets/resized/off-piste-anim-09-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-10.jpg",
  "srcset": "/assets/resized/off-piste-anim-10-400.jpg 400w, /assets/resized/off-piste-anim-10-600.jpg 600w, /assets/resized/off-piste-anim-10-800.jpg 800w, /assets/resized/off-piste-anim-10-1200.jpg 1200w, /assets/resized/off-piste-anim-10-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-11.jpg",
  "srcset": "/assets/resized/off-piste-anim-11-400.jpg 400w, /assets/resized/off-piste-anim-11-600.jpg 600w, /assets/resized/off-piste-anim-11-800.jpg 800w, /assets/resized/off-piste-anim-11-1200.jpg 1200w, /assets/resized/off-piste-anim-11-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-12.jpg",
  "srcset": "/assets/resized/off-piste-anim-12-400.jpg 400w, /assets/resized/off-piste-anim-12-600.jpg 600w, /assets/resized/off-piste-anim-12-800.jpg 800w, /assets/resized/off-piste-anim-12-1200.jpg 1200w, /assets/resized/off-piste-anim-12-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-13.jpg",
  "srcset": "/assets/resized/off-piste-anim-13-400.jpg 400w, /assets/resized/off-piste-anim-13-600.jpg 600w, /assets/resized/off-piste-anim-13-800.jpg 800w, /assets/resized/off-piste-anim-13-1200.jpg 1200w, /assets/resized/off-piste-anim-13-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-14.jpg",
  "srcset": "/assets/resized/off-piste-anim-14-400.jpg 400w, /assets/resized/off-piste-anim-14-600.jpg 600w, /assets/resized/off-piste-anim-14-800.jpg 800w, /assets/resized/off-piste-anim-14-1200.jpg 1200w, /assets/resized/off-piste-anim-14-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-15.jpg",
  "srcset": "/assets/resized/off-piste-anim-15-400.jpg 400w, /assets/resized/off-piste-anim-15-600.jpg 600w, /assets/resized/off-piste-anim-15-800.jpg 800w, /assets/resized/off-piste-anim-15-1200.jpg 1200w, /assets/resized/off-piste-anim-15-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-16.jpg",
  "srcset": "/assets/resized/off-piste-anim-16-400.jpg 400w, /assets/resized/off-piste-anim-16-600.jpg 600w, /assets/resized/off-piste-anim-16-800.jpg 800w, /assets/resized/off-piste-anim-16-1200.jpg 1200w, /assets/resized/off-piste-anim-16-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-17.jpg",
  "srcset": "/assets/resized/off-piste-anim-17-400.jpg 400w, /assets/resized/off-piste-anim-17-600.jpg 600w, /assets/resized/off-piste-anim-17-800.jpg 800w, /assets/resized/off-piste-anim-17-1200.jpg 1200w, /assets/resized/off-piste-anim-17-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-18.jpg",
  "srcset": "/assets/resized/off-piste-anim-18-400.jpg 400w, /assets/resized/off-piste-anim-18-600.jpg 600w, /assets/resized/off-piste-anim-18-800.jpg 800w, /assets/resized/off-piste-anim-18-1200.jpg 1200w, /assets/resized/off-piste-anim-18-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-19.jpg",
  "srcset": "/assets/resized/off-piste-anim-19-400.jpg 400w, /assets/resized/off-piste-anim-19-600.jpg 600w, /assets/resized/off-piste-anim-19-800.jpg 800w, /assets/resized/off-piste-anim-19-1200.jpg 1200w, /assets/resized/off-piste-anim-19-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-20.jpg",
  "srcset": "/assets/resized/off-piste-anim-20-400.jpg 400w, /assets/resized/off-piste-anim-20-600.jpg 600w, /assets/resized/off-piste-anim-20-800.jpg 800w, /assets/resized/off-piste-anim-20-1200.jpg 1200w, /assets/resized/off-piste-anim-20-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-21.jpg",
  "srcset": "/assets/resized/off-piste-anim-21-400.jpg 400w, /assets/resized/off-piste-anim-21-600.jpg 600w, /assets/resized/off-piste-anim-21-800.jpg 800w, /assets/resized/off-piste-anim-21-1200.jpg 1200w, /assets/resized/off-piste-anim-21-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-22.jpg",
  "srcset": "/assets/resized/off-piste-anim-22-400.jpg 400w, /assets/resized/off-piste-anim-22-600.jpg 600w, /assets/resized/off-piste-anim-22-800.jpg 800w, /assets/resized/off-piste-anim-22-1200.jpg 1200w, /assets/resized/off-piste-anim-22-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-23.jpg",
  "srcset": "/assets/resized/off-piste-anim-23-400.jpg 400w, /assets/resized/off-piste-anim-23-600.jpg 600w, /assets/resized/off-piste-anim-23-800.jpg 800w, /assets/resized/off-piste-anim-23-1200.jpg 1200w, /assets/resized/off-piste-anim-23-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-24.jpg",
  "srcset": "/assets/resized/off-piste-anim-24-400.jpg 400w, /assets/resized/off-piste-anim-24-600.jpg 600w, /assets/resized/off-piste-anim-24-800.jpg 800w, /assets/resized/off-piste-anim-24-1200.jpg 1200w, /assets/resized/off-piste-anim-24-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-25.jpg",
  "srcset": "/assets/resized/off-piste-anim-25-400.jpg 400w, /assets/resized/off-piste-anim-25-600.jpg 600w, /assets/resized/off-piste-anim-25-800.jpg 800w, /assets/resized/off-piste-anim-25-1200.jpg 1200w, /assets/resized/off-piste-anim-25-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-26.jpg",
  "srcset": "/assets/resized/off-piste-anim-26-400.jpg 400w, /assets/resized/off-piste-anim-26-600.jpg 600w, /assets/resized/off-piste-anim-26-800.jpg 800w, /assets/resized/off-piste-anim-26-1200.jpg 1200w, /assets/resized/off-piste-anim-26-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-27.jpg",
  "srcset": "/assets/resized/off-piste-anim-27-400.jpg 400w, /assets/resized/off-piste-anim-27-600.jpg 600w, /assets/resized/off-piste-anim-27-800.jpg 800w, /assets/resized/off-piste-anim-27-1200.jpg 1200w, /assets/resized/off-piste-anim-27-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
,{
  "src": "/uploads/off-piste-anim-28.jpg",
  "srcset": "/assets/resized/off-piste-anim-28-400.jpg 400w, /assets/resized/off-piste-anim-28-600.jpg 600w, /assets/resized/off-piste-anim-28-800.jpg 800w, /assets/resized/off-piste-anim-28-1200.jpg 1200w, /assets/resized/off-piste-anim-28-1800.jpg 1800w","sizes": "(max-width: 1600px) 40vw, (max-width: 800px) 100vw"}
]

export default {
  name: 'app',

  components: {
    AnimatedImage,
  },

  data() {
    return {
      imagePaths,
      baseUrl: process.env.BASE_URL
    }
  },

  computed: {
    images() {
      return this.imagePaths.map( (p) => {
        // return this.baseUrl + p
        return '/images/animation/' + p
      })
    }
  }
}



</script>

<style>
  .off-piste__image {
    width: 500px;
    height: auto;
  }
</style>
