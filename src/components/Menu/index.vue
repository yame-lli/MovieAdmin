<template>
    <div class="menu flex flex-col items-center">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">缩进</el-radio-button>
        </el-radio-group>
        <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1">

                <el-icon>
                    <icon-menu />
                </el-icon>
                <template #title>主页</template>

            </el-menu-item>
            <el-menu-item index="2">
                <el-icon>
                    <icon-menu />
                </el-icon>
                <template #title>用户管理</template>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon>
                    <document />
                </el-icon>
                <template #title>电影管理</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>影院管理</template>
            </el-menu-item>
            <el-menu-item index="5">
                <el-icon>
                    <setting />
                </el-icon>
                <template #title>资讯管理</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>