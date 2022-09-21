<template>
  <div :style="`background-image:url(${bg1})`" class="h-full bg-cover bg-center overflow-hidden	">

    <h4 class="text-7xl text-center	text-gray-600 my-18">ADMIN</h4>

    <el-card shadow="always" class="max-w-screen-md min-h-100 mx-auto flex flex-row border-0">
      <div :style="`background-image:url(${bg2})`" class="h-full bg-cover bg-center w-1/4"></div>

      <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-position="top"
        hide-required-asterisk="true" class="demo-ruleForm flex-1 p-10">
        <el-form-item label="账号" prop="username" class="mb-6 ">
          <el-input v-model="ruleForm.username" type="text" autocomplete="off" class="h-10 text-xl" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" autocomplete="off" class="h-10" />
        </el-form-item>

        <el-form-item class="flex ">
          <el-button type="primary" @click="submitForm(ruleFormRef)" class="flex-1">Submit</el-button>
          <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import bg1 from "@/assets/bg1.jpg";
import bg2 from "@/assets/bg2.jpg"

import { reactive, ref, toRaw } from "vue";
import type { FormInstance } from "element-plus";
import { reqLogin } from '@/api/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'



const ruleFormRef = ref<FormInstance>();

const ruleForm = reactive({
  username: "",
  password: "",
});

const rules = reactive({
  userName: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 6, message: "Length should be 3 to 6", trigger: "blur" },
  ],
  password: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
  ],
});

const router = useRouter()
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      // reqLogin(toRaw(ruleForm))
      console.log("submit!");
      router.push({
        name: 'Home'
      })
      ElNotification({
        title: 'Success',
        message: 'This is a success message',
        type: 'success',
        duration:3000
      })

    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>

<style scoped >
:deep() .el-card__body {
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
}

.el-form-item :deep() label {
  font-size: 18px;
  font-weight: 700;
}

.el-button {
  @apply h-40px
}

.el-input {
  font-size: 18px;
}
</style>
