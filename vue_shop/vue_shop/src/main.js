import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router.js'
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import auth from './auth.js'
Vue.use(auth)
import VuePreview from 'vue-preview';
Vue.use(VuePreview);

import axios from './axios.js'
Vue.use(axios)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
