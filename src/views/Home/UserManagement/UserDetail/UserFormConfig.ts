import { IForm } from '@/components/Form/type'

export const userFormConfig: IForm = {
  formItems: [
    {
      field:'username',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field:'telephone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field:'email',
      type: 'input',
      label: '邮箱',
      placeholder: '请输入邮箱',
    },
  ]
}