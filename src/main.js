// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/'
import store from './store'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = Axios;
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})