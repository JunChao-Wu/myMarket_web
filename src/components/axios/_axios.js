import axios from 'axios';
import { BASE_API } from './_api';

let _axios = axios.create({
  baseURL: BASE_API,
  timeout: 10000
})

// /* 请求的拦截处理 */
// _axios.interceptors.request.use(config => {
//   return config
// }, err)

// /* response的拦截处理 */
// _axios.interceptors.response.use((response) => {
//   const res = response;
//   console.log("🚀 ~ file: _axios.js ~ line 16 ~ _axios.interceptors.response.use ~ res", res)
// }, err)

// /* 错误处理 */
// const err = (error) => {
//   if(error) {
//     const data = error.response.data;
//     if(error.response.status === 403) {
//       /* 403 处理 */
//       console.log(data.message || data.msg)
//     }
//     if(error.response.status === 401) {
//       /* 401 处理 */
//       console.log('身份验证失败')
//     }
//   }
//   return Promise.reject(error)
// }


export default _axios;