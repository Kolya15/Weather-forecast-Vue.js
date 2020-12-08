<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/images/logo.svg" class="logo-img">
        </div>
        <div class="wrapper-search-city">
            <input type="text" v-model="searchCity">
        </div>
    </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "header",
    data(){
        return{
            searchCity: null,
        }
    },
    computed: {
        ...mapGetters(['GET_CITY_LIST']),
        getSearchCity(){
            if(this.searchCity) {
                return this.GET_CITY_LIST.filter(city => city.name.toLowerCase().includes(this.searchCity.toLowerCase()))
            } else return []
        }
    }
}
</script>

<style scoped>

.header {
    background-color: #009FFF;
}

.logo-img {
    width: 100px;
    height: 100px;
}

</style>