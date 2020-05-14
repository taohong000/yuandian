import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import './utils/initRem'

import router from './router'
import store from './store'
import { Button, Col, Row } from 'vant';
import request from './utils/request'

Vue.use(Button);
Vue.use(Col);
Vue.use(Row);

Vue.prototype.$request = request

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
