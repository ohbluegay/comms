<template>
  <div class="day_list" :key="item.id">
    <p class="day_list_title">{{item.title}}</p>
    <img class="day_list_img" :src="item.img"/>
    <p class="day_list_content">{{item.content}}</p>
    <div class="day_list_btm">
      <span>{{item.author}}</span>
      <span>{{item.create}}</span>
    </div>
    <p class="through"></p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    props: {
      item: {
        type: Object,
        default: {}
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/scss/mixin";
  .scroll {
    padding: 0 0 2rem 0;
  }

  .day_list {
    background: #fff;
    padding: .5rem 2rem .5rem 2rem;
    &_title {
      text-align: left;
      color: #26a2ff;
      padding: .5rem 0 1rem 0;
      border-bottom: .1rem dotted #ddd;
    }
    &_content {
      text-align: left;
      text-indent: 2em;
    }
    &_img {
      width: 100%;
      margin: 1rem 0;
      vertical-align: bottom;
    }
    &_btm {
      color: #999;
      text-align: right;
      margin-top: 1rem;
      span {
        display: inline-block;
        margin-left: 1rem;
      }
    }
    .through {
      height: 2rem;
      @include bg('../../assets/images/th2.png');
      margin-top: 1rem;
    }
  }

  .getMore {
    margin: 1rem 0;
    font-size: 1.2rem;
    color: #26a2ff;
    padding: 1rem;
    background: #fff;
  }
</style>
