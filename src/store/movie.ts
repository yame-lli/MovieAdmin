import { defineStore } from 'pinia'
import {apiGetAllMovie,apiGetMovieById} from '@/api/movie'

type Movie = {
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

const useMovieStore = defineStore('MovieStore', {
    state: () => {
        return {
            movieList:[] as any[],
            currentMovie:{} as Movie
        }
    },
    getters: {

    },
    actions: {
        async reqGetAllMovie(){
            let result = await apiGetAllMovie()
            console.log(result);
            if(result.code==200){
                this.movieList = [...result.commit,...result.uncommit,...result.outcommit]
            }
        },
        async reqGetMovieById(data:any){
            let result = await apiGetMovieById(data)
            console.log(result);
            if(result.code==200){
                this.currentMovie = result.data
            }
        }
    }
})

export default useMovieStore