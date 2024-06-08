//对整个项目api的管理
import request from "./request"
import Mock from "mockjs"
import homeApi from "./mockData/home"

Mock.mock('/home/getData',homeApi.getHomeData)

export default {
    getTableData(params){
        //home组件左侧表格数据获取
        return request({
            url:'home/getTableData',//
            method:'get',
            data:params,
            mock:true
        })
    },
    getUserData(params){
        return request({
            url:'user/getUser',//
            method:'get',
            data:params,
            mock:false
        })
    }
}