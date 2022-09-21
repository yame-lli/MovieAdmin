<template>
    <div class="w-100% mt-10 ">
        <Form :config="movieFormConfig.formItems" v-model="movie"
            class="rounded border-0.5 border-gray-200 flex  p-14 bg-white flex-col" itemStyle="pr-20" formStyle="flex w-100% flex-wrap " >
        
        <template #footer>
            <el-button type="primary" size="large" class="relative left-50% transform  -translate-x-50% w-30">修改</el-button>
        </template>
        </Form>
    </div>

</template>

<script setup lang='ts'>
import Form from '@/components/Form/index.vue';
import { movieFormConfig } from './MovieFormConfig'


let movie = {}


</script>

<style scoped>

</style>