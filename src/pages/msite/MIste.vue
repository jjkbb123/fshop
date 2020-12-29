<template>
  <div >
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="green">
        <van-swipe-item>
      <van-grid square class="foodList">
          <van-grid-item v-for="(value,index) in foodList" :key="index" :icon="value.icon" :text="value.text" />
      </van-grid>
        </van-swipe-item>
        <van-swipe-item>
      <van-grid square class="foodList">
          <van-grid-item v-for="(value,index) in foodList" :key="index" :icon="value.icon" :text="value.text" />
      </van-grid>
        </van-swipe-item>
        <van-swipe-item>
      <van-grid square class="foodList">
          <van-grid-item v-for="(value,index) in foodList" :key="index" :icon="value.icon" :text="value.text" />
      </van-grid>
        </van-swipe-item>
    </van-swipe>
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <div class="miste-middle"><van-icon name="orders-o" /><span>附近商家</span></div>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"  
        >
        <van-cell v-for="item in list" :key="item" :title="item">
      <div class="miste-detail">
        <div class="miste-detail-left">
          <img src="https://img.yzcdn.cn/vant/logo.png" alt="">
        </div>
        <div class="miste-detail-right">
          <div class="miste-detail-right-title">
            <span style="float:left">
              <span style="background:orange; color:black;">品牌</span>
              <span style="color:black;fontSize:17px">某某香辣烧鹅</span>
            </span>
            <span style="float:right;fontSize:13px;marginRight:3px">保 准 票</span>
          </div>
          <div class="miste-detail-right-middle">
            <span>
              <van-icon name="star-o" class="icon" />
              <van-icon name="star-o" />
              <van-icon name="star-o" />
              <van-icon name="star-o" />
              <van-icon name="star-o" />
              <span style="color:orange;display:inline-block;fontSize:16px">
                4.1
              </span>
              <span style="fontSize:11px">
                月售106单
              </span>
            </span>
            <span style="float:right;fontSize:12px;marginRight:3px">
              专送
            </span>
          </div>
          <div class="miste-detail-right-bottom">
            <span>￥20起送</span>
            <span>配送费约5￥</span>
          </div>
        </div>
      </div>
    </van-cell>
  </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data() {
    return {
      foodList:[
        {icon:require('../../assets/images/duck.jpg'),text:'烧鹅'},
        {icon:require('../../assets/images/duck.jpg'),text:'烧鹅'},
        {icon:require('../../assets/images/duck.jpg'),text:'烧鹅'},
        {icon:require('../../assets/images/duck.jpg'),text:'烧鹅'},
        {icon:require('../../assets/images/duck.jpg'),text:'烧鹅'},
        {icon:require('../../assets/images/duck.jpg'),text:'烧鹅'},
        {icon:require('../../assets/images/duck.jpg'),text:'烧鹅'},
        {icon:require('../../assets/images/duck.jpg'),text:'烧鹅'},
      ],
      list: [],
      loading: false,
      finished: false,
      refreshing: true,
    }
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }
          this.list.push('');
          this.loading = false;

        if (this.list.length > 1) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .my-swipe ,.van-swipe-item
    color #fff;
    font-size 20px;
    line-height 150px;
    text-align center;
    background-color #39a9ed;
    .van-swipe__indicator
      background-color red
  .van-cell__value
    text-align left
  .van-icon__image
    width 2em
  .van-icon-orders-o::before
    position relative
    top 2px
  .miste-middle
    margin-left 3px
    color gray
    font-size 13px
  .van-cell
    display block
    padding 11px 3px
  .miste-detail
    height 86px
    display flex
    .miste-detail-left
      justify-content flex-start
      width 86px
      height 86px
      img
        padding 3px
        width 80px
    .miste-detail-right
      width 100%
      .miste-detail-right-title
        width 100%
        height 24px
      .miste-detail-right-middle
        margin-top 8px
      .miste-detail-right-bottom
        font-size 12px
        color black
</style>