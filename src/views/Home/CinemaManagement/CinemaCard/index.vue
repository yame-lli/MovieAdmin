<template>

    <el-card shadow="hover" class="mb-6  " @click="toCinemaDetail">
        <div class="flex flex-col">
            <span class="mb-2 text-gray-600 font-semibold text-lg">{{ cinema.cinemaName }}</span>
            <span class=" text-gray-400">地址：{{ cinema.cinemaAddress }}</span>
        </div>

        <div>
            <el-rate v-model="cinemaScore" disabled text-color="#ff9900" />
            <el-button class="ml-10" type="danger" @click.stop="deleteCinema">删除</el-button>
        </div>
    </el-card>





</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { cinemaFormConfig } from '../cinemaConfig';



interface Cinema {
    id: number
    cinemaPicture: string
    cinemaName: string
    cinemaAddress: string
    cinemaScore: number
    cinemaImg: string
}

type Props = {
    cinema: Cinema
}

const props = defineProps<Props>()
const cinemaScore = computed(() => {
    return props.cinema.cinemaScore / 2
})

const deleteCinema = ()=>{
    
}



const router = useRouter()
const toCinemaDetail = () => {
    router.push({
        name: 'CinemaDetail',
        query: {
            id: props.cinema.id
        }
    })
}
</script>

<style scoped>
:deep() .el-card__body {
    @apply flex items-center justify-between
}
</style>