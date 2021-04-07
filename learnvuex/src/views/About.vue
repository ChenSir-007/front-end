<template>
  <div class="about">
    <h1>{{$store.state.counter}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
  export default {
    methods:{
      add(){
        this.$store.commit('increment')
      },
      sub(){
        this.$store.commit('decrement')
      }
    }
  }
</script>
