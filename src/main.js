import { createApp, h, Fragment } from 'vue/dist/vue.esm-bundler'
import { createRouter, createWebHashHistory } from 'vue-router'
import VueAnnouncer from '@vue-a11y/announcer'
import VueSkipTo from '@vue-a11y/skip-to'
import { default as VueAxe, VueAxePopup } from 'vue-axe'

// CSS
import './style.css'
import '@vue-a11y/announcer/dist/style.css'
import '@vue-a11y/skip-to/dist/style.css'

// Components
import DefaultLayout from './layout/DefaultLayout.vue'
import App from './pages/App.vue'
import Welcome from './pages/WelcomePage.vue'
import PageNavigation from './pages/PageNavigation.vue'
import ComponentsBonanza from './pages/ComponentsBonanza.vue'
import DynamicData from './pages/DynamicData.vue'

const routes = [
  {
    path: '/', component: Welcome,
    meta: { title: "Welcome" }
  },
  {
    path: '/page-navigation',
    component: PageNavigation,
    meta: {
      title: "Page Navigation",
      announcer: {
        message: 'My navigation page'
      }
    }
  },
  { 
    path: '/components-bonanza',
    component: ComponentsBonanza,
    meta: { title: "Component Bonanza" }
  },
  { 
    path: '/dynamic-data',
    component: DynamicData,
    meta: { title: "Dynamica Data" }
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

let app = null

if (process.env.NODE_ENV === 'development') {
  app = createApp(() => h(Fragment, [h(App), h(VueAxePopup)]))
  app.use(VueAxe)
} else {
  app = createApp(App)
}

app.component('DefaultLayout', DefaultLayout)
app.use(VueAnnouncer, { router })
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
