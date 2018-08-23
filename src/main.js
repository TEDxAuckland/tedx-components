import Vue from 'vue'
import App from './App.vue'
import AppGif from './AppGif.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(AppGif)
}).$mount('#app')
