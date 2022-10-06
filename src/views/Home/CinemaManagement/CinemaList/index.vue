<template>
    <div class="mt-10">
        <CinemaCard v-if="cinemaList" v-for="item in cinemaList" :cinema="item"></CinemaCard>
    </div>
</template>

<script setup lang='ts'>
import CinemaCard from '../CinemaCard/index.vue';
import useStore  from '@/store/index'
import {ref} from 'vue'


const {cinemaStore} = useStore()
let cinemaList = ref()
cinemaStore.reqGetAllCinema().then(()=>{
    cinemaList.value = cinemaStore.cinemaList
})

cinemaStore.$subscribe(()=>{
     cinemaList.value = cinemaStore.cinemaList
    
})


</script>

<style scoped>

</style>