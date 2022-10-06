<template>
    <div class="mt-10 grid grid-cols-4 justify-items-center">
        <UserCard v-if="userList" v-for=" item in  userList " :key="item.id" :user="item"></UserCard>
    </div>
</template>

<script setup lang='ts'>
import UserCard from '../UserCard/index.vue'
import useStore from '@/store/index'
import {ref,reactive} from 'vue'

const { userStore } = useStore()
let userList = ref()

userStore.reqGetAllUser().then(() => {
    userList.value = userStore.userList
})

userStore.$subscribe(()=>{
    userList.value = userStore.userList
    
})


</script>

<style scoped>

</style>