// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mintUi from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import './assets/animate.min.css'
Vue.use(mintUi)
Vue.config.productionTip = false
import {loading,close_load} from './util/msg'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
router.beforeEach((to,from,next) =>{
  loading();
  next();
  store.dispatch('closeSide')
  setTimeout(() =>{
    close_load()
  },1000)
})

