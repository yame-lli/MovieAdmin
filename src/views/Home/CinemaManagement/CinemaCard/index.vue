<template>
    <el-card shadow="hover" class="mb-6 " @click="toCinemaDetail">
        <span class="mb-2 text-gray-600 font-semibold	">大地影院</span>
        <span class=" text-gray-400">地址：xxxxxxxxxxxxxxxxx</span>
    </el-card>
</template>

<script setup lang='ts'>
import {useRouter} from 'vue-router'


const router = useRouter()
const toCinemaDetail=()=>{
    router.push({
        name:'CinemaDetail'
    })
}
</script>

<style scoped>
:deep() .el-card__body{
    @apply flex flex-col
}
</style>