<template>
  <van-nav-bar
  class="navbar"
  :title="titleList"
  :right-text="$route.path==='/miste'?'登录|注册':null"
  style="background:green"
  fixed
>
  <template #left >
    <van-icon v-if="navbar"  name="search" size="30" color="white"/>
  </template>
</van-nav-bar>
</template>

<script>

export default {
  data() {
    return {
      title:[
        {path:'/miste',info:'外卖'},
        {path:'/search',info:'搜索'},
        {path:'/order',info:'订单列表'},
        {path:'/profile',info:'我的'}
      ],
    }
  },
  methods: {
    
  },
  computed: {
    navbar() {
      //头部搜索框是否显示
      return this.$route.path==='/miste'?true:false
    },
    titleList() {
      //根据路径动态显示内容
      const title = this.title.find(title => this.$route.path === title.path)
      return title&&title.info
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .navbarBgc
    backgroundolor red
  .van-nav-bar__title,.van-nav-bar__text
    color white
  .navbar
    z-index 10
</style>