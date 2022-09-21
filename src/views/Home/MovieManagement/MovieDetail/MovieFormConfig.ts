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
            field: 'movieEName',
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
            field: 'movieDurantion',
            type: 'input',
            label: '电影时长',
        },
        {
            field: 'movietype',
            type: 'select',
            label: '电影类型',
        },
        {
            field: 'movieScore',
            type: 'input-number',
            label: '电影评分',
        },
        {
            field: 'movieBoxOffice',
            type: 'input-number',
            label: '电影票房',
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
        },

        {
            field: 'moviePoster',
            type: 'textarea',
            label: '电影海报',

        }, {
            field: 'movieDetail',
            type: 'textarea',
            label: '电影详情',
            placeholder: '请输入电影详情',
        },
    ]
}