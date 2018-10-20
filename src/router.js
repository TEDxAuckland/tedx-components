import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SpeakersExpandingPreviewScaffold from './views/SpeakersExpandingPreviewScaffold.vue'
import AnimatedImageScaffold from './views/AnimatedImageScaffold.vue'
import VideoPlayerView from './views/VideoPlayerView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/speakers-expanding-preview',
      name: 'speakerExpandingPreview',
      component: SpeakersExpandingPreviewScaffold
    },
    {
      path: '/animated-image',
      name: 'animatedImageScaffold',
      component: AnimatedImageScaffold
    },
    {
      path: '/video-player-view',
      name: 'videoPlayerView',
      component: VideoPlayerView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
