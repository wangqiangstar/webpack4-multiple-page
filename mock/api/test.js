
/*
    返回mock数据

    @param {object} getData  接口的GET数据
    @param {object} postData 接口的POST数据
 */
module.exports = (getData, postData) => {
    let data = {}

    if(postData.userId === 'xxx'){
        data = {
            status:200,
            errorCode: 0,
            errorMessage: '嗯...',
            body:{
                name:"aaa",
                age: 50
            },
            __body__: {
                get: getData,
                post: postData
            }
        }
    } else {
        data = {
            status:200,
            errorCode: 0,
            errorMessage: '啊...',
            body:{
                name:"bbb",
                age: 80
            },
            __body__: {
                get: getData,
                post: postData
            }
        }
    }

    return data
}

