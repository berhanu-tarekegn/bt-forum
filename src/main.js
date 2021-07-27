
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'

const forum = createApp(App)
forum.use(router)
forum.mount('#app')
