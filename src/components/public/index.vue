<template>
  <div>
    <page-header :text="text"/>
    <div class="public">
      <div class="title">发布场景</div>
      <div class="form">
        <div class="form_item">
          <input type="text" placeholder="标题" v-model="title"/>
        </div>
        <div class="form_item">
          <textarea rows="5" v-model="content" placeholder="描述"></textarea>
        </div>
        <div class="form_item">
          <mt-radio title="选择类别" v-model="status" :options="options"></mt-radio>
        </div>
        <div class="form_item">
          <input type="text" placeholder="作者" v-model="author"/>
        </div>
        <div class="form_item">
          <p>
            <input type="text" v-model="formatData" class="time"/>
            <mt-button type="primary" size="small" @click="picker">选择日期</mt-button>
          </p>
          <mt-datetime-picker ref="picker" type="date" v-model="pickerTime" year-format="{value} 年"
                              month-format="{value} 月"
                              date-format="{value} 日"
                              :startDate="startDate"
                              :endDate="endDate"></mt-datetime-picker>
        </div>
        <div class="form_item">
          <mt-button type="primary" size="large" @click="publish">发布</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Header from '../header/header.vue'
  import {Radio, DatetimePicker, Button} from 'mint-ui';
  import {formatPicker} from '../../util/format'
  export default{
    data(){
      return {
        text: '我要发布',
        status: '',
        content: '',
        title: '',
        pickerTime: '',
        author: '',
        options: [{
          label: '每日一笑-精选',
          value: '0'
        }, {
          label: '每日一笑-趣图',
          value: '1'
        }, {
          label: '风景名胜',
          value: '2'
        }, {
          label: '名人字画',
          value: '3'
        }],
        startDate: new Date('1980-1-1'),
        endDate: new Date()
      }
    },
    computed: {
      formatData(){
        return formatPicker(this.pickerTime)
      }
    },
    components: {
      'page-header': Header,
      'mt-radio': Radio,
      'mt-datetime-picker': DatetimePicker,
      'mt-button': Button
    },
    methods: {
      picker(){
        this.$refs.picker.open()
      },
      publish(){
        var d = formatPicker(this.pickerTime)
        console.log('title:' + this.title + ',content:' + this.content + ',status:' + this.status + ',author:' + this.author + ',pickerTime:' + d)
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  .public {
    padding: 2rem;
    background: linear-gradient(left top, #97FFFF 10%, #63B8FF 30%, #5CACEE 70%);
    .title {
      color: #fff;
      font-size: 1.4rem;
    }
    .form {
      padding: 2rem 2rem 0 2rem;
      &_item {
        padding-bottom: 1rem;
        input, textarea {
          width: 100%;
          border-radius: .5rem;
          color: #333;
          border: .1rem solid #ddd;
          padding: .8rem 0;
          text-indent: 1rem;
          outline: none;
        }
        .time {
          width: 60%;
          margin-right: 2rem;
        }
      }
    }
  }

  .mint-cell-wrapper {
    border: none;
  }
</style>
