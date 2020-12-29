<template>
  <div v-show="loginFooterHide">
   <van-tabbar v-model="path">
  <van-tabbar-item name="/miste" icon="home-o" @click="goPath" >外卖</van-tabbar-item>
  <van-tabbar-item name="/search" icon="search" @click="goPath">搜索</van-tabbar-item>
  <van-tabbar-item name="/order" icon="friends-o" @click="goPath">订单</van-tabbar-item>
  <van-tabbar-item name="/profile" icon="setting-o" @click="goPath">我的</van-tabbar-item>
  </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      path:this.$route.path
    }
  },
  methods: {
    //底部导航切换按钮
    goPath () {
      //底部导航多次重复切换会报错
      if(this.path === this.$route.path) {
        return 
      }else {
        //点击导航切换到指定路由
        this.$router.replace(this.path)
      }
    },
  },
  computed: {
    loginFooterHide() {
      return this.$route.path !== '/login'
    }
  }
}
</script>

<style lang="">
  
</style>