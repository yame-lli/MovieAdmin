import axios from 'axios'

import axios from 'axios'

declare module 'axios' {
    interface IAxios<D = null> {
        code: number
        msg: string
        extra: D
        [propName: string]: any
    }
    export interface AxiosResponse<T = any> extends IAxios<D> { }
}