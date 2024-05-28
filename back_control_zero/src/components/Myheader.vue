<template>
    <el-header style="background-color: #333;">
        <div class="l-content">
            <!-- 图标的展示 -->
           <el-button siez="small" plain @click="handleisCollapse()">
                <el-icon :size="20"><Menu /></el-icon>
           </el-button>
           <h3 style="color:#fff">首页</h3>

           <el-button siez="small">
            <el-icon :size="20"><Menu /></el-icon>
       </el-button>
       <h3 style="color:#fff">白天黑夜模式切换</h3>


           
        </div>

        <div class="r-content">
            <el-dropdown>
                <img class="user" src="../imgs/user.jpg" alt="">

                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
        </div>
    </el-header>
</template>
<script>
// import {useStore} from 'vuex'

export default {
  setup() {
  },
  methods: {
    handleisCollapse() {
      this.$store.commit('updataiscollapse');
    }
  }
}

</script>

<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;   

}
.r-content .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.l-content{
    display: flex;
    align-items: center;
}
.el-header {
    padding-left: 0;
    padding-right: 0;
}
.el-button{
    margin: 20px;
}
</style>