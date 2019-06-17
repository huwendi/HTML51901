import api from '../../utils/api'
import {get} from '../../utils/request'

//types
const SET_HOME_BANNER_DATA = 'home/set_banner_data';

//state
const initialState = {
    title: '首页',
    banner: []
};

//reducer
export default (state = initialState, action)=>{
    //根据action的type值处理state
    switch (action.type) {
        //设置banner数据
        case SET_HOME_BANNER_DATA:
            return {
                ...state,
                banner: action.value
            }
        //其他情况
        default:
            return state;
    }
    
}

// 同步action
// 设置首页轮播图数据
const setHomeBannerData = (params)=>(
    {
        type: SET_HOME_BANNER_DATA,
        value: params
    }
)

// 异步action
//请求首页轮播图数据
const requestHomeBannerData = () => async (dispatch) => {
    //发送请求
    let result = await get(api.TEA_BANNER);
    //得到结果，将结果传给action
    let action = setHomeBannerData(result.data);
    //派发action，修改state
    dispatch(action);
}




// 向外输出所有action
export const actions = {
    requestHomeBannerData
}