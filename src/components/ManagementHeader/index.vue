<template>
     <el-input v-model="input1" class="left-50% transform -translate-x-50%" size="large" placeholder="Please Input">
        <template #append>
            <el-button :icon="Search" />
        </template>
    </el-input>
    <el-button type="default" :icon="ArrowLeft" class="absolute left-8% top-1%">返回</el-button>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import {ArrowLeft} from '@element-plus/icons-vue'


const input1 = ref('')
</script>

<style scoped>
.el-input {
    @apply w-40%
}
</style>