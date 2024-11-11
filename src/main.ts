import { createApp } from 'vue'
import { createPinia } from 'pinia'
//import { defineStore } from 'pinia'
import { Icon } from '@iconify/vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


app.component('Icon', Icon) //import for iconify
//app.component('defineStrore', defineStore)

app.mount('#app')
