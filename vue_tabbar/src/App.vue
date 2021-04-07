<template>
  <div id="app">
    <router-view></router-view>
    <TarBar>
      <tar-bar-item path="/home" active-color="red">
        <img slot="item-icon" src="./assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/classification">
        <img slot="item-icon" src="./assets/img/tabbar/classification.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/classification_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/buy">
        <img slot="item-icon" src="./assets/img/tabbar/buy.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/buy_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tar-bar-item>
      <tar-bar-item path="/mine">
        <img slot="item-icon" src="./assets/img/tabbar/mine.svg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/mine_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tar-bar-item>
    </TarBar>
  </div>
</template>

<script>
import TarBar from './components/tabbar/TabBar'
import TarBarItem from './components/tabbar/TabBarItem'
  export default {
    name: 'App',
    components: {
      TarBar,
      TarBarItem
    }
  }
</script>

<style>
  @import "./assets/css/base.css";
</style>
