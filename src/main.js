
// eslint-disable-next-line no-unused-vars
import { createApp, h, Fragment } from 'vue/dist/vue.esm-bundler'
import router from './router'

// CSS
import './style.css'

// Components
import DefaultLayout from './layout/DefaultLayout.vue'
import App from './pages/App.vue'


let app = null

app = createApp(App)


app.component('DefaultLayout', DefaultLayout)
app.use(router)

app.mount('#app')
