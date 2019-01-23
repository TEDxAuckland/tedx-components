import Vue from 'vue'
import Speakers from './Speakers'
import AnimatedImage from '../components/AnimatedImage'
import VideosList from './VideosList'

const Components = {
  Speakers,
  AnimatedImage,
  VideosList,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
