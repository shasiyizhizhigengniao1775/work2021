<!--
 * @Description: 
 * @Autor: 夏晓雪
 * @Date: 2021-10-21 10:51:21
 * @LastEditors: 夏晓雪
 * @LastEditTime: 2021-10-21 22:03:43
-->
<template>
    <div>
        <p>
            账号：
            <input v-model="username" type="text" />
        </p>
        <p>
            密码：
            <input v-model="password" type="password" slot />
        </p>
        <button @click="doLogin">登录</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        doLogin() {
            this.axios.post('/login', {
                username: this.username,
                password: this.password,
            }).then(a => {
                console.log(a);
                //data为响应拦截器返回的res  也就是response.data
                /* 
                        response.data = {
                            "code": "2200", // code 被称之为错误码
                            "message": {
                                state: "未登录或 token 过期!!!"
                            }
                        } 
                 */
                if (a.message == '未登录或 token 过期!!!') {
                    // this.$router.push('/')
                }
                else {
                    alert('用户名或密码错误')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>