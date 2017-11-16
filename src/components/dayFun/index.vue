<template>
  <div>
    <page-header :text="text"/>
    <div class="nav">
      <a href="javascript:void(0)" :class="active1 ? 'active' :''" @click="choose(1)">精选</a>
      <a href="javascript:void(0)" :class="active1 ? '' :'active'" @click="choose(2)">图趣</a>
    </div>
    <div class="scroll">
      <mt-load-more :top-method="loadTop" ref="mtrefresh">
        <template v-for="item in myList">
          <list-item :item="item"></list-item>
        </template>
        <div class="getMore" @click="loadMore">加载更多</div>
      </mt-load-more>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Header from '../header/header.vue'
  import {Loadmore} from 'mint-ui'
  import dayJson from '../../../jsonData/day.json'
  import {toast_bm} from '../../util/msg'
  import ListItem from '../listItem'
  export default{
    data(){
      return {
        text: '每日一笑',
        select: 1,
        active1: true,
        myList: [],
        index: 0,
        allLoaded:false,
        scrollMode:"auto"
      }
    },
    created(){
      this.getList()
    },
    components: {
      'page-header': Header,
      'mt-load-more': Loadmore,
      'listItem': ListItem
    },
    methods: {
      choose(index){
        if ((index === 1 && this.active1 == true) || (index === 2 && this.active1 == false)) return;
        index === 1 ? this.active1 = true : this.active1 = false;
        this.index = 0;
        this.getList();
      },
      loadTop(){
        setTimeout(() => {
          this.getList()
          this.$refs.mtrefresh.onTopLoaded()
        }, 2000)
      },
      loadBottom(){
        setTimeout(() => {
          this.$refs.mtrefresh.onBottomLoaded()
        }, 2000)
      },
      getList(){
        this.myList = dayJson.filter((item) => {
          return this.active1 ? item.type === 1 : item.type === 2
        }).slice(0, 5)
        this.index = 0;
      },
      loadMore(){
        this.index += 5;
        var newList = dayJson.filter((item) => {
          return this.active1 ? item.type === 1 : item.type === 2
        }).slice(this.index, this.index + 5);
        if (newList.length < 1) {
          toast_bm('没有数据了')
          return
        }
        this.myList.push(...newList)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .nav {
    padding: 0 2rem;
    display: flex;
    background: #fff;
    a {
      flex: 1;
      display: inline-block;
      color: #333;
      font-size: 1.3rem;
      padding: 1rem 0;
      border-bottom: .2rem solid #ffffff;
      &.active {
        border-bottom: .2rem solid #26a2ff;
        color: #26a2ff;
      }
    }
  }
</style>
