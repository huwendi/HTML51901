const ADD_TEA = 'cart/add_tea';
const REDUCE_TEA = 'cart/reduce_tea';
const DELETE_TEA = 'cart/delete_tea';

const initialState = {
    title: '购物车',
    data: []
};


//reducer函数
export default (state = initialState, action)=>{
    //根据action的type值处理state
    switch (action.type) {
        case ADD_TEA: {

            //执行添加
            //取得喜茶的id
            let {id} = action.value;
            let data = [...state.data];
            //判断购物车是否有这件喜茶
            let index = data.findIndex(item=>(item.id===id));
            if(index >= 0){
                //购物车已经有了，count+1
                //最多购买5件，是否还能购买
                let count = data[index].count;
                if(count >= 5){
                    return state;//不可以买了
                }else{
                    //还可以买
                    let info = {
                        ...data[index],
                        count: count+1
                    };
                    data.splice(index, 1, info);
                }
            }else{
                //购物车没有，添加喜茶，设置count=1
                let info = {
                    ...action.value,
                    count: 1
                }
                data = [...data, info];
            }
            return {
                ...state,
                data
            }
        }
        case REDUCE_TEA: {
            console.log(REDUCE_TEA);
            //商品数量-1
            let {id} = action.value;
            let data = [...state.data];
            //查找购物车中的这件商品
            let index = data.findIndex(item=>(item.id === id));
            if(index >= 0){
                //这件存在购物车中
                let count = data[index].count;
                if(count > 1){
                    //数量能-1
                    let info = {
                        ...data[index],
                        count: count-1
                    }
                    data.splice(index, 1, info);
                    //修改数据
                    return {
                        ...state,
                        data
                    }
                }else{
                    //数量不能再减了
                    return state;
                }
            }else{
                //这件不存在购物车中
                return state;
            }
        }
        default:
            return state;
    }
}

//同步action
// 添加喜茶   +1
const addTeaAction = (tea)=>({
    type: ADD_TEA,
    value: tea
})

// 减少喜茶   -1
const reduceTeaAction = (tea)=>({
    type: REDUCE_TEA,
    value: tea
})

// 删除喜茶
const deleteTeaAction = (tea)=>({
    type: DELETE_TEA,
    value: tea
})

export const actions = {
    addTeaAction,
    reduceTeaAction,
    deleteTeaAction
}