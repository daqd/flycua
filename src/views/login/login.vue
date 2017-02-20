<template lang="html">
  <div class="MARGIN-TOP-40-PX">
    <!-- 提示信息 -->
    <!-- <div class="loginTip">
      测试用户名：米梦宇 - 密码：123456
    </div> -->
    <!-- 提示信息结束 -->
    <!-- 用户登录方法选项卡 -->
    <div class="tabs_wrap">
        <div class="tabs_wrap_item single" :class="{cur:loginType=='normal'}" @click="changeTypeToNormal">普通登录</div>
        <div class="tabs_wrap_item multiple" :class="{cur:loginType=='message'}" @click="changeTypeToMessage">手机动态密码登录</div>
    </div>
    <!-- 普通登录 -->
    <div class="normal-login-wrap" v-show="loginType=='normal'">
      <!-- 用户姓名 -->
      <mt-field label="用户名" placeholder="请输入用户名" v-model="userName"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
      <mt-field label="验证码" placeholder="请输入验证码" v-model="VerifyCode">
        <div class="VerifyCodePic">
          <img src="../../assets/login/chineseVerifyCode.jpg" height="40px" width="100px">
        </div>
      </mt-field>
    </div>
    <!-- 短信登录 -->
    <div class="message-login-wrap" v-show="loginType=='message'">
      <mt-field label="手机号" placeholder="请输入手机号"></mt-field>
      <div class="getMessageWrap">
        <mt-cell title="动态密码将以短信方式发送到您的手机上，请注意查看！">
          <div @click="getMessage">
            <mt-button size="small">获取动态密码</mt-button>
          </div>
        </mt-cell>
      </div>
    </div>
    <!-- 预订按钮 -->
    <div class="loginBtnWrap" @click="toLogin">
      <mt-button type="danger" size="large">登录</mt-button>
    </div>
    <!-- 注册链接及忘记密码 -->
    <div class="reg-forget-wrap">
      <div class="regLink">
        注册
      </div>
      <div class="forgetPwdLink" v-show="loginType=='normal'">
        忘记密码
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {Toast } from 'mint-ui';
export default {
  data() {
    return {
      loginType:'normal',
      userName:'米梦宇',
      password:'123456',
      VerifyCode:'xv5vi'
    };
  },
  ready() {},
  attached() {},
  methods: {
    changeTypeToNormal(){
      this.$data.loginType="normal"
    },
    changeTypeToMessage(){
      this.$data.loginType="message"
    },
    getMessage(){
      Toast('短信登录暂未开发');
    },
    //执行登录操作
    toLogin(){
      if(this.$data.loginType=="message"){
        Toast('短信登录暂未开发');
      }else{
      //  console.log(this.$data.userName);
        if(this.$data.userName==''){
          Toast('用户名不能为空');
        }else if(this.$data.userName!='米梦宇'){
          Toast('用户名不正确');
        }else if(this.$data.password==''){
          Toast('密码不能为空');
        }else if(this.$data.password!='123456'){
          Toast('密码不正确');
        }else if(this.$data.VerifyCode==''){
          Toast('验证码不能为空');
        }else if(this.$data.VerifyCode.toLowerCase()!='xv5vi'){
          Toast('验证码不正确');
        }else{
            this.$store.dispatch('setUserName',this.$data.userName); //保存用户名至应用级状态
            this.$store.dispatch('setLoginStatus',true); //保存登录状态至应用级状态
            this.$store.dispatch('setToken','HKASDNSDNMSDN'); //保存token至应用级状态
            this.$store.dispatch('setPageChangeStatus','go'); //保存页面切换状态至全局
            this.$router.replace({path:this.$store.state.base.nextPath}); //替换并跳回到被中断的路由
        }
      }
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.tabs_wrap{
  width: 100%;
  height: 45px;
}
.tabs_wrap_item{
  width: 50%;
  height: 45px;
  line-height: 45px;
  text-align: center;
  float: left;
  background:#e7e7e7;
}
.cur{
  background:#f63939;
  color:#FFF;
}
.loginTip{
  width: 100%;
  height: 30px;
  line-height: 30px;
  box-sizing: border-box;
  padding-left: 10px;
  background: #fff6dd;
  color: #ff742a;
}
.normal-login-wrap{
  width: 100%;
  height: auto;
  .VerifyCodePic{
    width: 100px;
    height: 40px;
    margin: 5px 10px 0px 0px;
  }
}
.message-login-wrap{
  width: 100%;
  height: auto;
  .getMessageWrap .mint-cell-title{
    margin: 15px 20px 15px 0px;
    color: #ff9704;
  }
}
.reg-forget-wrap{
  width: 90%;
  height: 40px;
  display: flex;
  margin: 0 auto;
  color: #df3538;
  .regLink{
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items:flex-start;
  }
  .forgetPwdLink{
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items:flex-start;
  }
}
.loginBtnWrap{
  width: 90%;
  margin:0 auto;
  margin-top: 20px;
  margin-bottom: 10px;
}
</style>
