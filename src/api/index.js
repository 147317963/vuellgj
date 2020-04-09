const api = {
    //登录
    login: '/login/user',
    //退出
    logout: '/login/logout',
    //订单
    order:'/order/index',
    //个人报表
    report:'/report/index',
    //团队报表
    team: {
        index: '/team/index',
        Db: '/admin/log/db'
    },
    //赔率
    odds:'/odds',
    //历史开奖数据
    history:'/history'
};
export default api