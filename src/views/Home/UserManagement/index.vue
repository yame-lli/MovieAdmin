<template>

    <ManagementHeader></ManagementHeader>

    <UserDetail></UserDetail>






</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import {ArrowLeft} from '@element-plus/icons-vue'
import UserDetail from './UserDetail/index.vue';
import ManagementHeader from '@/components/ManagementHeader/index.vue';

const input1 = ref('')
</script>

<style scoped >
.el-input {
    @apply w-40%
}
</style>