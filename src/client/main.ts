import { createApp } from 'vue';
import App from './App.vue';
import "@/assets/style/index.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
console.log('app: ===12', app);

app.use(ElementPlus)
app.mount('#app');