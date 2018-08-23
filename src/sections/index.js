import Vue from 'vue';
import Speakers from './Speakers.vue';
import AnimatedImage from '../components/AnimatedImage.vue';

const Components = {
  Speakers,
  AnimatedImage,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
