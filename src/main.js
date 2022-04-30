import Vue from 'vue'
import App from './App.vue'
import router from './router/permission'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import axios from './utils/fetch'
import customComponents from './custom-components.js'

import './styles/index.css'
import './styles/index.less'
import './font/iconfont'
import './el-component'

import * as filters from './filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(customComponents)
Vue.prototype.axios = axios

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})