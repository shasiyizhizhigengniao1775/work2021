<!--
 * @Description: 
 * @Autor: 夏晓雪
 * @Date: 2021-10-20 19:06:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-26 21:39:20
-->
<template>
  <div id="app">
    <div id="nav">
      <img :src="getAbsPath('uploads/icon/aa.png')" alt />
      <div>金额:{{money |NumFormat}}</div>
      <div>日期:{{new Date()|dateFormat('YY-mm-dd HH:MM:SS')}}</div>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/album">Album</router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      money: 10000,
    }
  },
  methods: {

  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
