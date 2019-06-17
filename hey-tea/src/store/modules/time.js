import api from '../../utils/api'
import {get} from '../../utils/request'

const SET_TIME_NEWS_DATA = 'time/set_time_news_data';

const initialState = {
    title: '时光',
    newsData: []
};

export default (state = initialState, action)=>{
    //根据action的type值处理state
    switch (action.type) {
        case SET_TIME_NEWS_DATA:
            return {
                ...state,
                newsData: action.value
            }
        default:
            return state;
    }
}

// 设置动态数据
const setTimeNewsData = (params)=>({
    type: SET_TIME_NEWS_DATA,
    value: params
})

//请求动态数据
const requestTimeNewsData = ()=> async (dispatch) => {
    let result = await get(api.TEA_NEWS);
    let action = setTimeNewsData(result.data);
    dispatch(action);
}

export const actions = {
    requestTimeNewsData
}