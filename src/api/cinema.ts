import serve from './index'


export const apiGetAllCinema = () => {
    return serve({
        url: '/selectAllCinemas',
        method: 'GET',
    })
}

export const apiGetCinemaByName = (data:any) => {
    return serve({
        url: '/selectCinemasLikeName',
        method: 'GET',
        params:{
            cinemaName:data.name
        }
    })
}

export const apiGetCinemaById = (data:any) => {
    return serve({
        url: '/seleceCinemaById',
        method: 'GET',
        params:{
            id:data.id
        }
    })
}

export const apiUpdateCinema = (formData:FormData) => {
    return serve({
        url: '/updateCinema',
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    })
}

export const apiGetHallList = (data:any) => {
    return serve({
        url: '/selectfromCinema',
        method: 'GET',
        params:{
            id:data.id
        }
    })
}

