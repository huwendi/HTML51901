/*
接口：店铺列表
method： GET
params:无
*/
const SHOP_LIST = '/api/tea/shoplist';

/*
接口：定位店铺
method： GET
params:longitude(经度) latitude(纬度)
*/
const GET_NEARBY_SHOP = '/api/tea/get_shop';

/*
接口：新品banner
method: GET
params: 无
*/
const TEA_BANNER = '/api/tea/new_info';

/*
接口：菜单
method: GET
params: 无
*/
const TEA_MENU = '/api/tea/goods';

/*
接口：喜茶动态
method: GET
params:无
*/
const TEA_NEWS = '/api/tea/news';


export default {
    SHOP_LIST,
    GET_NEARBY_SHOP,
    TEA_BANNER,
    TEA_MENU,
    TEA_NEWS
}
