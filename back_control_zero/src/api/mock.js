import Mock from "mockjs"
import homeApi1 from "./mockData/home1"
import homeApi2 from "./mockData/home2"

Mock.mock('/home1/getData1',homeApi1.getHomeData1)
Mock.mock('/home2/getData2',homeApi2.getHomeData2)  
