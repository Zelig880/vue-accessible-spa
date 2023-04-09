
import { createRouter, createWebHashHistory } from 'vue-router'

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

export default createRouter({
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
  