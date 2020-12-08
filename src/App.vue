<template>
    <div id="app">
        <input type="text" v-model="searchCity">

        <p
            v-for="city in getSearchCity"
            :key="city.id"
        >
            {{city.name}}
        </p>
        <!--        <select name="" id="">-->
        <!--            <option-->
        <!--                v-for="city in GET_LIST_CITY"-->
        <!--                :key="city.id"-->
        <!--            >{{city.name}}</option>-->
        <!--        </select>-->
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
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
    created() {
        HTTP.get('weather?q=Голубинка&appid=7a44d3e3a278e49fbcb5dba603d8931e')
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
    margin-top: 60px;
}
</style>
