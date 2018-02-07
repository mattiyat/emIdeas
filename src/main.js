import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import '../node_modules/vuetify/src/stylus/app.styl'

import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  Vcarousel,
  Vparallax,
  Vcard,
  Vtextfield,
  Vdatepicker,
  Vtimepicker
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions,
    Vcarousel,
    Vparallax,
    Vcard,
    Vtextfield,
    Vdatepicker,
    Vtimepicker
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
