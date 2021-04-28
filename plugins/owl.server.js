import Vue from 'vue'
import OwlCarousel from 'v-owl-carousel'
if (process.browser) {
  window.onNuxtReady(() => {
    const VueFullCalendar = require('vue-fullcalendar')
    Vue.use(VueFullCalendar)
  })
}
import VueSession from 'vue-session';

Vue.use(VueSession);
if (typeof window !==  'undefined') {
  const carousel = () => import('vue-owl-carousel');
  Vue.component('carousel', carousel);
}

Vue.component('carousel', OwlCarousel)