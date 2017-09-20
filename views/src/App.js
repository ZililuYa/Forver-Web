import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHighlight from 'vue-highlight.js'
import F from 'forver'
import 'forver/dist/css/forver.min.css'
import 'highlight.js/styles/monokai-sublime.css'

Vue.config.productionTip = false
Vue.use(VueHighlight)
Vue.use(F)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
