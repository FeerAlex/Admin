import Vue from 'vue';
import App from './App.vue';
import Vuex from 'vuex';
import store from './store';
import router from './router';

import 'fonts/Roboto-Regular.ttf';
import 'fonts/Roboto-Medium.ttf';

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
