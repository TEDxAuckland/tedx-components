import Vue from 'vue'
import Router from 'vue-router'
import SpeakersExpandingPreviewScaffold from './views/SpeakersExpandingPreviewScaffold'
import VideosPlaylistScaffold from './views/VideosPlaylistScaffold'
import VideosExpandingPreviewScaffold from './views/VideosExpandingPreviewScaffold'
import AnimatedImageScaffold from './views/AnimatedImageScaffold'
import CarouselScaffold from './views/CarouselScaffold'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/speakers-expanding-preview',
      name: 'speakerExpandingPreview',
      component: SpeakersExpandingPreviewScaffold
    },
    {
      path: '/videos-expanding-preview',
      name: 'videosExpandingPreview',
      component: VideosExpandingPreviewScaffold
    },
    {
      path: '/videos-playlist',
      name: 'videosPlaylist',
      component: VideosPlaylistScaffold
    },
    {
      path: '/animated-image',
      name: 'animatedImageScaffold',
      component: AnimatedImageScaffold
    },
    {
      path: '/carousel',
      name: 'carouselScaffold',
      component: CarouselScaffold
    },
  ]
})
