import serve from './index'

//查找所有资讯

export const apiSelectAllConsult = (data: any) => {
    return serve({
        url: '/selectAllConsult',
        method: 'GET',
    })
}







//根据资讯id查找资讯

export const apiSelectConsultById = (data: any) => {
    return serve({
        url: '/selectConsultById',
        method: 'GET',
        params: {
            id: data.id
        }
    })
}




//下架资讯

export const apiDeleteConsult = (data: any) => {
    return serve({
        url: '/deleteConsult',
        method: 'POST',
        params: {
            id: data.id
        }
    })
}





//添加资讯（参考movie里的添加电影）

export const apiAddConsult = (formData: FormData) => {
    return serve({
        url: '/insertMovie',
        method: 'POST',
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    })
}





//根据关键词查找资讯



