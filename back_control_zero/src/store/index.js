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
            isCollapse:true
        }
    },
    mutations:{
        updataiscollapse(state,payload){
            state.isCollapse = !state.isCollapse

        }
    }
})