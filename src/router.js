import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SpeakersExpandingPreviewScaffold from './views/SpeakersExpandingPreviewScaffold'
import VideosListScaffold from './views/VideosListScaffold'
import VideosPlaylistScaffold from './views/VideosPlaylistScaffold'
import VideosExpandingPreviewScaffold from './views/VideosExpandingPreviewScaffold'
import AnimatedImageScaffold from './views/AnimatedImageScaffold'

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
      path: '/videos-expanding-preview',
      name: 'videosExpandingPreview',
      component: VideosExpandingPreviewScaffold
    },
    {
      path: '/videos-list',
      name: 'videosList',
      component: VideosListScaffold
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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
