<template>    
<div>
  <el-container>
    <el-header height="50px" style="padding:0;color:darkgray;background-color: black;">
      <div class="header">
        <div>
          <div><img alt="Vue logo" src="./assets/logo.png" width="40" height="40" style="float: left;">
          </div>
          <div style="position:relative;float: left;">巡检管理系统</div>
          <div style="position:relative;float: left;top: 9px;left: 10px;">
            <el-input style="float: left;" v-model="search_value" :size="mini" :clearable="true" prefix-icon="el-icon-search" placeholder="查询内容" type="text">
          </el-input></div>
      </div>
      </div>


    <el-avatar :size="40" id="user_pic" src="https://dayu.woa.com/avatars/zachczhang/profile.jpg"></el-avatar>
    </el-header>


  </el-container>
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
        <el-menu :default-openeds="['1']">
          <el-sub-menu index="1">
            <template #title>
              <el-icon><message /></el-icon>巡检总览
            </template>

              <el-menu-item index="1-1">Option 1</el-menu-item>
              <el-menu-item index="1-2">Option 2</el-menu-item>
   
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="2">
            <template #title>
              <el-icon><icon-menu /></el-icon>结果查询
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="2-1">Option 1</el-menu-item>
              <el-menu-item index="2-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="2-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="2-4">
              <template #title>Option 4</template>
              <el-menu-item index="2-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="3">
            <template #title>
              <el-icon><setting /></el-icon>配置管理
            </template>
            <el-menu-item-group>
              <template #title>Group 1</template>
              <el-menu-item index="3-1">Option 1</el-menu-item>
              <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
              <template #title>Option 4</template>
              <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

          <el-sub-menu index="4">
            <template #title>
              <el-icon><setting /></el-icon>报表分析
            </template>
            <el-menu-item index="4-1">Option1</el-menu-item>
          </el-sub-menu>
          
        </el-menu>
      </el-scrollbar>
      </el-aside>

      <el-container>
        <el-header style="text-align: center; font-size: 15px;border: 1px solid #ccc;background-color: ;">
        <div class="toolbar">
          <el-dropdown>
            <el-icon style="margin-right: 8px; margin-top: 1px"
              ></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <h1 style="text-align: left;position: relative;top:-25px;">主页</h1>
          <span>Tom</span>
        </div>
        </el-header>

        <el-main>
        
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" />
            <el-table-column prop="name" label="Name"  />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-main>
        <DemoOne v-show="false"></DemoOne>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { ref } from 'vue'
//import HelloWorld from './components/HelloWorld.vue'
import DemoOne from './components/DemoOne.vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
console.log()
const tableData = ref(Array.from({ length: 20 }).fill(item))

export default {
  name: 'App',
  components: {
    //HelloWorld,
    DemoOne
  },
  data(){
    return {
      tableData:tableData,
      search_value:""
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
.header {
  
  font-size: 20x;
  line-height: 45px;
  background-color:black;
  padding-left: 20px;


}
#user_pic {
  margin: 20px;
  float: right;
  display: flex;
  overflow: hidden;
  align-items: center;
  position: relative;
  top: -15px;
  right: 45px;
}

</style>
