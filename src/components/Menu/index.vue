<template>
    <div class="menu flex flex-col items-center pt-8">
        <el-radio-group v-model="isCollapse" class="mb-20px mx-4">
            <el-radio-button :label="true">
                <el-icon>
                    <ArrowLeft />
                </el-icon>
            </el-radio-button>
            <el-radio-button :label="false">
                <el-icon>
                    <ArrowRight />
                </el-icon>
            </el-radio-button>
        </el-radio-group>
        <el-menu default-active="1" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="1" @click="toCharts">
                <el-icon>
                    <icon-menu />
                </el-icon>
                <template #title>主页</template>
            </el-menu-item>
            <el-menu-item index="2" @click="toUserManagement">
                <el-icon>
                    <User />
                </el-icon>
                <template #title>用户管理</template>
            </el-menu-item>
            <el-menu-item index="3" @click="toMovieManagement">
                <el-icon>
                    <VideoCamera />
                </el-icon>
                <template #title>电影管理</template>
            </el-menu-item>
            <el-menu-item index="4" @click="toCinemaManagement">
                <el-icon>
                    <School />
                </el-icon>
                <template #title>影院管理</template>
            </el-menu-item>
            <el-menu-item index="5">
                <el-icon>
                    <Tickets />
                </el-icon>
                <template #title>资讯管理</template>
            </el-menu-item>
            <el-menu-item index="6" @click="toOrderManagement">
                <el-icon>
                    <Ticket />
                </el-icon>
                <template #title>订单管理</template>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import {
    Tickets,
    Menu as IconMenu,
    User,
    VideoCamera,
    School,
    Ticket,
    ArrowLeft,
    ArrowRight
} from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}

const router = useRouter()
const toUserManagement = () => {
    router.push({
        name: 'UserManagement'
    })
}
const toMovieManagement = () => {
    router.push({
        name: 'MovieManagement'
    })
}

const toCinemaManagement = () => {
    router.push({
        name: 'CinemaManagement'
    })
}

const toOrderManagement = () => {
    router.push({
        name: 'OrderManagement'
    })
}

const toCharts = () => {
    router.push({
        name: 'Charts'
    })
}


</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>