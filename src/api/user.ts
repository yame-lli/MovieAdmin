import serve from './index'

export const reqLogin = (data: any) => {
    return serve({
        url: '/login',
        method: 'POST',
        params: data
    })
}