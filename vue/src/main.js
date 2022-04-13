import { createApp } from 'vue'
import App from './App.vue'
import route from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import './assets/base.css'
import './assets/css/index.css'
import 'bootstrap/dist/js/bootstrap.min.js'

createApp(App)
  .use(route)
  .use(BootstrapVueIcons)
  .use(BootstrapVue)
  .mount('#app')
