<template>
  <div>
    <h2>我是Profile组件</h2>
    <h2>{{$route.query.name}}</h2>
  </div>
</template>

<script>
export default {
name: "Profile"
}
</script>

<style scoped>

</style>