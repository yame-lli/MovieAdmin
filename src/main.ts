import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import {createPinia} from 'pinia'
import piniaPlugin from './piniaPlugin'
import './reset.css'
import 'uno.css'
import 'element-plus/theme-chalk/el-notification.css'

const store = createPinia()
store.use(piniaPlugin({
    key:'pinia'
}))

createApp(App).use(store).use(router).mount('#app')
