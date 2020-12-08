<template>
    <div id="app">
        <HeaderComponent/>


        <p
            v-for="city in getSearchCity"
            :key="city.id"
        >
            {{city.name}} {{city.id}}
        </p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HeaderComponent from "./components/header";
import {HTTP} from './api'

export default {
    name: 'App',
    data(){
        return {
            selectedCity: null,
            searchCity: null,
        }
    },
    computed: {
        ...mapGetters(['GET_CITY_LIST']),
        getSearchCity(){
            if(this.searchCity) {
                return this.GET_CITY_LIST.filter(city => city.name.toLowerCase().includes(this.searchCity.toLowerCase()))
            }
           return []
        }
    },
    components: {
        HeaderComponent
    },
    created() {
        HTTP.get('weather?id=703448&appid=7a44d3e3a278e49fbcb5dba603d8931e')
    },
    mounted() {
        console.log(this.GET_CITY_LIST);
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
