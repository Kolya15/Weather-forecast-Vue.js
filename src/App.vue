<template>
    <div id="app">
        <v-app>
            <HeaderComponent/>
        </v-app>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HeaderComponent from "./components/headerComponent";
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
                console.log(this.GET_CITY_LIST)
                return this.GET_CITY_LIST.filter(city => city.name.toLowerCase().includes(this.searchCity.toLowerCase()))
            }
           return []
        }
    },
    components: {
        HeaderComponent
    },
    created() {
        // HTTP.get('weather?id=703448&appid=7a44d3e3a278e49fbcb5dba603d8931e')
        HTTP.get('onecall?lat=33.441792&lon=-94.037689&exclude=hourly&appid=7a44d3e3a278e49fbcb5dba603d8931e')
        // HTTP.get('onecall/timemachine?lat=60.99&lon=30.9&dt=1607881559000&appid=7a44d3e3a278e49fbcb5dba603d8931e')
    },
}
</script>

<style>

*{
    box-sizing: border-box;
}

body {
    margin: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
