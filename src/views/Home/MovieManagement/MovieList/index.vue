<template>
    <div v-if="movieList" class="grid grid-cols-5 gap-15 justify-items-center  mt-10 ">
        <div  v-for="item in movieList" :key="item.id" class="w-100%">
            <MovieCard :movieDetail="item" class="transform hover:scale-105">
            </MovieCard>
            <div class="flex flex-col items-center p-2 mt-2">
                <span class="text-gray-600 font-medium	 pb-1">{{item.movieCName}}</span>
            </div>
        </div>

    </div>
</template>

<script setup lang='ts'>
import MovieCard from '../MovieCard/index.vue'
import useStore from '@/store/index'
import { ref } from 'vue'

const { movieStore } = useStore()

interface Movie {
    id: number;
    movieCName: string;
    movieFName: string;
    movieActor: string;
    movieDirector: string;
    movieDetail: string;
    movieDuration: string;
    movieType: string;
    movieScore: number;
    movieBoxOffice: number;
    movieCommentCount: number;
    movieReleaseDate: string;
    movieCountry: string;
    moviePicture: string;
    movieState: number;
    commentList?: any;
    movieImg: string;
}

let movieList = ref<Movie[]>()

movieStore.reqGetAllMovie().then(() => {
    movieList.value = movieStore.movieList
    
})

movieStore.$subscribe(()=>{
     movieList.value = movieStore.movieList
})



</script>

<style scoped>

</style>