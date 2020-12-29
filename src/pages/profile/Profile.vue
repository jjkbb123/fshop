<template>
  <div style="borderTop:3px solid white;">
    <van-card
  thumb="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3511861640,2020315509&fm=26&gp=0.jpg"
>
 <template #tags>
   <router-link to="/login"></router-link>
   <div class="cardInfo" @click="login">
     <div class="cardInfo-header">登录/注册</div>
   <div class="cardInfo-bottom"><van-icon name="phone-o" size="18"/>  暂未绑定手机号</div>
   </div>
  </template>
  </van-card>
    <van-grid direction="horizontal" :column-num="3">
        <van-grid-item>
          <div><span  class="money">0.00</span> <span>元</span> </div>
          <div>我的余额</div>
        </van-grid-item>
        <van-grid-item  >
          <div><span  class="discount">0</span> <span>个</span></div>
          <div>我的优惠</div>
        </van-grid-item>
        <van-grid-item  >
          <div><span  class="integral">0</span> <span>分</span></div>
          <div>我的积分</div>
        </van-grid-item>
    </van-grid>
    <van-grid direction="horizontal" :column-num="1">
          <van-grid-item>
            <div><van-icon name="shopping-cart-o" color="blue"/>  我的订单</div>
          </van-grid-item>
          <van-grid-item>
            <div><van-icon name="fire-o" color="red"/>  积分商城</div>
          </van-grid-item>
          <van-grid-item>
            <div><van-icon name="award-o" color="orange"/>  外卖会员卡</div>
          </van-grid-item>
          <van-grid-item>
            <div><van-icon name="description" color="green"/>  服务中心</div>
          </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$router.push('/login')
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .van-grid-item__content--horizontal
    flex-direction column
    .money
      font-size 25px
      color orange 
    .discount
      font-size 25px
      color darkOrange
    .integral
      font-size 25px
      color green
  .van-grid-item__content--center
    align-items baseline
  .van-card
    background-color green
    .van-image__img
      border-radius 50px
  .cardInfo
    margin-top 22px
    color white
    .cardInfo-header
      height 30px
      font-size 15px
      font-weight bold
    .cardInfo-bottom
      font-size 12px
</style>