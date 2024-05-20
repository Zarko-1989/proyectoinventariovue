import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Módulos necesarios para utilizar Bootstrap 5
//Primero se instala el vueflex con npm i vue-flex
import vueFlex from 'vue-flex'   
import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.bundle.min.js'

createApp(App).use(store).use(router).use(vueFlex).mount('#app')
