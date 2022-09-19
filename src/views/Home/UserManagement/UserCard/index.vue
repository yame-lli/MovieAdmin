<template>
 
        <el-card shadow="hover" class="mb-6 box-border w-fit mr-6">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <div class="flex flex-col ml-6 justify-center">
                <span class="font-semibold text-xl text-gray-600  ">User</span>
                <span class="font-semibold text-sm text-gray-400  align-middle ">123456789</span>
                <span class="font-semibold text-sm text-gray-400  align-middle ">987656789@qq.com</span>
           </div>

        </el-card>

</template>

<script setup lang='ts'>

</script>

<style scoped>
:deep() .el-card__body {
    @apply p-3 flex 
}
.el-avatar,el-avatar :deep() img{
    @apply w-80px h-80px
}
</style>