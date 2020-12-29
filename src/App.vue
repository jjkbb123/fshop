<template>
  <div>
           <!-- 头部组建 -->
        <div class="navbar" v-show="$route.path !== '/login'">
           <NavBar />
        </div>
         <router-view></router-view>
         <!-- 底部组建 -->
           <Footer v-show="$route.path !== '/login'"/>
  </div>
</template>

<script>
import Footer from './components/footer/footer'
import NavBar from './components/navbar/navbar'
export default {
  components: {
    Footer,
    NavBar
  }
}
</script>

<style lang="stylus">
  .navbar
    margin-bottom 44px
</style>