import { defineComponent } from 'vue';
<template>
    <div class="table">
        <el-table :data="list" style="width:100%">
            <el-table-column
            v-for="item in tableLable"
            :key="item.prop"
            :lable="itme.label"


            ></el-table-column>

        </el-table>


    </div>
</template>
<script>
import {defineComponent, reactive} from 'vue'   
import { getCurrentInstance, onMounted, ref} from 'vue'
export default defineComponent({
    setup() {
        const list = ref([])
        const {proxy} = getCurrentInstance();
        const tableLable =reactive([
            {
                prop:"name",
                lable:"姓名"
            },
            {
                prop:"age",
                lable:"年龄"
            },
            {
                prop:"sexlable",
                lable:"性别"
            },
            {
                prop:"birth",
                lable:"出生日期",
                width:200
            },  
            {
                prop:"add",
                lable:"地址",
                width:320
            },  
        ])
        onMounted(()=>{
            getUserData

        })
        const getUserData = async()=>{
            await axios.get("../../api/mockData/user.js").then((res)=>{
            if(res.data.code==200){
                list.value=res.lis;
            }
        })
        return{
            list,
        }
    }
}
})
</script>