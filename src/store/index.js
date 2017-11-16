/**
 * Created by CL on 2017/11/14.
 */
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    sideShow:false,
    auth:false,
    authName:''
  },
  getters:{
    authName:state =>{
      return state.authName
    }
  },
  mutations:{
    CLOSESIDE(state){
      state.sideShow = false
    },
    LOGIN(state,name){
      state.auth = true;
      state.authName = name;
    },
    LOGOUT(state){
      state.auth = false;
      state.authName = '';
    }
  },
  actions:{
    closeSide({commit}){
      commit('CLOSESIDE')
    },
    login({commit},date){
      commit('LOGIN',date)
    },
    logOut({commit}){
      commit('LOGOUT')
    }
  }
})
