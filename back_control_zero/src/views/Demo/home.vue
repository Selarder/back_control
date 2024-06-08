import defineComponent from '../main.vue';
<template>
    <el-row class="home" :gutter="20">
      <el-col :span="8" style="margin-top: 24px">
        <el-card shadow="hover">
          <div class="user">
            <img src="../../imgs/user.jpg" alt="">
            <div class="user-info">
              <p class="name">Adim</p>
              <p class="ruler">controler</p>
            </div>
          </div>
          <div>
            <div class="login-info">
              <p>上次登录时间:<span>2022-7</span></p>
              <p>上次登录地点:<span>重庆市南岸区</span></p>
            </div>
          </div>
        </el-card>
        <el-card shodow="hover" style="margin-top: 20px" height="450px">
          <el-table :data="tableData">
            <el-table-column
              v-for="(val, key) in tableLable"
              :key="key"
              :prop="key"
              :lable="val"
            >
                </el-table-column>
            </el-table>

        </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 24px">
      <div class="div2">
        <el-card :body-style="{display:'flex',padding: 0}"
          <!-- v-for="item in countData"
        :key="item.name"  -->
        v-for="(val, key) in tableLable
              :key="key"
              :prop="key"
              :lable="val"
        <component class="icons" 
        :is="item.icons"
        :style="{background:item.color}">
        <div>
            <p>test</p>
            <p>{{item.value}}</p>
            <p>{{item.name}}</p>
        </div>
    </component>

        </el-card>
      </div>
      <el-card style="height:280px">
        <div ref="echart" style="height:280px"></div>

      </el-card>
    </el-col>
</el-row>
</template>

<!-- <script>
import {defineComponent,getCurrentInstance,onMounted,ref} from "vue"
import axios from 'axios'
export default defineComponent({
setup(){
    let tableData = ref([])
    const tableLable = {
        name:'产品名称',
        todayBuy:'今日购买',
        mothBuy:'本月购买',
        totalBuy:'总购买',
    }
    const {proxy} = getCurrentInstance();
    const getTableList= async ()=>{
        await axios.get("/home/getData").then((res)=>{
            if(res.data.code==200){
                tableData.value=res.data.data.tableData
            }
        })

    // let res =await proxy.$api.getTableData();
    // tableData.value = res.data;
    onMounted(()=>{
        getTableList();
        // getCurrentInstance();

    })
    return {
        tableData,
        tableLable
    }

}
}
})

</script> -->
<script>
import {defineComponent,onMounted,ref} from "vue"
import axios from 'axios'
export default defineComponent({
setup(){
    let tableData = ref([])
    let countData = [
                   {
                       name:"今日支付订单",
                       value:1234,
                       icon:"SuccessFilled",
                       color:"#2ec7c9"
                   },
                   {
                       name:"今日收藏订单",
                       value:190,
                       icon:"StarFilled",
                       color:"#ffb980"
                   },
                   {
                       name:"今日未支付订单",
                       value:1230,
                       icon:"GoodsFilled",
                       color:"#5ablef"
                   },
                   {
                       name:"本月支付订单",
                       value:6657,
                       icon:"SuccessFilled",
                       color:"#2ec7c9"
                   },
                   {
                       name:"本月收藏订单",
                       value:6657,
                       icon:"SStarFilled",
                       color:"#ffb980"
                   },
                   {
                       name:"本月未支付订单",
                       value:6657,
                       icon:"GoodsFilled",
                       color:"#5ablef"
                   },
               ]
    const tableLable = {
        name:'产品名称',
        todayBuy:'今日购买',
        mothBuy:'本月购买',
        totalBuy:'总购买',
    }
    const getTableList= async ()=>{
        await axios.get("/home1/getData1").then((res)=>{
            if(res.data.code==200){
                tableData.value=res.data.data.tableData
            }


        })

    }
    // const getCountData = async ()=>{
    //     await axios.get("../../api/mockData/home2.js").then((res)=>{
    //         if(res.data.code==200){
    //             countData.value=res.data.data.countData
    //         }


    //     })

    // }
    onMounted(()=>{
        getTableList();
        // getCountData()

    })
    return {
        tableData,
        tableLable
    }

}
})
</script>
<style scoped>
.user{
    display: flex;
    align-items: center;
    padding-bottom: 20px ;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
}
img{
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 40px;
}
.login-info p{
    line-height: 30px;
    font-size: 14px;
    color:#999;
}
.login-info span{
    color: #666;
    margin-left: 10px;
}   
.div2{
    width: 300px;
    height: 300px;
}
</style>