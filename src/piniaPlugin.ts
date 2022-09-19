import { PiniaPluginContext } from "pinia"
import { toRaw } from 'vue';
type Option = {
    key?: string
}


const setStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getStorage = (key: string) => {
   return JSON.parse(localStorage.getItem(key) as string)
}

const piniaPlugin = (option: Option) => {
    return (context: PiniaPluginContext) => {
        const { store } = context
        let data =  getStorage((option?.key ?? 'pinia') + `${store.$id}`)

        store.$subscribe(() => {
            setStorage((option?.key ?? 'pinia') + `${store.$id}`, toRaw(store.$state))
        })

        return {
            ...data
        }
    }
}

export default piniaPlugin
