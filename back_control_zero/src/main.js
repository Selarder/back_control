import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router';
import "./assets/less/index.less"
import store from './store/index.js'
import './api/mock.js'
// import api from './api/api.js';

//icon图标的全局注册
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// const app = createApp(App
// app.config.globalProperties.$api =api

app.use(router).use(store);
// app.use(ElementPlus)
app.mount('#app')