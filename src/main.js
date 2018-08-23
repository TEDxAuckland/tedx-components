import Vue from 'vue'
import App from './App.vue'
import AppGif from './AppGif.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(AppGif)
}).$mount('#app')
