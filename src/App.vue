<template>
    <div id="app">
        TEST
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {HTTP} from './api'

export default {
    name: 'App',
    computed: {
        ...mapGetters(['GET_LIST_CITY'])
    },
    created() {
        HTTP.get('weather?q=London&appid=7a44d3e3a278e49fbcb5dba603d8931e')
    },
    mounted() {
        console.log(this.GET_LIST_CITY);
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
