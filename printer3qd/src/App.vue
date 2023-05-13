<template>
  <el-container>
    <el-aside width="15%">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>

      <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
        router
        :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="/app1/v2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="">
            <span slot="title">选项4</span>
            <el-menu-item index="/app1/v4">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/">
          <i class="el-icon-menu"></i>
          <span slot="title">数据信息</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="/app1/add">
          <i class="el-icon-setting"></i>
          <span slot="title">上传文件</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- <router-view /> -->
      <el-header>欢 迎 使 用</el-header>
            <el-main>
                <!-- 仔细看，核心在这，这里是路由的出口-->
                <router-view></router-view>
            </el-main>
    </el-container>
  </el-container>
</template>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

<script>
export default {
  name: 'App',
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
