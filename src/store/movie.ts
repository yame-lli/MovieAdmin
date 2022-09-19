import { defineStore } from 'pinia'

const useMovieStore = defineStore('MovieStore', {
    state: () => {
        return {
            name: 'movie',
        }
    },
    getters: {

    },
    actions: {}
})

export default useMovieStore