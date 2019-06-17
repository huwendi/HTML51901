import api from '../../utils/api'
import {get} from '../../utils/request'

//types 
const SET_HOT_CITYS_DATA = 'shop/set_hot_citys_data';
const SET_SHOP_LIST_DATA = 'shop/set_shop_list_data';
const SET_CURRENT_SHOP = 'shop/set_current_shop';

const initialState = {
    hotCitys: [],
    allShopList: [],
    currentShop: {}
};

export default (state = initialState, action)=>{
    //根据action的type值处理state
    switch (action.type) {
        case SET_HOT_CITYS_DATA:
            return {
                ...state,
                hotCitys: action.value
            };
        case SET_SHOP_LIST_DATA:
            return {
                ...state,
                allShopList: action.value
            };
        case SET_CURRENT_SHOP: 
            return {
                ...state,
                currentShop: action.value
            }
        default: 
            return state;
    }
    
}

// 同步actions
//设置热门城市
const setHotCitysData = (params) => ({
    type: SET_HOT_CITYS_DATA,
    value: params
})

// 设置所有店铺数据
const setShopListData = (params) => ({
    type: SET_SHOP_LIST_DATA,
    value: params
})

// 设置当前用户下单的店铺
const setCurrentShop = (params) => ({
    type: SET_CURRENT_SHOP,
    value: params
})

//异步actions
//请求店铺数据
const requestShopData = () => async (dispatch) => {
    let result = await get(api.SHOP_LIST);
    //派发action，修改state
    dispatch(setHotCitysData(result.data.hot_shop_list));
    dispatch(setShopListData(result.data.all_shop_list));
}

//向外输出actions
export const actions = {
    requestShopData,
    setCurrentShop
}