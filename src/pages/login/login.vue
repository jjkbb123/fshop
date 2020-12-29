<template>
  <div class="login">
    <div class="login-go-back" @click="goBack">
      <van-icon name="arrow-left" />
    </div>
    <div class="login-title">外卖项目</div>
    <div class="login-phone">
      <span :class="loginPhone" @click="loginPhoneOrPwd('phone')">短信登录</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span :class="loginPwd" @click="loginPhoneOrPwd('pwd')">密码登录</span>
      <div class="login-phone-content">
        <!-- 短信登录 -->
       <div v-if="messageOrPwd">
          <div class="login-phone-content-phone">
          <div style="float:left;">手机号</div>
          <div style="float:left;"><input type="text" maxlength="11" style="width:140px;height:40px;border:0;color:black;"></div>
          <div style="float:right;">获取验证码</div>
        </div>
        <div>
          <div class="login-phone-content-phone">
          <div style="float:left;">验证码</div>
          <div style="float:left;"><input type="text" maxlength="4" style="width:140px;height:40px;border:0;color:black;"></div>
          <div style="float:right;"></div>
        </div>
       </div>
        </div>
        <!-- 密码登录 -->
        <div v-else>
          <div class="login-phone-content-phone">
          <div style="float:left;">账号:</div>
          <div style="float:left;"><input type="text" maxlength="11" style="width:140px;height:40px;border:0;"></div>
          <div style="float:right;">密码</div>
          <!-- <span style="color:gray;textAlign:left;">手机号</span> -->
         </div>
          <div>
          <div class="login-phone-content-phone">
          <div style="float:left;">密码:</div>
          <div style="float:left;"><input type="text" maxlength="4" style="width:140px;height:40px;border:0;"></div>
          <div style="float:right;"></div>
          <!-- <span style="color:gray;textAlign:left;">手机号</span> -->
        </div>
       </div>
        </div>
        <div style="fontSize:12px;">
          <span style="color:gray;">温馨提示:尚未注册账号的手机号,登陆时将自动注册,且代表已同意</span>
          <span style="color:green;">《用户服务协议》</span>
        </div>
        <div>
          <van-button type="primary" style="width:100%;margin:12px 0;">登陆</van-button>
          <div style="color:gray;fontSize:12px;">关于我们</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {reqPosition} from '../../api/index'
export default {
  data() {
    return {
      loginPhone:'login-phone-or-pwd',
      loginPwd:'',
      messageOrPwd:true
    }
  },
  mounted() {
    const a = reqPosition()
    console.log(a);
  },
  methods: {
    //登录方式短信或者密码
    loginPhoneOrPwd(phoneOrPwd) {
      if(phoneOrPwd==='phone') {
        //短信
       this.loginPhone = 'login-phone-or-pwd'
       this.loginPwd = ''
       this.messageOrPwd = true
      }else {
        //密码
       this.loginPwd = 'login-phone-or-pwd'
       this.loginPhone = ''
       this.messageOrPwd = false
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  },
}
</script>

<style lang="stylus">
  .login
    margin-top 46px
    .login-go-back
      position absolute
      top 2px
      left 2px
      font-size 20px
      color gray
    .login-title
      font-size 40px
      font-weight 800
      color green
      text-align center
    .login-phone
      margin-top 25px
      text-align center
    .login-phone-or-pwd
      display inline-block
      height 25px
      color green
      border-bottom 3px solid green
    .login-phone-content
      width 260px
      height 130px
      margin 12px auto
      .login-phone-content-phone
        width 250px
        height 42px
        font-size 13px
        padding 0 5px
        color gray
        line-height 42px
        border 1px gray solid
        margin-bottom 15px
</style>