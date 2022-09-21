<template>

        <el-card shadow="hover" class="mb-8 mr-8" @click="toMovieDetail">
            <img class="w-100%" src="https://p0.pipi.cn/mmdb/d2dad5927a30fa8d33b8605f671206f584437.jpg?imageView2/1/w/218/h/300" alt="">
            <span class="my-4 font-semibold text-gray-600">无名</span>
        </el-card>
    
</template>

<script setup lang='ts'>
import {useRouter} from 'vue-router'


const router = useRouter()
const toMovieDetail=()=>{
    router.push({
        name:'MovieDetail'
    })
}
</script>

<style scoped>
:deep() .el-card__body{
   @apply p-0 flex flex-col items-center;
}

</style>