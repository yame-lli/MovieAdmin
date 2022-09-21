<template>
     <ManagementHeader></ManagementHeader>

     <router-view></router-view>
</template>

<script setup lang='ts'>
import ManagementHeader from '@/components/ManagementHeader/index.vue';
import OrderList from './OrderList/index.vue'

</script>

<style scoped>

</style>