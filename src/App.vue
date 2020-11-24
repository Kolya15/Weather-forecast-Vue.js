<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { HTTP } from './api'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created () {
    HTTP.get('weather?q=London&appid=7a44d3e3a278e49fbcb5dba603d8931e')
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
