import Vue from 'vue'
import Speakers from './Speakers'
import AnimatedImage from '../components/AnimatedImage'
import Carousel from '../components/Carousel'
import Videos from './Videos'
import VideosPlaylist from './VideosPlaylist'

const Components = {
  Speakers,
  AnimatedImage,
  Carousel,
  Videos,
  VideosPlaylist,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
