<template>
    <div class="header">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0">LOGO</el-menu-item>
            <div class="flex-grow" />

            <el-sub-menu index="1">
                <template #title>
                    <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
                </template>
                <el-menu-item index="1-1" class="flex justify-center "> 退出登录</el-menu-item>

            </el-sub-menu>
        </el-menu>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>


</style>