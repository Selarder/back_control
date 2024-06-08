import { default } from '../views/main.vue';
<template>
  <el-aside :width="$store.state.isCollapse ? '180px' : '64px'"   background-color="#535c64">
  <el-menu

  class="el-menu-vertical-demo"
  background-color="#535c64"
  text-color="#fff"
  :collapse="!$store.state.isCollapse"
  :collapse-transition="false"
  >
  <h3 v-show="$store.state.isCollapse">通用后台管理系统</h3>
  <h3 v-show="!$store.state.isCollapse">后台</h3>


   <el-menu-item :index="item.label" v-for="item in noChildren()" :key="item.path"
   @click="clickUser(item)">
  <component class="icons" :is="item.icon"></component>
  <span>{{item.label }}</span>
</el-menu-item>

  <el-sub-menu :index="item.label" v-for="item in hasChildren()" :key="item.path">
    <template #title>
      <component class="icons" :is="item.icon"></component>
      <span>{{item.label }}</span>
    </template>
    <el-menu-item-group>
      <el-menu-item :index="subitem.label" v-for="(subitem,subindex) in item.children" :key="subindex.path"
      @click="clickUser(subitem)">
      <component class="icons" :is="subitem.icon"></component>
       <span>{{subitem.label }}</span>
      </el-menu-item>
    </el-menu-item-group>
  </el-sub-menu>

</el-menu>
</el-aside>
</template>

<script>
import {useRouter} from 'vue-router'
import { useStore } from 'vuex';
export default {
  //二级菜单的数据
  setup() {
    const store = useStore
    const list =[
      {
        path:"/user",
        name:"user",
        label:"用户管理",
        icon:"user",
        url:"UserManage/UserManege"
      },
      {
        label:"其他",
        icon:"location",
        path:"/Other",
        children:[
           {
        path:"/page1",
        name:"page1",
        label:"页面1",
        icon:"setting",
        url:"Other/PageOne"
      },
      {
        path:"/page2",
        name:"page2",
        label:"页面2",
        icon:"setting",
        url:"Other/PageTwo"
      },
        ],
      }
    ];
    //判断是否有二级菜单的;方法
  const noChildren = ()=>{
    return list.filter((item)=>!item.children);
  };
  const hasChildren =()=>{
    return list.filter((item)=> item.children)
  };
  const router = useRouter();
  const clickUser = (item)=>{
    router.push({
      name:item.name,

    })
    store.commit("selectMenu",item)

  }
    return{
      noChildren,
      hasChildren,
      clickUser
    }
  }
}
</script>
<style>
.icons{
  width: 20px;
  height: 20px;
}
.el-aside{
  background-color:#535c64;
}
.el-menu{
  border-right: 0;
}
h3{
  line-height: 48px;
  color: #fff;
  text-align: center;
}
</style>