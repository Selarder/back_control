export default {
     getHomeData1:()=>{
        return{
            code:200,
            data:{
                tableData:[
                    {
                    name:'产品名称',
                    todayBuy:'今日购买',
                    mothBuy:'本月购买',
                    totalBuy:'总购买',
                },
                {
                    name:"冰柠茶",
                    todayBuy:800,
                    mothBuy:29100,
                    totalBuy:81000,
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
                ],
            }
        }
    }
}