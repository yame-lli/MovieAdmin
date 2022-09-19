import { defineStore } from 'pinia'

const useUserStore = defineStore('userStore', {
    state: () => {
        return {
            name: 'user',
        }
    },
    getters: {

    },
    actions: {}
})

export default useUserStore