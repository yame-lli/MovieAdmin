<template>
  <div class="grid grid-cols-4 justify-items-center items-center">
    <el-button type="default" :icon="ArrowLeft" class="col-span-1 w-fit" @click="back" v-if="route.path.includes('Detail')">返回</el-button>
    <el-input :modelValue="keyword" @update:modelValue="search($event)" class="col-start-2 col-end-4" size="large" placeholder="Please Input" v-if="!route.path.includes('Detail')">
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>

    <el-button type="primary" v-if="route.path.includes('movieDetail')" class="col-start-4 col-end-5" @click="showComment">影评<el-icon class="el-icon--right"><ArrowRight /></el-icon></el-button>
 
  <el-dialog
    v-model="dialogVisible"
    title="影评"
    width="60%"
  
  >
    <CommentCard v-for="item in movieStore.currentMovie.commentList" :comment="item"></CommentCard>
    <!-- <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template> -->
  </el-dialog>
 
 </div>

</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { ArrowLeft ,ArrowRight} from '@element-plus/icons-vue'
import { useRoute ,useRouter} from 'vue-router'
import {apiSelectUserByName} from '@/api/user'
import {apiGetMovieByName} from '@/api/movie'
import {apiGetCinemaByName} from '@/api/cinema'
import useStore from '@/store/index'
import CommentCard from '../../views/Home/MovieManagement/CommentCard/index.vue'


let keyword = ref('')

const route = useRoute()
const {userStore,movieStore,cinemaStore} =useStore()
const search = (value:string)=>{
  keyword.value = value
  if(keyword.value==''&&route.path.includes('user')){
    userStore.reqGetAllUser()
  }
  else if(route.path.includes('user')){
    apiSelectUserByName({username:keyword.value}).then((result)=>{
      if(result.code==200){
        userStore.userList = result.data
      }
    })
  }
  else if(keyword.value==''&&route.path.includes('movie')){
    movieStore.reqGetAllMovie()
  }
  else if(route.path.includes('movie')){
    apiGetMovieByName({name:keyword.value}).then((result)=>{
       if(result.code==200){
        movieStore.movieList = result.data
      }
    })
  }
  else if(keyword.value==''&&route.path.includes('cinema')){
     cinemaStore.reqGetAllCinema()
  }
  else if(route.path.includes('cinema')){
    apiGetCinemaByName({name:keyword.value}).then((result)=>{
       if(result.code==200){
        cinemaStore.cinemaList = result.data
      }
    })
  }

}


const router = useRouter()
const back = () =>{
  router.back()
}

const dialogVisible = ref(false)
const showComment = ()=>{
  dialogVisible.value = true
}



</script>

<style scoped>

</style>