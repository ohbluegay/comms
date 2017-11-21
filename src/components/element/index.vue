<template>
  <div class="element">
    <div class="ele_item">
      <h3>布局</h3>
      <el-row>
        <el-col :span="12">111</el-col>
        <el-col :span="12">111</el-col>
      </el-row>
      <el-row>
        <el-col :span="8">2222</el-col>
        <el-col :span="8">2222</el-col>
        <el-col :span="8">2222</el-col>
      </el-row>
    </div>
    <div class="ele_item">
      <h3>container容器</h3>
      <el-container>
        <el-header>header</el-header>
        <el-container>
          <el-aside width="5rem">aside</el-aside>
          <el-main>main</el-main>
        </el-container>
        <el-footer>footer</el-footer>
      </el-container>
    </div>
    <div class="ele_item">
      <h3>icon图标</h3>
      <i class="el-icon-upload"></i>
      <i class="el-icon-circle-plus"></i>
    </div>
    <div class="ele_item">
      <el-button type="primary" plain icon="el-icon-download">button</el-button>
      <el-button type="warning" :loading="true">111</el-button>
    </div>
    <div class="ele_item">
      <h3>radio</h3>
      <el-radio v-model="sel" label="1">radio 1</el-radio>
      <el-radio v-model="sel" label="3">radio 2</el-radio>
      {{sel}}



      <el-radio-group v-model="sel">
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>

      <el-radio v-model="sel" label="1" border @change="choose">radio 1</el-radio>
      <el-radio v-model="sel" label="3" border>radio 2</el-radio>
    </div>
    <div class="ele_item">
      <h3>checkbox</h3>
      <el-checkbox-group v-model="check">
        <el-checkbox label="1">as</el-checkbox>
        <el-checkbox label="2">vv</el-checkbox>
        <el-checkbox label="3">vv</el-checkbox>
      </el-checkbox-group>
      <el-input v-model="sel" placeholder="请输入" suffixIcon="el-icon-upload"></el-input>
      {{check}}

     <el-switch v-model="switch2" activeColor="#13ce66" inactiveColor="#ddd"></el-switch>{{switch2}}

     <el-alert title="提示" type="error"></el-alert>

      <el-breadcrumb separator="^_^">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动页</el-breadcrumb-item>
        <el-breadcrumb-item>活动页2</el-breadcrumb-item>
        <el-breadcrumb-item>活动页3</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import ElContainer from "../../../node_modules/element-ui/packages/container/src/main";
  import ElHeader from "../../../node_modules/element-ui/packages/header/src/main";
  import ElAside from "../../../node_modules/element-ui/packages/aside/src/main";
  import ElMain from "../../../node_modules/element-ui/packages/main/src/main";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  import ElRadio from "../../../node_modules/element-ui/packages/radio/src/radio";
  import ElRadioGroup from "../../../node_modules/element-ui/packages/radio/src/radio-group";
  import ElCheckbox from "../../../node_modules/element-ui/packages/checkbox/src/checkbox";
  import ElCheckboxGroup from "../../../node_modules/element-ui/packages/checkbox/src/checkbox-group";
  import ElSwitch from "../../../node_modules/element-ui/packages/switch/src/component";
  import ElAlert from "../../../node_modules/element-ui/packages/alert/src/main";

  import {alert1} from '../../util/msg'
  import ElBreadcrumb from "../../../node_modules/element-ui/packages/breadcrumb/src/breadcrumb";
  import ElBreadcrumbItem from "../../../node_modules/element-ui/packages/breadcrumb/src/breadcrumb-item";
  export default{
    components: {
      ElBreadcrumbItem, ElBreadcrumb, ElAlert,
      ElSwitch, ElCheckboxGroup, ElCheckbox, ElRadioGroup, ElRadio, ElButton, ElMain, ElAside, ElHeader, ElContainer
    },
    data(){
      return {
        sel: '',
        check: [],
        options: [{
          value: '0',
          label: "option1"
        }, {
          value: '1',
          label: "option2"
        }, {
          value: '2',
          label: "option3"
        }],
        select: '',
        switch2:true
      }
    },
    methods: {
      choose(){
        console.log(this.sel)
        alert1(this,'111')
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss">
  @import "../../assets/scss/mixin.scss";

  .element {
    .ele_item {
      h3 {
        color: rgb(0, 160, 220);
        line-height: 4rem;
      }
      background: #fff;
      padding: 2rem;
      text-align: center;
    }
  }
</style>
