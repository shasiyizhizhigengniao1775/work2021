/*
 * @Description: 
 * @Autor: 夏晓雪
 * @Date: 2021-10-20 19:47:12
 * @LastEditors: 夏晓雪
 * @LastEditTime: 2021-10-21 22:13:19
 */

import axios from 'axios'
//element-ui组件
import { MessageBox, Message } from 'element-ui'
//引入路由文件
import router from '@/router/index'
//请求拦截器
axios.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        //根目录
        config.baseURL = "https://www.fastmock.site/mock/f289f52299d30aee8c455e351875d207/task";
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }

);
//响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    /* 
                        response.data = {
                            "code": "2200", // code 被称之为错误码
                            "message": {
                                state: "未登录或 token 过期!!!"
                            }
                        } 
          */
    const res = response.data;
    if (res.code !== '2200') {
        Message({
            message: res.message || 'Error',
            type: 'error',
            duration: 5000
        })
        if (res.code === '2401') {
            MessageBox.config(
                "You have been logged out, you can cancel to stay on this page, or log in again",
                "Confirm logout", {
                confirmButtonText: "Re-Login",
                cancelButtonText: "Cancel",
                type: "warning",
            }).then(() => {
                // router.push('/');
                Message.warn('你已被登出，请重新登录');
            })
        }
    }

    else {
        return res;
    }
    // return res;
}, function (error) {
    // 对响应错误做点什么
    console.log('error:' + error);
    // Message({
    //     message: res.message || 'Error',
    //         type: 'error',
    //         duration: 3000
    // })
    return Promise.reject(error);
});
