<template>
  <div class="common-layout">
    <el-container class="lay-container" style="height:100%;">

      <Myaside />

      <el-container class="r-container">
        <el-header>
          <Myheader/>
        </el-header>

        <el-main>
          <router-view />
        </el-main>
      </el-container>
      
    </el-container>
  </div>

</template>
<script>
import { defineComponent } from 'vue'
import Myheader from '../components/Myheader.vue'
import Myaside from '../components/Myaside.vue';
// app.component('header', header)

export default defineComponent({
    components: {
      Myheader,
      Myaside
    },
});

// export default {
//   components: {
//     header
//   }
// }
 


</script>
<style>
.common-layout{
  height:100%;
}
.el-aise{
  background-color: red;
}

</style>
<!-- .r-container{
  flex-wrap: wrap;
} -->
