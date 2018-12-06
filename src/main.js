// Polyfills
// import 'es6-promise/auto'
// import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App'
import store from './store'
import router from './router'
import VuesticPlugin from '@/vuestic-theme/vuestic-plugin'
import './i18n'
import YmapPlugin from 'vue-yandex-maps'
import firebase from 'firebase'

Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.use(firebase)

// NOTE: workaround for VeeValidate + vuetable-2
Vue.use(VeeValidate, { fieldsBagName: 'formFields' })

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

var config = {
  apiKey: 'AIzaSyB1VzmI20kOicxqHOXbQv4oUOgP6fd5xRs',
  authDomain: 'iod-project-3d5e2.firebaseapp.com',
  databaseURL: 'https://iod-project-3d5e2.firebaseio.com',
  projectId: 'iod-project-3d5e2',
  storageBucket: 'iod-project-3d5e2.appspot.com',
  messagingSenderId: '1098350247633'
}
firebase.initializeApp(config)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
