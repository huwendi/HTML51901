import api from '../../utils/api'
import {get} from '../../utils/request'

//types
const SET_MENU_DATA = 'menu/set_menu_data';

const initialState = {
    title: '菜单',
    menu: []
};

export default (state = initialState, action)=>{
    //根据action的type值处理state
    switch (action.type) {
        // 设置菜单数据
        case SET_MENU_DATA:
            return {
                ...state,
                menu: action.value
            }
        default:
            return state;
    }
    
}

// 同步action
// 设置菜单数据
const setMenuData = (params) => ({
    type: SET_MENU_DATA,
    value: params
})

// 异步action
//请求菜单数据
const requestMenuData = () => async (dispatch) => {
    let result = await get(api.TEA_MENU);
    dispatch(setMenuData(result.data));
}

export const actions = {
    requestMenuData
}