<template>
    <div >
        <div class="header">
            <slot name="header"> </slot>
        </div>
        <el-form :label-width="labelWidth" label-position="top" ref="ruleFormRef" status-icon :model="modelValue" :class="formStyle">
            <template v-for="item in config" :key="item.label">

                <el-form-item v-if="!item.isHidden" :label="item.label" :rules="item.rules" 
                    :prop="item.field" :class="itemStyle" >
                    <template v-if="item.type === 'input' || item.type === 'password'">
                        <el-input class="h-40px" :placeholder="item.placeholder"
                            :show-password="item.type === 'password'" :modelValue="modelValue[`${item.field}`]"
                            @update:modelValue="valueChange($event,item.field)" />
                    </template>

                    <template v-if="item.type === 'textarea'">
                        <el-input class="" :placeholder="item.placeholder"  v-model="textarea2"
                            type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"/>
                    </template>


                    <template v-if="item.type === 'select'">
                        <el-select class="" :placeholder="item.placeholder" multiple v-model="value1"
                            type="textarea" style="width: 240px">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </template>

                    <template v-if="item.type === 'input-number'">
                        <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
                    </template>

                    <template v-if="item.type === 'datePicker'">
                        <el-date-picker v-model="value2" type="date" placeholder="Pick a day" />
                    </template>

                    <template v-if="item.type === 'radio'">
                        <el-radio-group v-model="radio2" class="">
                            <el-radio label="1">Option 1</el-radio>
                            <el-radio label="2">Option 2</el-radio>
                        </el-radio-group>
                    </template>

                </el-form-item>
            </template>
        </el-form>
        <div class="footer w-100%">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { IFormItem } from './type'
import { defineProps, withDefaults, ref, defineEmits } from 'vue'
import type { FormInstance } from 'element-plus'


interface Props {
    config: IFormItem[] // 表单配置项
    labelWidth?: string // 每个表单标题宽度
    itemStyle?: string // 每个表单样式
    formStyle?: string
    itemColLayout?: object // 表单布局
    modelValue: any //绑定表单的每个数据
    isHidden?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    formItems: () => [],
    labelWidth: '80px',
  
})

const emit = defineEmits<{
    (e: 'update:modelValue', field: any, value: any): void
}>()


const ruleFormRef = ref<FormInstance>()

console.log(props.modelValue)

const valueChange = (value: any, field: string) => {
    emit('update:modelValue', field, value)
    console.log(value, field)
}

const value1 = ref([])
const textarea2 = ref('')
const options = [
    {
        value: 'Option1',
        label: 'Option1',
    },
    {
        value: 'Option2',
        label: 'Option2',
    },
    {
        value: 'Option3',
        label: 'Option3',
    },
    {
        value: 'Option4',
        label: 'Option4',
    },
    {
        value: 'Option5',
        label: 'Option5',
    },
]

const num = ref(1)

const value2 = ref('')

const radio2 = ref('1')
</script>


<style scoped>
.el-form-item :deep() label {
    font-size: 18px;
    font-weight: 700;
}
.el-form-item{
    @apply mb-8
}

</style>

