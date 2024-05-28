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
                    v-for="(val,key) in tableLable" :key="key" :prop="key" :lable="val">

                    </el-table-column>
                </el-table>

            </el-card>
        </el-col>
        <el-col :span="16" style="margin-top: 24px"></el-col>
    </el-row>
</template>

<script>
import {defineComponent} from "vue"
export default defineComponent({
    setup(){
        const tableData = [
            {
            name:'产品名称',
            todayBuy:'今日购买',
            mothBuy:'本月购买',
            totalBuy:'总购买',
           },
            {
                name:"冰红茶",
                todayBuy:300,
                mothBuy:9100,
                totalBuy:31000,
            },
            {
                name:"冰绿茶",
                todayBuy:100,
                mothBuy:3100,
                totalBuy:11000,
            },
            {
                name:"热带风味冰红茶",
                todayBuy:200,
                mothBuy:2100,
                totalBuy:22000,
            },
            {
                name:"劲凉冰红茶",
                todayBuy:160,
                mothBuy:1800,
                totalBuy:12000,
            },
        ];
        const tableLable = {
            name:'产品名称',
            todayBuy:'今日购买',
            mothBuy:'本月购买',
            totalBuy:'总购买',
        }
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
</style>