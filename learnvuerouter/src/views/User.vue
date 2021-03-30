<template>
  <div>
    <h2>我是用户界面</h2>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      //获得在index.js文件中获取到的userid
      return this.$route.params.userid
    }
  },
  created() {
    console.log('user created')
  },
  destroyed() {
    console.log('user destoryed')
  }
}
</script>

<style scoped>

</style>