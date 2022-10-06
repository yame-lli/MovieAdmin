import { IForm } from '@/components/Form/type'

export const movieFormConfig: IForm = {
    formItems: [
        {
            field: 'movieCName',
            type: 'input',
            label: '中文名字',
            placeholder: '请输入电影名字'
        },
        {
            field: 'movieFName',
            type: 'input',
            label: '英文名字',
            placeholder: '请输入电影名字'
        },
        {
            field: 'movieActor',
            type: 'input',
            label: '演员',
            placeholder: '请输入演员',
        },
        {
            field: 'movieDirector',
            type: 'input',
            label: '导演',
            placeholder: '请输入导演',
        },

        {
            field: 'movieDuration',
            type: 'input-number',
            label: '电影时长/分钟',
        },
        {
            field: 'movieType',
            type: 'input',
            label: '电影类型',
            placeholder: '请输入类型',
        },
        {
            field: 'movieScore',
            type: 'input-number',
            label: '电影评分',
        },
        {
            field: 'movieReleaseDate',
            type: 'datePicker',
            label: '电影上映时间',
        },
        {
            field: 'movieState',
            type: 'radio',
            label: '电影状态',
            options:[{label:'下架',value:0},{label:'热映中',value:1},{label:'即将上映',value:2}]
        },
        {
            field:'movieCountry',
            type:'input',
            label:'地区',
            placeholder: '请输入地区',
        },
        {
            field: 'movieDetail',
            type: 'textarea',
            label: '电影详情',
            placeholder: '请输入电影详情',
        },
    ]
}