import Vue from 'vue'
import App from './App.vue'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import router from './router'
import router from './router'
import axios from 'axios'
import Storeclub from './views/Storeclub'

Vue.component('Storeclub',Storeclub)
// axios.defaults.baseurl = ''

import api from './internet/api'

Vue.prototype.axios = axios
Vue.use(ElementUI)
// Vue.use(router)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
