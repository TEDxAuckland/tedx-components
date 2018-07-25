import Vue from 'vue';
import Speakers from './Speakers.vue';

const Components = {
  Speakers,
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
