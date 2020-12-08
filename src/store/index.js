import Vue from 'vue'
import Vuex from 'vuex'
import city from "../utils/city.list.json";
// import city from '../utils/city.list.json'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        listCity: JSON.parse(JSON.stringify(city))
    },
    mutations: {},
    actions: {},
    getters: {
        GET_LIST_CITY: state => state.listCity
    },
    modules: {}
})
