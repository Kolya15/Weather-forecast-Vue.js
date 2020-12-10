<template>
    <header class="header">
        <div class="logo">
            <img src="@/assets/images/logo.svg" class="logo-img">
        </div>
        <div class="wrapper-search-city">
            <v-autocomplete
                v-model="city"
                :items="getSearchCity"
                :search-input.sync="searchCity"
                hide-no-data
                hide-selected
                item-text="name"
                item-value="id"
                label="Select city"
                dense
                outlined
                return-object
            />
        </div>

    </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "headerComponent",
    data() {
        return {
            searchCity: null,
            city: null,
        }
    },
    computed: {
        ...mapGetters(['GET_CITY_LIST']),
        getSearchCity() {
            if (this.searchCity) {
                return this.GET_CITY_LIST.filter(city => city.name.toLowerCase().includes(this.searchCity.toLowerCase()))
            } else return []
        }
    },
}
</script>

<style scoped>
@import "../assets/css/flags.css";

.header {
    background-color: #009FFF;
    display: flex;
    padding: 5px;
}

.logo-img {
    width: 100px;
    height: 100px;
}

.wrapper-search-city {
    width: 25%;
    margin-left: 33%;
    /*display: flex;*/

    /*justify-content: flex-start;*/
}

.wrapper-search-city input {
    width: 100%;
    height: 30px;
    border-radius: 5px;
    border: none;
    outline: none;
}

.city-country {
    margin-right: 20px;
}

.cities-found {
    width: 100%;
    background-color: #c9d8ec;
    max-height: 300px;
    overflow-y: auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    text-align: left;
    padding: 10px;
}

</style>