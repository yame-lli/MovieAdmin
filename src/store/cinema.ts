import { defineStore } from 'pinia'
import {apiGetAllCinema,apiGetCinemaById} from '@/api/cinema'


interface Cinema {
    id: number
    cinemaPicture: string
    cinemaName: string
    cinemaAddress: string
    cinemaScore: number
    cinemaImg: string
}


const useCinemaStore = defineStore('CinemaStore', {
    state: () => {
        return {
            cinemaList:[] as any[],
            currentCinema:{} as Cinema
        }
    },
    getters: {

    },
    actions: {
        async reqGetAllCinema(){
            let result = await apiGetAllCinema()
            if(result.code==200){
                this.cinemaList = result.data
            }
        },
        async reqGetCinemaById(data:any){
            let result = await apiGetCinemaById(data)
            if(result.code==200){
                this.currentCinema = result.data
            }
        }


    }
})

export default useCinemaStore