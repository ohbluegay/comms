<template>
  <div>
    <mt-header fixed :title="text">
      <mt-button icon="more" slot="left" @click="openSide"></mt-button>
      <span slot="right">
         <span v-if="auth">Hi，{{authName}}</span>
         <span v-else><router-link to="/login">登陆</router-link></span>
      </span>
    </mt-header>
    <div class="mask" v-show="sideShow" @click="hide">
    </div>
    <transition name="fade"
                enter-active-class="fadeInLeft"
                leave-active-class="fadeOutLeft">
      <div class="side_inner animated" v-show="sideShow">
        <h3>轻松自我{{sideShow}}</h3>
        <ul>
          <li>
            <router-link to="/dayFun">每日一笑</router-link>
          </li>
          <li>
            <router-link to="/nature">风景名胜</router-link>
          </li>
          <li>
            <router-link to="/celebrity">名人字画</router-link>
          </li>
          <li>
            <router-link to="/public">我要发布</router-link>
          </li>
          <li>
            <router-link to="/ele">element测试</router-link>
          </li>
        </ul>
        <div class="hd_side_btm">
          <template v-if="auth">
            <span>Hi，{{authName}}</span>
            <span @click="leave">退出</span>
          </template>
          <span v-else><router-link to="/login">登陆</router-link></span>
        </div>
      </div>
    </transition>
  </div>
</template>
<script type="text/ecmascript-6">
  import {Header, Button} from 'mint-ui'
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default{
    data(){
      return {}
    },
    computed: {
      ...mapState([
        'sideShow',
        'auth'
      ]),
      ...mapGetters([
        'authName'
      ])
    },
    created(){
      document.addEventListener('scroll', function () {
        var scrollTop = document.body.scrollTop;
        if (scrollTop <= 40) {
          //document.getElementsByClassName('mint-header')[0].style.background = "rgba(38, 162, 255,"+(0.5+(scrollTop/40))+")"
        }
      })
    },
    props: {
      text: {
        type: String,
        default: '康姆斯'
      }
    },
    components: {
      'mt-header': Header,
      'mt-button': Button
    },
    methods: {
      hide(){
        this.$store.state.sideShow = false;
      },
      openSide(){
        this.$store.state.sideShow = true;
      },
      ...mapActions([
        'logOut'
      ]),
      leave(){
        this.logOut();
        this.$router.push('/login')
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);
    top: 0;
    left: 0;
    z-index: 1000;
  }

  .mint-header {
    //background: rgba(38, 162, 255,.5);
  }

  a {
    color: #fff;
  }

  .side_inner {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    width: 50%;
    height: 100%;
    background: linear-gradient(left top, #5CACEE 20%, #63B8FF 50%);
    .hd_side_btm {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 3rem;
      text-align: right;
      span {
        display: inline-block;
        margin-right: 1rem;
        color: #fff;
      }
    }
    h3 {
      color: #8EE5EE;
      font-size: 2rem;
      line-height: 4rem;
      margin: 5rem 0 2rem 0;
    }
    ul {
      font-size: 1.5rem;
      color: #000;
      li {
        padding-bottom: 1rem;
        a {
          color: #fff;
          display: inline-block;
          position: relative;
          &.router-link-active {
            color: #97FFFF;
            &:before {
              position: absolute;
              content: '';
              top: .3rem;
              left: -1.5rem;
              width: 0;
              height: 0;
              border-top: .5rem solid transparent;
              border-bottom: .5rem solid transparent;
              border-left: 1rem solid #97FFFF;
            }
          }
        }
      }
    }
  }
</style>
