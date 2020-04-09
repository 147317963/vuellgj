<template>
    <div class="homeFooterContainer">
        <router-link to="/foo"><i class="iconfont icon-daohangYH"></i><p>充值提款</p></router-link>
        <router-link to="/foo"><i class="iconfont icon-huodong"></i><p>优惠活动</p></router-link>
        <router-link to="/foo"><i class="iconfont icon-huodong"></i><p>开奖中心</p></router-link>
        <router-link :to="{ name:'report',params:{id:2} }"><i class="iconfont icon-edit"></i><p>个人报表</p></router-link>
        <router-link to="/foo"><i class="iconfont icon-kefu"></i><p>在线客服</p></router-link>

    </div>
</template>

<script>
    export default {
        name: "bottom",
        data() {
            return {}
        },
        methods: {//条用方法
        },
        mounted() {//加载完毕后
        },
        beforeCreate() {//初始化前
        },
        updated() {//更新数据
        },
        components: {//注册组件
        }
    }
</script>

<style scoped>
    .homeFooterContainer {
        border-top: 1px solid #e6e6e6;
        background-color: #f7f7f7;
    }
    .homeFooterContainer {
        width: 100%;
        height: 13.06667vw;
        box-sizing: border-box;
        position:fixed;
        bottom:0;
    }
    .homeFooterContainer a:first-child {
        color: #306bd8;
    }
    .homeFooterContainer a:nth-child(2) {
        color: #7418d5;
    }
     .homeView .homeFooterContainer a:nth-child(3) {
        color: #d60303;
    }
     .homeView .homeFooterContainer a:nth-child(4) {
        color: #daba02;
    }
    .homeFooterContainer a:nth-child(5) {
        color: #1fb355;
    }
    .homeFooterContainer a {
        display: -ms-flexbox;
        display: flex;
        width: 20%;
        height: 100%;
        float: left;
        -ms-flex-direction: column;
        flex-direction: column;
        -ms-flex-pack: center;
        justify-content: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .homeFooterContainer a .iconfont {
        display: block;
        line-height: 7.46667vw;
        font-size: 5.33333vw;
        margin-top: -.66667vw;
        padding: 0;
        color: inherit;
    }
     .homeFooterContainer a p {
        display: block;
        font-size: 3.2vw;
        line-height: 3.73333vw;
        color: inherit;
    }
</style>