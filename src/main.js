import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

//import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
//import { apply } from 'core-js/library/fn/reflect'


//Video player
import VueVideoPlayer from '@videojs-player/vue'
import 'video.js/dist/video-js.css'



import 'vuetify/styles'



import { fa } from "vuetify/iconsets/fa";
import { aliases, mdi } from "vuetify/lib/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files

//comentar ests 4 si se quiere vuetify por plugin
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  icons: {
  defaultSet: "mdi",
  aliases,
  sets: {
    mdi,
    fa,
  },
},components,directives,theme: {defaultTheme: 'light'}})


    

loadFonts()



const app = createApp(App).use(vuetify).use(BootstrapVue3).use(VueVideoPlayer);
app.mount('#app');







