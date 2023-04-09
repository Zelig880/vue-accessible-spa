
// eslint-disable-next-line no-unused-vars
import { createApp, h, Fragment } from 'vue/dist/vue.esm-bundler'
import router from './router'
import VueAnnouncer from '@vue-a11y/announcer'
import VueSkipTo from '@vue-a11y/skip-to'

// CSS
import './style.css'
import '@vue-a11y/announcer/dist/style.css'
import '@vue-a11y/skip-to/dist/style.css'

// Components
import DefaultLayout from './layout/DefaultLayout.vue'
import App from './pages/App.vue'


let app = null

app = createApp(App)


app.component('DefaultLayout', DefaultLayout)
app.use(VueAnnouncer, {router})
app.use(VueSkipTo)
app.use(router)

router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

app.mount('#app')
