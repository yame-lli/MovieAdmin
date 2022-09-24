<template>
  <div class="w-100% mt-10 flex  justify-center">
    <Form :config="userFormConfig.formItems" :model-value="user" @update:model-value="change"
      class="rounded border-0.5 w-100% border-gray-200 items-center p-14 bg-white" formStyle="flex flex-col items-center" itemStyle="w-40%">
      <template #footer>
        <div class="flex flex-col items-center	">
          <el-button type="primary" class="w-40%">修改</el-button>
          <el-link type="info" class="mt-8" @click="visible = true">修改密码</el-link>
        </div>

        <el-dialog v-model="visible" :show-close="false">
          <template #header="{ close, titleId, titleClass }">
            <div class="my-header flex justify-between">
              <h4 :id="titleId" :class="titleClass">修改密码</h4>
              <el-button type="danger" @click="close">
                <el-icon class="el-icon--left">
                  <CircleCloseFilled />
                </el-icon>
                Close
              </el-button>
            </div>
          </template>
          <el-form label-width="100px" class="flex flex-col items-center">
            <el-form-item label="旧密码" class="w-70%">
              <el-input />
            </el-form-item>
            <el-form-item label="新密码" class="w-70%">
              <el-input />
            </el-form-item>
            <el-form-item label="确认新密码" class="w-70%">
              <el-input />
            </el-form-item>

            <el-button class="w-50% ml-100px" type="primary">提交</el-button>
          </el-form>
        </el-dialog>
      </template>
    </Form>
  </div>
</template>

<script setup lang='ts'>
import Form from '@/components/Form/index.vue';
import { userFormConfig } from './UserFormConfig'
import { ref, reactive } from 'vue'
import { ElButton, ElDialog } from 'element-plus'
import { CircleCloseFilled } from '@element-plus/icons-vue'


type User = {
  username: string,
  password: string,
  telephone: string,
  email: string
}

let user: User = reactive({
  username: '123',
  password: '123456',
  telephone: '123456789',
  email: '12456789@qq.com',
})

const change = (field: keyof User, value: string) => {
  user[`${field}`] = value
}

const visible = ref(false)

</script>

<style scoped>
:deep() .el-overlay-dialog {
  @apply bg-gray-200 m-0 bg-opacity-50
}
</style>