<template>

    <el-card shadow="hover" class="mb-6 box-border mr-6 w-92%" @click="toUserDetail">
        <el-avatar class="" :src="`data:image/png;base64,`+user.avatar" />
        <div class="flex flex-col ml-6 justify-center">
            <span class="font-semibold text-xl text-gray-600  ">{{user.username}}</span>
            <span class="font-semibold text-sm text-gray-400  align-middle truncate">{{user.phone}}</span>
            <span class="font-semibold text-sm text-gray-400  align-middle truncate">{{user.email}}</span>
        </div>

    </el-card>

</template>

<script setup lang='ts'>
import { useRouter } from 'vue-router'



type User = {
    id: number;
    username: string;
    password: string;
    email: string;
    type: number;
    header: string;
    phone: string;
    avatar: string;
}

type Props = {
    user: User
}

const { user } = defineProps<Props>()


const router = useRouter()
const toUserDetail = () => {
    router.push({
        name: 'UserDetail',
        query: { id: user.id }
    })
}



</script>

<style scoped>
:deep() .el-card__body {
    @apply p-3 flex
}

.el-avatar,
el-avatar :deep() img {
    @apply w-80px h-80px
}
</style>