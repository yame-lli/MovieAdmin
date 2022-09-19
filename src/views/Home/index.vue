<template>
    <div class="home h-full">
        <Header></Header>
        <div class="main flex h-full mt-8">
            <Menu></Menu>
            <div class="contain flex-1 px-8 overflow-hidden box-border relative">
                <MovieManagement></MovieManagement>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import * as echarts from 'echarts/core';
import Header from '@/components/Header/index.vue'
import Menu from '@/components/Menu/index.vue'
import MovieManagement from './MovieManagement/index.vue';
</script>

<style scoped>

</style>