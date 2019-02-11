import Vue from 'vue'
import Speakers from './Speakers'
import AnimatedImage from '../components/AnimatedImage'
import Videos from './Videos'
import VideosList from './VideosList'
import VideosPlaylist from './VideosPlaylist'

const Components = {
  Speakers,
  AnimatedImage,
  Videos,
  VideosList,
  VideosPlaylist,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
