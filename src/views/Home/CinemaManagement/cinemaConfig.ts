import { IForm } from '@/components/Form/type'

export const cinemaFormConfig: IForm = {
    formItems: [
        {
            field: 'cinemaName',
            type: 'input',
            label: '影院名称',
            placeholder: '请输入影院名称'
        },
        {
            field: 'cinemaAddress',
            type: 'input',
            label: '影院地址',
            placeholder: '请输入影院地址'
        },
        {
            field: 'cinemaScore',
            type: 'input-number',
            label: '影院评分'
        }, 
    ]
}