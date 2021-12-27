import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        token: localStorage.getItem('access_token'),
        username: localStorage.getItem('username'),
        posts: {}
    },
    mutations: {
        login(state, data){
            if (data){
                localStorage.setItem('access_token',data.access_token)
                localStorage.setItem('expires_in',data.expires_in)
                localStorage.setItem('refresh_token',data.refresh_token)
                state.token = localStorage.getItem('access_token')
            }
        },
        getUser(state, data){
            if (data){
                localStorage.setItem('email',data.email)
                localStorage.setItem('username',data.username)
                state.username = localStorage.getItem('username')
            }
        },
        logout(state){
            state.token = ''
            state.username = ''
            localStorage.clear()
        },
    },
    getters: {
        getToken: (state)=>{
            return state.token
        },
        getUser: (state)=>{
            return state.username
        }
    },
    actions: {
        login ({ commit }, data) {
            commit('login', data)
        },
        getUser({commit},data){
            commit('getUser',data)
        },
        logout({commit}){
            commit('logout')
        }
    }
})
