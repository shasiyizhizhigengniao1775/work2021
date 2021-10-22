<!--
 * @Description: 
 * @Autor: 夏晓雪
 * @Date: 2021-10-20 19:06:25
 * @LastEditors: 夏晓雪
 * @LastEditTime: 2021-10-21 10:22:05
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="sendRequest">click me</button>
  </div>
</template>
<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    sendRequest(){
      this.axios.get('/getArticleList').then(res=>{

      })
      .catch()
    }
  }
}
</script>
