<template>
  <div>
    <page-header :text="text"/>
    <div class="scroll">
      <mt-load-more :top-method="loadTop" ref="mtrefresh">
        <template v-for="item in list">
          <list-item :item="item"></list-item>
        </template>
        <div class="getMore" @click="loadMore">加载更多</div>
      </mt-load-more>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Header from '../header/header.vue'
  import {Loadmore} from 'mint-ui';
  import natureJson from '../../../jsonData/nature.json'
  import ListItem from '../listItem/index.vue'
  import {toast_bm} from '../../util/msg'
  export default{
    data(){
      return {
        text: '风景名胜',
        index:0,
        list: []
      }
    },
    components: {
      'page-header': Header,
      'mt-load-more': Loadmore,
      'listItem': ListItem
    },
    created(){
      this.getList()
    },
    methods: {
      loadTop(){
        setTimeout(() => {
          this.index = 0;
          this.loadMore();
          this.$refs.mtrefresh.onTopLoaded();
        }, 2000)
      },
      getList(){
        this.list.push(...natureJson.slice(this.index, this.index + 5));
        this.index+=5;
      },
      loadMore(){
        if (natureJson.slice(this.index, this.index + 5).length < 1) {
          toast_bm('没有更多数据')
          return
        }
        this.getList();
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
