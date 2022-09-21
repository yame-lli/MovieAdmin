<template>
    <div class="h-full flex">
        <div class="left w-70%" flex flex-wrap justify-between >
        <UserChart></UserChart>
        <HotPlayChart></HotPlayChart>
        <OrderChart></OrderChart>
        </div>

        <div class="right flex flex-col flex-1 ml-4">
            <el-card shadow="hover" class="w-100% mb-4 text-3xl text-center"> 2022/9/21 00:00:00 </el-card>
           <RankChart></RankChart>
        </div>
    </div>
</template>

<script setup lang='ts'>

import UserChart from './UserChart/index.vue';
import HotPlayChart from './HotPlayChart/index.vue';
import OrderChart from './OrderChart/index.vue';
import RankChart from './RankChart/index.vue';




</script>

<style scoped>

</style>