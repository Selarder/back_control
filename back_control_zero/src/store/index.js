import Vuex from 'vuex'
// export default createStore({
//     state:{
//         iscollapse:true
//     },
//     mutations:{
//         updataiscollapse(state,payload){

//             state.iscollapse = !state.iscollapse
//         }
//     }
// })
export default new Vuex.Store({
    // ...
    state(){
        return{
            isCollapse:true,
            currentMenu :null
        }
    },
    mutations:{
        updataiscollapse(state,payload){
            state.isCollapse = !state.isCollapse

        }
        // selectMenu(state,value){
        //     value.name=='home'?(state.currentMenu=null):(state.currentMenu = value)
        // }
    }
})