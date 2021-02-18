import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

import SequentialEntrance from 'vue-sequential-entrance'
import 'vue-sequential-entrance/vue-sequential-entrance.css'
/* https://splidejs.com/ */
import VueSplide from '@splidejs/vue-splide'
Vue.use(SequentialEntrance, VueSplide)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
