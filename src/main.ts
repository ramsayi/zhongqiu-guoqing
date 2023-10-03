import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './samples/node-api'

import 'tailwindcss/tailwind.css'
import './tailwind.css'

import 'animate.css/animate.min.css'


createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
