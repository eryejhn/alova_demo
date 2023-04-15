import { createAlova, ResponsedHandlerRecord } from 'alova';
import VueHook from 'alova/vue';
import GlobalFetch from 'alova/GlobalFetch';

export const alovaInst = createAlova({
    baseURL: 'http://192.168.56.111:9001/study_station/admin',
    // http://120.26.95.95:8607/blues-admin/auth/getWebSiteName 可以用这个接口测 但是这个接口没有做跨域 所以使用beforeRequest会报错
    statesHook: VueHook,
    requestAdapter: GlobalFetch(),
    beforeRequest(method){
        //请求拦截器
        method.config.headers['X-Token'] = localStorage.getItem("X-Token") || '';
    },
    timeout: 50000,
    responded: {
        //相应拦截器
        onSuccess: async (response, method) =>{
            if (response.status >= 400) {
                throw new Error(response.statusText);
            }
            const json = await response.json();
            if (response.status != 200) {

                throw new Error(json.message);
            }
            if (json.code != 200) {
                alert(json.message);
                throw new Error(json.message);
            }
            return json.data;
        },
        onError: (err, method) => {
            alert(err.message);
        }
    }
});


function get(url: string, params?: any, config = {}) {
    return alovaInst.Get(url, {
        params,
        ...config
    })
}

function post(url: string, data?: any, config = {}) {
    return alovaInst.Post(url, data, config)
}


export {
    get,
    post
}

