import serve from './index'


export const apiGetAllUser = () => {
    return serve({
        url: '/selectAllUser',
        method: 'GET',
    })
}

export const apiGetUserById = (data: any) => {
    return serve({
        url: '/selectUserById',
        method: 'GET',
        params: {
            id: data.id
        }
    })
}
export const apiLogin = (data: any) => {
    return serve({
        url: '/login',
        method: 'POST',
        params: data
    })
}

export const apiSelectUserByName = (data: any) => {
    return serve({
        url: '/selectUserByName',
        method: 'POST',
        params: {
            username: data.username
        }
    })
}

export const apiUpdateUser = (data: any) => {
    return serve({
        url: '/updateUser',
        method: 'POST',
        params: {
            otherid: data.otherid,
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: data.password
        }
    })
}

