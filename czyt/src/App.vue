<template>
<div id="app">
  <header  :class="[this.logo ? true : 'active', '']" >
    <p  :class="[this.logo ? true : 'active', '']" >营收稽核</p>
    <button type="button" name="button" @click="menuOn"  :class="[this.logo ? true : 'active', '']" class="left">
      <i class="" :class="{'el-icon-menu':currentView == 'view-main','el-icon-close':currentView != 'view-main'}"></i>
    </button>
    <!-- <el-col class="navbar" >
      <el-menu theme="light" default-active="1" mode="horizontal" :router="true">
        <el-menu-item index="1" :route="{path:'/home'}">个性化服务系统</el-menu-item>
        <el-menu-item index="2" :route="{path:'/excl'}">基金会系统</el-menu-item>
        <el-menu-item index="3" :route="{path:'/excl1'}">资金管理系统</el-menu-item>
        <el-menu-item index="4" :route="{path:'/excl1'}">志愿者服务系统</el-menu-item>
        <el-menu-item index="5" :route="{path:'/excl1'}">基础平台系统</el-menu-item>
      </el-menu>
    </el-col> -->
    <button type="button" name="button" class="right">
      <i class="el-icon-date"></i>
    </button>
  </header>
  <main>
    <router-view></router-view>
  </main>
</div>
</template>

<script>
import {
  mapMutations
} from 'vuex'

import {
  mapGetters
} from 'vuex'

export default {
  data() {
    return {
      currentView: 'view-main',
    }
  },
  methods: {
    menuOn() {
      if (this.currentView == 'view-main') {
        this.currentView = 'view-down'
        this.setLogo(false)
      } else {
        this.currentView = 'view-main'
        this.setLogo(true)
      }
    },
    ...mapMutations({
      setLogo: 'SET_LOGO'
    })
  },
  computed: {
    ...mapGetters([
      'logo'
    ])
  },
  components: {}
}
</script>

<style lang="scss">
#app {
    font-family: Helvetica, sans-serif;
    height: 100%;
    background: #eef1f6;
}

header {
    height: 60px;
    padding-left: 260px;
    position: relative;
    z-index: 1000;
    background: #20A0FF;
    transition: 0.5s;
    &.active{
      padding-left: 120px;
    }
    p {
        position: absolute;
        top: 0;
        left: 0;
        width: 200px;
        height: 61px;
        line-height: 60px;
        text-align: center;
        background: #20A0FF;
        color: #fff;
        font-weight: bold;
        font-size: 18px;
        transition: 0.5s;
        overflow: hidden;
        &.active {
            width: 64px;
        }
    }
    .el-menu {
        background: #fff;
    }
    .left{
      height: 60px;
      width: 60px;
      font-size: 16px;
      color: #48576a;
      position: absolute;
      left: 200px;
      top: 0;
      background: #1D8CE0;
      color:#fff;
      border: 0;
      outline: none;
      transition: 0.5s;
      &:hover{
        background: #58B7FF;
      }
      &.active{
        left:64px;
      }
    }
    .right{
      height: 60px;
      width: 60px;
      font-size: 16px;
      color: #48576a;
      position: absolute;
      right: 0;
      top: 0;
      background: #1D8CE0;
      color:#fff;
      border: 0;
      outline: none;
      transition: 0.5s;
      &:hover{
        background: #58B7FF;
      }
      &.active{
        right:0;
      }
    }
}



main {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding-top: 60px;
    box-sizing: border-box;
}

.navbar .el-menu-item.is-active {
    border-bottom: 5px solid #20a0ff;
    background-color: #eef1f6;
}

::-webkit-scrollbar {
    width: 4px;
    background: rgba(0, 0, 0, 0.08);
}

::-webkit-scrollbar-thumb {
    background: #a4a4a4;
    border-radius: 0;
}
</style>
