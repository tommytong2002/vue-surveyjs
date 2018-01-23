import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import router from './router'
import moment from 'moment'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

Vue.filter('formatDate', function(value: any) {
  if (value) {
    return moment(String(value)).format('DD/MM/YYYY hh:mm')
  }
  return '';
})
