<template>
  <div class="login">
    <div class="form_hd">
      <h3>MoreFly Way 登陆</h3>
      <img src="/static/images/icon2@2x.png"/>
    </div>
    <div class="form_content">
      <div class="form_item">
        <input type="text" placeholder="请输入用户名" v-model="username"/>
      </div>
      <div class="form_item">
        <input type="password" placeholder="请输入密码" v-model="password"/>
      </div>
      <div class="form_item">
        <my-button type="primary" size="large" @click="submit">登陆</my-button>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Button} from 'mint-ui';
  import {mapActions} from 'vuex';
  import {toast_bm} from '@/util/msg.js'
  export default{
    data(){
      return {
        username: '',
        password: ''
      }
    },
    components: {
      'my-button': Button
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      submit(){
        if (!this.username || !this.password) {
          toast_bm('请输入完整');
          return false
        }
        this.login(this.username);
        toast_bm('登陆成功');
        setTimeout(() =>{
            this.$router.push('/dayFun')
        },1000)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .login {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(left top, #5CACEE 20%, #63B8FF 50%, #97FFFF 100%);
    .form_hd {
      font-size: 2rem;
      padding-top: 3rem;
      color: #fff;
      img {
        width: 7rem;
        padding: 2rem 0;
      }
    }
    .form_content {
      padding: 0 5rem 3rem 5rem;
      .form_item {
        margin-bottom: 2rem;
        input {
          width: 100%;
          background: transparent;
          border: .1rem solid #fff;
          border-radius: 1rem;
          outline: none;
          text-indent: 1rem;
          padding: 1rem 0;
          transition: all .3s ease;
          &:focus {
            border: .1rem solid #97FFFF;
            box-shadow: 0 0 .5rem #97FFFF;
          }
        }
      }
    }
  }

</style>
