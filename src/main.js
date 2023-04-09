
// eslint-disable-next-line no-unused-vars
import { createApp, h, Fragment } from 'vue/dist/vue.esm-bundler'
import router from './router'
import VueAnnouncer from '@vue-a11y/announcer'

// CSS
import './style.css'
import '@vue-a11y/announcer/dist/style.css'

// Components
import DefaultLayout from './layout/DefaultLayout.vue'
import App from './pages/App.vue'


let app = null

app = createApp(App)


app.component('DefaultLayout', DefaultLayout)
app.use(VueAnnouncer)
app.use(router)

app.mount('#app')
