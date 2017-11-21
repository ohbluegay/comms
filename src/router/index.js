import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'start',
      path: '/',
      redirect: '/dayFun'
    },
    {
      path: '/login',
      name: 'login',
      component: (resolve) => {
        require(["../components/auth/login"], resolve);
      }
    },
    {
      path: '/dayFun',
      name: 'index',
      component: (resolve) => {
        require(["../components/dayFun/index"], resolve);
      }
    },
    {
      path: '/nature',
      name: 'nature',
      component: (resolve) => {
        require(["../components/nature/index"], resolve);
      }
    },
    {
      path: '/celebrity',
      name: 'celebrity',
      component: (resolve) => {
        require(["../components/celebrity/index"], resolve);
      }
    },
    {
      path: '/public',
      name: 'public',
      component: (resolve) => {
        require(["../components/public/index"], resolve);
      }
    }, {
      path: '/ele',
      name: 'ele',
      component: (resolve) => {
        require(["../components/element/index"], resolve)
      }
    }
  ]
})
