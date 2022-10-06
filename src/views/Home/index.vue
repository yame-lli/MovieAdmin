<template>
    <div class="home h-full flex flex-col ">
        <Header></Header>
        <div class="main flex overflow-auto h-[calc(100%-60px)]">
            <Menu></Menu>
            <div class="contain flex-1 p-8 box-border relative overflow-auto bg-gray-100 ">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>

import Header from '@/components/Header/index.vue'
import Menu from '@/components/Menu/index.vue'

</script>

<style scoped>

</style>