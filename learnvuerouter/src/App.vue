<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link :to="/user/+userId">User</router-link>|
<!--      路由参数传递-->
      <router-link :to="{path: '/profile',query:{name:'Jack',age:18}}">档案</router-link>
    </div>
    <keep-alive exclude="Profile"><router-view/></keep-alive>
  </div>
</template>

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

<script>
  export default {
    name: 'App',
    data(){
      return{
        userId:'Jack'
      }
    }
  }
</script>