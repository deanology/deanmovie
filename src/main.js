import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import style from './assets/css/style.css'
import App from './App.vue'
import routes from './routes.js'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'


Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

const router = new
VueRouter({ mode: 'history', routes });

new Vue({
    VueLodash,
    lodash,
    router,
    axios,
    style,
    render: h => h(App),
}).$mount('#app')