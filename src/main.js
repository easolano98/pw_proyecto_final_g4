import { createApp } from 'vue'
import App from './App.vue'
import router from './modules/noticias/routers/router'
createApp(App).use(router).mount('#app')
