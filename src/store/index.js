import Vue from 'vue'
import Vuex from 'vuex'
import cityList from "../utils/current.city.list.min.json"

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        cityList: JSON.parse(JSON.stringify(cityList))
    },
    mutations: {},
    actions: {},
    getters: {
        GET_CITY_LIST: state => state.cityList
    },
})
