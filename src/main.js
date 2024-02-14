import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@glidejs/glide/dist/css/glide.core.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

createApp(App).use(router).mount('#app')
