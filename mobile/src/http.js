import axios from 'axios'
const http = axios.create({
   
    baseURL:'http://webserver.steppyplus.com/'
})

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
   
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

http.interceptors.response.use(res =>{
    return res.data
},err =>{
   
    return Promise.reject(err)
})

export default http